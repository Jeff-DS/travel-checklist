const initialState = [
    'Toiletries',
    'Clothes',
    'Books/papers',
    'Electronics',
    'Documents',
    'Other',
    'Tasks before leaving'
];

const categoryOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default categoryOrderReducer;
