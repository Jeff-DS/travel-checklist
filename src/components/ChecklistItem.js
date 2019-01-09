import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// TODO: render the HTML in content, don't just render the string. but worry about security.
// TODO: in subItems, have to use the id to get the actual item from wherever they're stored.
// and have to pass in the rest of the props.
const _ChecklistItem = ({
    id,
    content,
    subItemIds,
    canDoInAdvance,
    isDone
}) => {

    const itemClass = classNames(
        'ChecklistItem',
        {
            'done': isDone
        }
    );

    return (
        <li
            className={itemClass}
            key={id}
        >
            {content}
            {!!subItemIds.length &&
                <ul>
                    {subItemIds.map(subItemId =>
                        <ChecklistItem
                            id={subItemId}
                            key={subItemId}
                        />
                    )}
                </ul>
            }
        </li>
    );
};

const mapStateToProps = (state, ownProps) => {
    const item = state.checklist.itemsById[ownProps.id];
    // filter sub-items to those that should be shown
    const dayToShow = state.ui.dayToShow;
    const idsToShow = state.checklist.idsByDay[dayToShow];
    const subIdsToShow = item.subItemIds.filter(id => idsToShow.includes(id))

    return {
        ...item,
        subItemIds: subIdsToShow
    };

};

// necessary to use a react-redux component recursively
const ChecklistItem = connect(mapStateToProps)(_ChecklistItem);
export default ChecklistItem;
