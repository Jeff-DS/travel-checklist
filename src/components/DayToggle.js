import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
//
import { showAdvanceItems, showLastMinuteItems } from 'actions/ui';
import styles from 'styles/components/DayToggle.css';

const DayToggle = ({
    lastMinuteItemsShown,
    showAdvanceItems,
    showLastMinuteItems
}) => {

    const dayBeforeClass = classNames('', {[styles.active]: !lastMinuteItemsShown});
    const dayOfClass = classNames('', {[styles.active]: lastMinuteItemsShown});

    return (
        <div>
            <div
                className={dayBeforeClass}
                onClick={showAdvanceItems}
            >
                To do in advance
            </div>
            <div
                className={dayOfClass}
                onClick={showLastMinuteItems}
            >
                To do last minute
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    lastMinuteItemsShown: state.ui.lastMinuteItemsShown
});

const mapDispatchToProps = dispatch => ({
    showAdvanceItems: () => dispatch(showAdvanceItems()),
    showLastMinuteItems: () => dispatch(showLastMinuteItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(DayToggle);
