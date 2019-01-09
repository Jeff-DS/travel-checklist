import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
//
import { showDayBeforeTravel, showDayOfTravel } from '../redux-files/actions/ui';
import styles from '../styles/components/DayToggle.css';

const DayToggle = ({
    dayShown,
    showDayBeforeTravel,
    showDayOfTravel
}) => {

    return (
        <div>
            <div
                className={classNames(
                    '',
                    {[styles.active]: dayShown === 'dayBefore'}
                )}
                onClick={showDayBeforeTravel}
            >
                Day Before
            </div>
            <div
                className={classNames(
                    '',
                    {[styles.active]: dayShown === 'dayOf'}
                )}
                onClick={showDayOfTravel}
            >
                Day Of
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    dayShown: state.ui.dayToShow
});

const mapDispatchToProps = dispatch => ({
    showDayBeforeTravel: () => dispatch(showDayBeforeTravel()),
    showDayOfTravel: () => dispatch(showDayOfTravel())
});

export default connect(mapStateToProps, mapDispatchToProps)(DayToggle);
