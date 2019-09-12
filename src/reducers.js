import {template_html} from './base_ct_neck';

export let template = (state = { templateHTML: template_html, updateHTML: false }, action) => {
    console.log('reducer:', action.type, action.payload);
    let newState = {};
    switch (action.type) {
        case 'SET_TEMPLATE':
            newState = Object.assign({}, state, { templateHTML: action.payload, updateHTML: false, justUpdated: true });
            console.log('inside reducer shouldupdatehtml?', newState.updateHTML);
            return newState;
        case 'UPDATE_HTML':
            newState = Object.assign({}, state, { updateHTML: true, justUpdated: false });
            console.log('newstate in update_html ', newState.updateHTML);
            return newState;
        case 'FINISH_UPDATE':
            newState = Object.assign({}, state, { updateHTML: false, justUpdated: false });
            console.log('newstate in update_html ', newState.updateHTML);
            return newState;
        default:
            return state;
    }
};