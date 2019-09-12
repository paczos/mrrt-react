import React from 'react';
import ReactHtmlParser, {convertNodeToElement} from 'react-html-parser';
import PropTypes from 'prop-types';
import {MRRTNodeComponent} from './MRRTNodeComponent';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import {store} from './App';

class MRRTSectionDisconnected extends MRRTNodeComponent {
    constructor(props) {
        super(props);
        let node = props.node;
        this.state = {
            sectionName: node.attribs['data-section-name'],
        };
    }

    renderInTemplateMode() {
        let state = this.state;
        let node = this.props.node;
        return <section data-section-name={state.sectionName}>
            {node.children.map((n, i) => this.props.transformFunc(n, i))}
        </section>;
    }

    handleSectionNameChange = (e) => {
        console.log((e.target.value));
        this.setState({ sectionName: e.target.value }, this.props.updateHTML);
    };

    renderInEditorMode() {
        let state = this.state;
        return <input value={state.sectionName} onChange={this.handleSectionNameChange}/>;
    }

    renderInReportMode() {
        return <h2>{this.state.sectionName}</h2>;
    }
}

let MRRTSection = connect(undefined, (dispatch) => ({
    updateHTML: () => dispatch({ type: 'UPDATE_HTML' }),
}))(MRRTSectionDisconnected);
MRRTSection.propTypes = {
    transformFunc: PropTypes.func.isRequired,
    node: PropTypes.object.isRequired,
};

class MRRTText extends MRRTNodeComponent {
    constructor(props) {
        super(props);
        let node = props.node;
        this.state = {
            text: node.attribs['value'],
        };
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value });
    };

    renderInTemplateMode() {
        let state = this.state;
        return <input value={state.text} onChange={this.handleTextChange}>
        </input>;
    }
}

class EditorDisconnected extends React.Component {

    render() {
        return <div style={{
            display: 'grid',
        }}
        >
            <div style={{ gridColumn: 1 }}>
                <h1>Template editor</h1>
                <MRRTRenderer mode='edit' templateHTML={this.props.templateHTML} toHTML={false}
                              portalContainer={document.getElementById('templatePreview')}/>
            </div>
            <div style={{ gridColumn: 2 }}>
                <h1>Template preview</h1>
                {/*<MRRTRenderer mode='template' templateHTML={this.props.templateHTML} toHTML={false}*/}
                {/*              portalContainer={document.getElementById('reportPreview')}/>*/}
            </div>
            <div style={{ gridColumn: 3 }}>
                <h1>Report preview</h1>
                <div id='reportPreview'/>
            </div>
            <div style={{ gridColumn: 4 }}>
                <h1>Template html preview</h1>
                <div id='templatePreview'/>
            </div>
        </div>;
    }
}

export let Editor = connect((state) => ({
    templateHTML: state.templateHTML,
}))(EditorDisconnected);

class MRRTRendererDisconnected extends React.Component {
    factoryFunctionsLib = [
        {
            conditionFunc: (node) => (node.type === 'tag' && node.name === 'section'),
            makeObj: (node) => <MRRTSection mode={this.props.mode} transformFunc={this.transform}
                                            node={node}/>,
        },
        {
            conditionFunc: (node) => (node.type === 'tag' && node.attribs['data-field-type'] === 'TEXT'),
            makeObj: (node) => <MRRTText mode={this.props.mode} transformFunc={this.transform}
                                         node={node}/>,
        },
    ];
    transform = (node, index) => {
        let factObj = this.factoryFunctionsLib.find((factFunc) => factFunc.conditionFunc(node));
        if (typeof factObj !== 'undefined') {
            return factObj.makeObj(node, this.transform);
        }
        return convertNodeToElement(node, index, this.transform);
    };

    constructor(props) {
        super(props);
        console.log(this.props.templateHTML);

        this.myRef = React.createRef();
        this.state = {
            tree: this.createTreeWithRef(),
        };
    }

    createTreeWithRef = () => {

        return <Provider
            store={store}>{ReactHtmlParser(this.props.templateHTML, { transform: this.transform })}</Provider>;
    };

    render() {
        console.log('should update html?', this.props.shouldUpdateHTML);
        if (this.props.shouldUpdateHTML) {
            console.log('updating html in store: render current state to html string');
            console.log(this.myRef);
            let htmlStr = ReactDOMServer.renderToStaticMarkup(this.state.tree);
            console.log('update html in store');
            this.props.updateHTML(htmlStr);
            console.log('set the new html in store as current state tree. Should update html?', this.props.shouldUpdateHTML);
        }
        if (this.props.shouldSetState) {
            this.setState({ tree: this.createTreeWithRef() });
            this.props.finishUpdate();
        }

        console.log(this.state.tree);
        return <div>
            {this.state.tree}
            {ReactDOM.createPortal(this.props.templateHTML, this.props.portalContainer)}
        </div>;
    }

    handleClick = () => {
        console.log(this.props.children);
        this.props.children.updateHTML(ReactDOMServer.renderToStaticMarkup(<div>{this.props.children}</div>));
    };
}

export let MRRTRenderer = connect((state) => {
    console.log('map state to props called with shouldUpdate', state.updateHTML);
    return { shouldUpdateHTML: state.updateHTML, shouldSetState: state.justUpdated };
}, dispatch => {
    return {
        updateHTML: (templateHTML) => dispatch({ type: 'SET_TEMPLATE', payload: templateHTML }),
        finishUpdate: () => dispatch({ type: 'FINISH_UPDATE' }),
    };
})(MRRTRendererDisconnected);

MRRTRenderer.propTypes = {
    mode: PropTypes.oneOf(['edit', 'template', 'report']),
    toHTML: PropTypes.bool.isRequired,
    portalContainer: PropTypes.node,
};
