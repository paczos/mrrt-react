import React from 'react';
import {MRRTSection} from './MRRTComponents/MRRTSection';

export const renderBlock = (props, editor, next) => {
    switch (props.node.type) {
        case 'MRRTSection':
            return <MRRTSection {...props}/>;
        default:
            return next();
    }
};