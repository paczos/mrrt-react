import Html from 'slate-html-serializer';

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