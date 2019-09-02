import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {MRRTNodeComponent} from './MRRTNodeComponent';

class MRRTOption extends MRRTNodeComponent {

}

export class Editor extends React.Component {

    transform = (node, index) => {
        if (node.type === 'tag' && node.name === 'section') {
            return <section>{node.attribs['data-section-name']}
                {node.children.map((n, i) => this.transform(n, i))}
            </section>;
        }

    };

    render() {
        let templateHTMl = this.props.templateHTMl;
        return <div>
            {
                ReactHtmlParser(templateHTMl, { transform: this.transform })
            }
        </div>;
    }
}

Editor.propTypes = {
    templateHTMl: PropTypes.string.isRequired,
};
