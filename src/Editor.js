import React from 'react';
import ReactHtmlParser, {convertNodeToElement} from 'react-html-parser';
import PropTypes from 'prop-types';
import {MRRTNodeComponent} from './MRRTNodeComponent';
import ReactDOMServer from 'react-dom/server';

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
        let node = this.props.node;
        return <input value={state.text} onChange={this.handleTextChange}>
        </input>;
    }
}


export class Editor extends React.Component {
    factoryFunctionsLib = [
        {
            conditionFunc: (node) => (node.type === 'tag' && node.name === 'section'),
            makeObj: (node) => <MRRTSection mode={this.state.mode} transformFunc={this.transform}
                                            node={node}/>,
        },
        {
            conditionFunc: (node) => (node.type === 'tag' && node.attribs['data-field-type'] === 'TEXT'),
            makeObj: (node) => <MRRTText mode={this.state.mode} transformFunc={this.transform}
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

    state = { mode: 'template' };

    render() {
        let templateHTMl = this.props.templateHTMl;
        let out = ReactHtmlParser(templateHTMl, { transform: this.transform });
        let htmlStr = ReactDOMServer.renderToStaticMarkup(out);

        return <div>
            {out}
            <p>
                {htmlStr}
            </p>
        </div>;
    }
}

Editor.propTypes = {
    templateHTMl: PropTypes.string.isRequired,
};
