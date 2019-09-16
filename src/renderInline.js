import {MRRTTextarea} from './MRRTComponents/MRRTTextarea';
import {MRRTInput} from './MRRTComponents/MRRTInput';
import React from 'react';

export const renderInline = (props, editor, next) => {
    switch (props.node.type) {
        case 'MRRTTextarea':
            return <MRRTTextarea {...props}/>;
        case 'MRRTInput':
            return <MRRTInput {...props}/>;
        default:
            return next();
    }
};