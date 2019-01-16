import React from 'react';
import { connect } from 'react-redux';
//
import Category from 'Components/Category';
import { getVisibleIdsByCategory } from 'Selectors';

const Checklist = ({ categoryOrder, idsToShowByCategory }) => {

    return (
        <div>
            {categoryOrder.map(category => (
                <Category
                    key={category}
                    name={category}
                    ids={idsToShowByCategory[category] || []}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => getVisibleIdsByCategory(state);
export default connect(mapStateToProps)(Checklist);
