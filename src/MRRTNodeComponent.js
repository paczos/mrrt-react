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
        return this.props.mode === 'template' ? this.renderInTemplateMode() : this.renderInEditorMode();
    }


    renderInTemplateMode() {
        throw new Error(`renderInTemplateMode not implemented in ${this._getClassName()}`);
    }

    renderInEditorMode() {
        throw new Error(`renderInEditorMode not implemented in ${this._getClassName()}`);
    }
}

MRRTNodeComponent.propTypes = {
    mode: PropTypes.oneOf(['template', 'report']).isRequired,
};