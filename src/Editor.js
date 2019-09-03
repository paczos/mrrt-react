import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {MRRTNodeComponent} from './MRRTNodeComponent';
import ReactDOMServer from 'react-dom/server';

class MRRTSection extends MRRTNodeComponent {
    renderInTemplateMode() {
        let node = this.props.node;
        return <section data-section-name={node.attribs['data-section-name']}>
            <header className="level1">
                {node.attribs['data-section-name']}
            </header>
            <p>
                {node.children.map((n, i) => this.props.transformFunc(n, i))}
            </p>
        </section>;
    }
}

MRRTSection.propTypes = {
    transformFunc: PropTypes.func.isRequired,
    node: PropTypes.object.isRequired,
};


export class Editor extends React.Component {
    factoryFunctionsLib = [
        {
            conditionFunc: (node) => (node.type === 'tag' && node.name === 'section'),
            makeObj: (node) => <MRRTSection mode={this.state.mode} transformFunc={this.transform}
                                            node={node}/>,
        },
    ];
    transform = (node, index) => {
        let factObj = this.factoryFunctionsLib.find((factFunc) => factFunc.conditionFunc(node));
        if (typeof factObj !== 'undefined') {
            return factObj.makeObj(node, this.transform);
        }
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
