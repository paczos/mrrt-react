import React from 'react';
import {Editor} from 'slate-react';
import {template_html} from './base_ct_neck';
import {connect} from 'react-redux';
import {renderBlock} from './renderBlock';
import {renderInline} from './renderInline';
import {MRRTHtmlDeserializer} from './htmlDeserialization';


class MRRTEditorDisconnected extends React.Component {
    state = {
        value: MRRTHtmlDeserializer.deserialize(template_html),
    };

    onChange = ({ value }) => {
        this.setState({ value });
    };

    render() {
        let { editorReadOnly } = this.props;
        return <Editor value={this.state.value} onChange={this.onChange} renderBlock={renderBlock}
                       renderInline={renderInline} readOnly={editorReadOnly} spellCheck={true}/>;
    }
}

export const MRRTEditor = connect((state) => ({ editorReadOnly: state.editorReadOnly }))(MRRTEditorDisconnected);


