import {MRRTTextarea} from './MRRTComponents/MRRTTextarea';
import {MRRTInput} from './MRRTComponents/MRRTInput';
import React from 'react';
import MRRTSelectSingle from './MRRTComponents/MRRTSelectSingle';

export const renderInline = (props, editor, next) => {
    switch (props.node.type) {
        case 'MRRTTextarea':
            return <MRRTTextarea {...props}/>;
        case 'MRRTInput':
            return <MRRTInput {...props}/>;
        case 'MRRTSelectSingle':
            return <MRRTSelectSingle {...props}/>;
        default:
            return next();
    }
};