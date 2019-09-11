import React from 'react';
import PropTypes from 'prop-types';

export class MRRTNodeComponent extends React.Component {
    fromHTMLTemplate(node) {
        throw new Error(`fromTemplate not implemented in ${this._getClassName()}`);
    }

    constructor(props) {
        super(props);
        this._getClassName = this._getClassName.bind(this);
    }

    _getClassName() {
        return this.constructor.name;
    }

    render() {
        switch (this.props.mode) {
            case 'edit':
                return this.renderInEditorMode();
            case 'report':
                return this.renderInReportMode();
            case 'template':
                return this.renderInTemplateMode();
            default:
                throw new Error(`${this.props.mode} is not among supported modes`);
        }
    }


    renderInTemplateMode() {
        throw new Error(`renderInTemplateMode not implemented in ${this._getClassName()}`);
    }

    renderInEditorMode() {
        throw new Error(`renderInEditorMode not implemented in ${this._getClassName()}`);
    }

    renderInReportMode() {
        throw new Error(`renderInReportMode not implemented in ${this._getClassName()}`);
    }
}

MRRTNodeComponent.propTypes = {
    mode: PropTypes.oneOf(['edit', 'template', 'report']).isRequired,
};