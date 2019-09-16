import React from 'react';
import {Editor} from 'slate-react';
import Html from 'slate-html-serializer';
import {template_html} from './base_ct_neck';
import {connect} from 'react-redux';

const rules = [
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'textarea') {
                return {
                    object: 'inline',
                    type: 'MRRTTextarea',
                    data: {
                        value: el.value,
                    },
                    nodes: next(el.childNodes),
                };
            }
        },
    },
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'input') {
                return {
                    object: 'inline',
                    type: 'MRRTInput',
                    data: {
                        value: el.value,
                    },
                    nodes: next(el.childNodes),
                };
            }
        },
    },
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'section') {
                return {
                    object: 'block',
                    type: 'MRRTSection',
                    data: [],
                    nodes: next(el.childNodes),
                };

            }
        },
    },
];

const MRRTSection = (props) => <section style={{ color: 'blue' }}>{props.children}</section>;


class MRRTInputDisconnected extends React.Component {
    handleChange = (e) => {
        let { node, editor } = this.props;
        editor.setNodeByKey(node.key, { data: { value: e.target.value } });
    };

    handleOnBlur = (e) => {
        const { setEditorReadOnly } = this.props;
        setEditorReadOnly(false);
    };

    handleOnClick = (e) => {
        const { setEditorReadOnly } = this.props;
        e.target.focus();
        setEditorReadOnly(true);
    };

    render() {
        let { node } = this.props;
        return <textarea onChange={this.handleChange} onClick={this.handleOnClick} onBlur={this.handleOnBlur}
                         value={node.data.get('value')}/>;
    }
}

const MRRTInput = connect(null, (dispatch) => (
    {
        setEditorReadOnly: (value) => dispatch({ type: 'SET_EDITOR_READONLY', payload: value }),
    }
))(MRRTInputDisconnected);


class MRRTTextareaDisconnected extends React.Component {
    handleChange = (e) => {
        let { node, editor } = this.props;
        editor.setNodeByKey(node.key, { data: { value: e.target.value } });
    };

    handleOnBlur = (e) => {
        const { setEditorReadOnly } = this.props;
        setEditorReadOnly(false);
    };

    handleOnClick = (e) => {
        const { setEditorReadOnly } = this.props;
        e.target.focus();
        setEditorReadOnly(true);
    };

    render() {
        let { node } = this.props;
        return <textarea onChange={this.handleChange} onClick={this.handleOnClick} onBlur={this.handleOnBlur}
                         value={node.data.get('value')}/>;
    }
}

const MRRTTextarea = connect(null, (dispatch) => (
    {
        setEditorReadOnly: (value) => dispatch({ type: 'SET_EDITOR_READONLY', payload: value }),
    }
))(MRRTTextareaDisconnected);


const html = new Html({ rules });

class MRRTEditorDisconnected extends React.Component {
    state = {
        value: html.deserialize(template_html),
    };

    onChange = ({ value }) => {
        this.setState({ value });
        console.log(value.toJS());
    };

    render() {
        let { editorReadOnly } = this.props;
        return <Editor value={this.state.value} onChange={this.onChange} renderBlock={renderBlock}
                       renderInline={renderInline} readOnly={editorReadOnly}/>;
    }
}

export const MRRTEditor = connect((state) => ({ editorReadOnly: state.editorReadOnly }))(MRRTEditorDisconnected);


const renderBlock = (props, editor, next) => {
    switch (props.node.type) {
        case 'MRRTSection':
            return <MRRTSection {...props}/>;
        default:
            return next();
    }

};
const renderInline = (props, editor, next) => {
    switch (props.node.type) {
        case 'MRRTTextarea':
            return <MRRTTextarea {...props}/>;
        case 'MRRTInput':
            return <MRRTInput {...props}/>;
        default:
            return next();
    }
};
