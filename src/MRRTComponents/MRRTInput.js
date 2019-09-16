import React from 'react';
import {connect} from 'react-redux';

export class MRRTInputDisconnected extends React.Component {
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

export const MRRTInput = connect(null, (dispatch) => (
    {
        setEditorReadOnly: (value) => dispatch({ type: 'SET_EDITOR_READONLY', payload: value }),
    }
))(MRRTInputDisconnected);