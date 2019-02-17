export const shouldBeVisible = (item, lastMinuteItemsShown) => {
    return [lastMinuteItemsShown, null].includes(item.isLastMinute);
};

export const arrayToObjectKeys = (arr, deriveValue = () => undefined) => {
    return arr.reduce((accumulator, currentValue) => {
        return {
            ...accumulator,
            [currentValue]: deriveValue(currentValue)
        };
    }, {});
};
