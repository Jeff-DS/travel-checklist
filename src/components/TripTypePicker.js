import React from 'react';
import { connect } from 'react-redux';
//
import { setTripType } from 'actions/tripTypes';
import styles from 'styles/components/TripTypePicker.css';

const TripTypePicker = ({ tripTypes, activeTripType, setTripType }) => (
    <div>
        <ul>
            {tripTypes.map(tripType => (
                <li
                    className={
                        tripType.id === activeTripType ? styles.active : ''
                    }
                    onClick={() => setTripType(tripType.id)}
                    key={tripType.id}
                >
                    {tripType.name}
                </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    tripTypes: state.tripTypes.allIds.map(id => state.tripTypes.byId[id]),
    activeTripType: state.tripTypes.active
});

const mapDispatchToProps = dispatch => ({
    setTripType: tripType => dispatch(setTripType(tripType))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripTypePicker);
