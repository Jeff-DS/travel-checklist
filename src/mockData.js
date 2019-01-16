const myChecklist = [
    {
        id: '1',
        content: 'Toothbrush',
        category: 'Toiletries',
        subItemIds: [],
        isLastMinute: true,
        isDone: false,
        isSubItem: false
    },
    {
        id: '2',
        content: 'Hat',
        category: 'Clothes',
        subItemIds: [],
        isLastMinute: false,
        isDone: false,
        isSubItem: false
    },
    {
        id: '3',
        content: 'Phone stuff',
        category: 'Electronics',
        subItemIds: [4, 5],
        isLastMinute: null,
        isDone: false,
        isSubItem: false
    },
    {
        id: '4',
        content: 'Phone charger',
        category: 'Electronics',
        subItemIds: [],
        isLastMinute: true,
        isDone: false,
        isSubItem: true
    },
    {
        id: '5',
        content: 'Phone battery pack',
        category: 'Electronics',
        subItemIds: [],
        isLastMinute: false,
        isDone: false,
        isSubItem: true
    },
    {
        id: '6',
        content: 'Passport',
        category: 'Documents',
        subItemIds: [],
        isLastMinute: false,
        isDone: false,
        isSubItem: false
    }
];

const itemsById = myChecklist.reduce((accumulator, currentItem) => ({
    ...accumulator,
    [currentItem.id]: currentItem
}), {});

const allIds = myChecklist.map(item => item.id)

export { myChecklist, itemsById, allIds };
