export let templateReducer = (state = { editorReadOnly: false }, action) => {
    switch (action.type) {
        case 'SET_EDITOR_READONLY':
            return { ...state, editorReadOnly: action.payload };
        default:
            return state;
    }
};
