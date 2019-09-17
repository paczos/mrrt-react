import React from 'react';

export default class MRRTSelectMultiple extends React.PureComponent {

    renderForSelectOption = (option, groupKey, key) => {
        return <label key={key}>
            <input name={groupKey} type='checkbox' value={option.label}/>
            {option.label}
        </label>;
    };


    render() {
        let { node } = this.props;
        return <span>{node.get('data').get('choices').map((c, idx) => this.renderForSelectOption(c, node.key, idx))}
        </span>;
    }
}
