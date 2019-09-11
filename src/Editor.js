import React from 'react';
import ReactHtmlParser, {convertNodeToElement} from 'react-html-parser';
import PropTypes from 'prop-types';
import {MRRTNodeComponent} from './MRRTNodeComponent';
import ReactDOMServer from 'react-dom/server';
import {connect} from 'react-redux';

class MRRTSection extends MRRTNodeComponent {
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

    renderInEditorMode() {
        let state = this.state;
        return <input value={state.sectionName}/>;
    }

    renderInReportMode() {
        return <h2>{this.state.sectionName}</h2>;
    }
}

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

export class Editor extends React.Component {

    render() {


        return <div style={{
            display: 'grid',
        }}
        >
            <div style={{ gridColumn: 1 }}>
                <h1>Template editor</h1>
                <MRRTRenderer mode='edit' toHTML={false}/>
            </div>
            <div style={{ gridColumn: 2 }}>
                <h1>Template preview</h1>
                <MRRTRenderer mode='template' toHTML={false}/>;

            </div>
            <div style={{ gridColumn: 3 }}>
                <h1>Report preview</h1>
                <MRRTRenderer mode='report' toHTML={false}/>

            </div>
            <div style={{ gridColumn: 4 }}>
                <h1>Template html preview</h1>
                <MRRTRenderer mode='template' toHTML={true}/>;
            </div>
        </div>;
    }
}


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


    render() {
        let templateHTMl = this.props.templateHTMl;
        let out = ReactHtmlParser(templateHTMl, { transform: this.transform });
        let htmlStr = ReactDOMServer.renderToStaticMarkup(out);
        let returnHtml = this.props.toHTML;
        return <div>
            {!returnHtml && out}
            {returnHtml && <p>
                {htmlStr}
            </p>}
        </div>;
    }
}

export let MRRTRenderer = connect((state) => {
    return { templateHTMl: state };
}, dispatch => {
    return { updateHTML: (templateHTML) => dispatch({ type: 'SET_TEMPLATE' }) };
})(MRRTRendererDisconnected);

MRRTRenderer.propTypes = {
    mode: PropTypes.oneOf(['editor', 'template', 'report']),
    toHTML: PropTypes.bool.isRequired,
};
