import React from 'react';
import './App.css';
import {MRRTEditor} from './Editor';
import {Provider} from 'react-redux';
import {template} from './reducers';
import {createStore} from 'redux';


export let store = createStore(template);

function App() {
    return (
        <div>
            <Provider store={store}>
                <MRRTEditor/>
            </Provider>
        </div>
    );
}

export default App;
