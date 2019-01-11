import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
//
import { shouldBeVisible } from '../redux-files/reducers/items';

// TODO: render the HTML in content, don't just render the string. but worry about security.
const _ChecklistItem = ({
    id,
    content,
    subItemIds,
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
    const item = state.items.byId[ownProps.id];
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

// necessary to use a react-redux component recursively
const ChecklistItem = connect(mapStateToProps)(_ChecklistItem);
export default ChecklistItem;
