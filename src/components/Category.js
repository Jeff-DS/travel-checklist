import React from "react";
//
import ChecklistItem from 'components/ChecklistItem';

const Category = ({ name, ids }) => (
    <div>
        <h2>{name}</h2>
        {ids.length === 0 ? (
            <p>–</p>
        ) : (
            <ul>
                {ids.map(id =>
                    <ChecklistItem
                        id={id}
                        key={id}
                    />
                )}
            </ul>
        )}
    </div>
);

export default Category;
