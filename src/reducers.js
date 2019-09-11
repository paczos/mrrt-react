import {template_html} from './base_ct_neck';

export let template = (state = { templateHTML: template_html, updateHTML: false }, action) => {
    console.log(state);
    switch (action.type) {
        case 'SET_TEMPLATE':

            return Object.assign(state, { templateHTML: action.payload, updateHTML: false });
        case 'UPDATE_HTML':
            return Object.assign(state, { updateHTML: true });
        default:
            return state;
    }
};