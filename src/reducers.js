import {template_html} from './base_ct_neck';

export let template = (state = { template_html }, action) => {
    switch (action.type) {
        case 'SET_TEMPLATE':
            return action.templateHTMl;
        default:
            return state;
    }
};