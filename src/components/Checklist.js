import React from 'react';
import { connect } from 'react-redux';
//
import ChecklistItem from './ChecklistItem';

const Checklist = ({ checklistItemIds }) => {

    return (
        <div>
            <ul>
                {checklistItemIds.map(id =>
                    <ChecklistItem
                        id={id}
                        key={id}
                    />
                )}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    const dayToShow = state.ui.dayToShow;

    // we want to show main items that either are for today...
    const simpleItems = state.checklist.idsByDay[dayToShow].filter(
        id => !state.checklist.itemsById[id].isSubItem
    );
    // ...or have 1+ sub-item for today
    const complexItems = state.checklist.idsByDay.hasSubItems.filter(
        id => {
            const subItems = state.checklist.itemsById[id].subItemIds;
            return subItems.some(
                subItem => state.checklist.idsByDay[dayToShow].includes(subItem)
            );
        }
    );

    return { checklistItemIds: [ ...simpleItems, ...complexItems ] };
};

export default connect(mapStateToProps)(Checklist);
