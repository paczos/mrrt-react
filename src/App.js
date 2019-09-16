import React from 'react';
import './App.css';
import {MRRTEditor} from './MRRTEditor';
import {Provider} from 'react-redux';
import {templateReducer} from './reducers';
import {createStore} from 'redux';


export let store = createStore(templateReducer);

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
