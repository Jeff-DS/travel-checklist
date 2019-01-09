const myChecklist = [
    {
        id: '1',
        content: 'Toothbrush',
        subItemIds: [],
        canDoInAdvance: false,
        isDone: false,
        isSubItem: false
    },
    {
        id: '2',
        content: 'Hat',
        subItemIds: [],
        canDoInAdvance: true,
        isDone: false,
        isSubItem: false
    },
    {
        id: '3',
        content: 'Phone stuff',
        subItemIds: [4, 5],
        canDoInAdvance: false,
        isDone: false,
        isSubItem: false
    },
    {
        id: '4',
        content: 'Phone charger',
        subItemIds: [],
        canDoInAdvance: false,
        isDone: false,
        isSubItem: true
    },
    {
        id: '5',
        content: 'Phone battery pack',
        subItemIds: [],
        canDoInAdvance: true,
        isDone: false,
        isSubItem: true
    },
];

const itemsById = myChecklist.reduce((accumulator, currentItem) => ({
    ...accumulator,
    [currentItem.id]: currentItem
}), {});

export { myChecklist, itemsById };
