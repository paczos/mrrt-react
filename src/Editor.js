import React from 'react';
import ReactHtmlParser, {convertNodeToElement} from 'react-html-parser';
import PropTypes from 'prop-types';
import {MRRTNodeComponent} from './MRRTNodeComponent';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import {store} from './App';

import {
    Editor,
    EditorState, ContentState, convertFromHTML, CompositeDecorator,
} from 'draft-js';
import {template_html} from './base_ct_neck';

export class MRRTEditor extends React.Component {

    constructor(props) {
        super(props);

        let blocksFromHTML = convertFromHTML(template_html);
        console.log(blocksFromHTML.contentBlocks.map(m => m.toJS()));
        console.log(blocksFromHTML.entityMap);


        const sampleMarkup =
            '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
            '<a href="http://www.facebook.com">Example link</a><br /><br/ >' +
            '<img src="image.png" height="112" width="200" />' +
            '<h4>asdad</h4>' +
            '<section>asdas</section>'
        ;
        blocksFromHTML = convertFromHTML(sampleMarkup);


        const editorState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
        );
        const Link = (props) => {
            const { url } = props.contentState.getEntity(props.entityKey).getData();
            return (
                <a href={url} style={{ color: 'red' }}>
                    {props.children}
                </a>
            );
        };

        const MRRTSection = (props) => {
            return (
                <span style={{ color: 'green' }}>section </span>
            );
        };

        const decorator = new CompositeDecorator([
            {
                strategy: this.sectionStrategy,
                component: MRRTSection,
            }]);
        this.state = {
            editorState: EditorState.createWithContent(editorState, decorator),
        };

    }

    sectionStrategy = (contentBlock, callback, contentState) => {
        this.findWithRegex(this.SECTION_REGEX, contentBlock, callback);
    };


    onChange = (editorState) => this.setState({ editorState });

    render() {
        return (
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}/>
        );
    }

    SECTION_REGEX = /<section.*<\/section>/g;

    findWithRegex = (regex, contentBlock, callback) => {
        const text = contentBlock.getText();
        console.log('looking for items using regex', regex);
        let matchArr, start;
        while ((matchArr = regex.exec(text)) !== null) {
            console.log('foond', regex, 'match!');
            start = matchArr.index;
            callback(start, start + matchArr[0].length);
        }

    };
}

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
