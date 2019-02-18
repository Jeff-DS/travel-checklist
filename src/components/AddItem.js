import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
//
import { arrayToObjectKeys } from 'utils';
import { addItem } from 'actions/items';
import { addItemToTripType } from 'actions/tripTypes';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            itemToAdd: {
                content: '',
                category: '',
                subItemIds: [],
                isLastMinute: false,
                isSubItem: false
            },
            tripTypes: arrayToObjectKeys(
                Object.keys(this.props.tripTypes),
                id => id === this.props.activeTripType
            )
        };
    }

    isReadyToSubmit = () => {
        const { content, category } = this.state.itemToAdd;
        return ![content, category].includes('');
    };

    onChange = event => {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        if (Object.keys(this.state.itemToAdd).includes(target.name)) {
            this.setState({
                itemToAdd: { ...this.state.itemToAdd, [target.name]: value }
            });
        } else if (Object.keys(this.state.tripTypes).includes(target.name)) {
            this.setState({
                tripTypes: { ...this.state.tripTypes, [target.name]: value }
            });
        }
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.isReadyToSubmit()) {
            const item = { ...this.state.itemToAdd, id: uuid(), isDone: false };
            // Add item to master list
            this.props.addItem(item);
            // Add item to the selected trip types
            this.props.addItemToTripTypes(
                item.id,
                Object.keys(this.state.tripTypes).filter(
                    tripType => this.state.tripTypes[tripType]
                )
            );
            // Reset form
            this.setState(this.getInitialState());
        }
    };

    render() {
        return (
            <div style={{ backgroundColor: 'sandybrown' }}>
                <span>Add Item</span>
                <form action="" onSubmit={this.onSubmit}>
                    <label htmlFor="content">Item content</label>
                    <input
                        type="text"
                        name="content"
                        value={this.state.itemToAdd.content}
                        onChange={this.onChange}
                    />

                    <label htmlFor="category-select">Category</label>
                    <select
                        name="category"
                        id="category-select"
                        value={
                            this.props.categories[
                                this.state.itemToAdd.category.id
                            ]
                        }
                        onChange={this.onChange}
                    >
                        <option value="">Category</option>
                        {this.props.categoryOrder.map(categoryId => (
                            <option value={categoryId} key={categoryId}>
                                {this.props.categories[categoryId].name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="isLastMinute">
                        Is this a last-minute item?
                    </label>
                    <input
                        type="checkbox"
                        name="isLastMinute"
                        checked={this.state.itemToAdd.isLastMinute}
                        onChange={this.onChange}
                    />

                    <p>Which trip types should include this item?</p>
                    {Object.values(this.props.tripTypes).map(tripType => (
                        <div key={`div-${tripType.id}`}>
                            <input
                                type="checkbox"
                                name={tripType.id}
                                id={tripType.id}
                                key={`input-${tripType.id}`}
                                checked={this.state.tripTypes[tripType.id]}
                                onChange={this.onChange}
                            />
                            <label
                                htmlFor={tripType.id}
                                key={`label-${tripType.id}`}
                            >
                                {tripType.name}
                            </label>
                        </div>
                    ))}

                    <input type="submit" disabled={!this.isReadyToSubmit()} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: arrayToObjectKeys(
        state.categories.allIds,
        id => state.categories.byId[id]
    ),
    categoryOrder: state.categories.allIds,
    tripTypes: arrayToObjectKeys(
        state.tripTypes.allIds,
        id => state.tripTypes.byId[id]
    ),
    activeTripType: state.tripTypes.active || undefined
});
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addItemToTripTypes: (itemId, tripTypeIds) =>
        tripTypeIds.forEach(tripTypeId =>
            dispatch(addItemToTripType(itemId, tripTypeId))
        )
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItem);
