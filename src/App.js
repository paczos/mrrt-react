import React from 'react';
import './App.css';
import {Editor} from './Editor';
import {template_html} from './base_ct_neck';


function App() {
    return (
        <div>
            <Editor templateHTMl={template_html}/>
        </div>
    );
}

export default App;
