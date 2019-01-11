export const shouldBeVisible = (item, lastMinuteItemsShown) => {
    return [lastMinuteItemsShown, null].includes(item.isLastMinute)
};
