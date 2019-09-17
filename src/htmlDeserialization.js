import Html from 'slate-html-serializer';
import React from 'react';

const rules = [
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'textarea') {
                return {
                    object: 'inline',
                    type: 'MRRTTextarea',
                    data: {
                        value: el.value,
                    },
                    nodes: next(el.childNodes),
                };
            }
        },
    },
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'input') {
                return {
                    object: 'inline',
                    type: 'MRRTInput',
                    data: {
                        value: el.value,
                    },
                    nodes: next(el.childNodes),
                };
            }
        },
    },
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'select' && (el.hasAttribute('multiple') === false)) {
                return {
                    object: 'inline',
                    type: 'MRRTSelectSingle',
                    data: {
                        value: el.value,

                        choices: Array.from(el.childNodes).filter(n => {
                            return n.nodeType === 1 && n.tagName.toLowerCase() === 'option';
                        }).map(c => ({
                            label: c.label,
                        })),
                    },
                    nodes: next(el.childNodes),
                };
            }
        },
    },
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'select' && (
                (el.hasAttribute('multiple') === true))) {
                return {
                    object: 'inline',
                    type: 'MRRTSelectMultiple',
                    data: {
                        value: el.value,
                        choices: Array.from(el.childNodes).filter(n => {
                            return n.nodeType === 1 && n.tagName.toLowerCase() === 'option';
                        }).map(c => ({
                            label: c.label,
                        })),
                    },
                    nodes: next(el.childNodes),
                };
            }
        },
    },
    {
        deserialize(el, next) {
            let name = el.tagName.toLowerCase();
            if (name === 'section') {
                return {
                    object: 'block',
                    type: 'MRRTSection',
                    data: [],
                    nodes: next(el.childNodes),
                };

            }
        },
    },
];
export const MRRTHtmlDeserializer = new Html({ rules });