import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
//
import { shouldBeVisible } from 'utils';
import { setItemToDone, setItemToNotDone } from 'actions/items';
import styles from 'styles/components/ChecklistItem.css';

// TODO: render the HTML in content, don't just render the string. but worry about security.
const _ChecklistItem = ({ id, content, subItemIds, isDone, onToggleDone }) => {
    const itemClass = classNames('ChecklistItem', {
        [styles.done]: isDone
    });

    return (
        <li
            className={itemClass}
            onClick={() => onToggleDone({ id, subItemIds, isDone })}
            key={id}
        >
            {content}
            {!!subItemIds.length && (
                <ul>
                    {subItemIds.map(subItemId => (
                        <ChecklistItem id={subItemId} key={subItemId} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const mapStateToProps = (state, { id }) => {
    const item = state.items.byId[id];
    // filter sub-items to those that should be shown
    const lastMinuteItemsShown = state.ui.lastMinuteItemsShown;
    const subIdsToShow = item.subItemIds.filter(subItemId => {
        const subItem = state.items.byId[subItemId];
        return shouldBeVisible(subItem, lastMinuteItemsShown);
    });

    return {
        ...item,
        subItemIds: subIdsToShow
    };
};

const mapDispatchToProps = dispatch => ({
    onToggleDone: item => {
        // we can't toggle items that have sub-items
        if (item.subItemIds.length > 0) {
            return;
        }
        dispatch(
            !item.isDone ? setItemToDone(item.id) : setItemToNotDone(item.id)
        );
    }
});

// necessary to use a react-redux component recursively
const ChecklistItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ChecklistItem);
export default ChecklistItem;
