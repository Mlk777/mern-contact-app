import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => {
  return (
    <div
      className='h-10 flex flex-col items-center justify-center text-lg text-gray-900 m-2 text-center sm:text-left
      '
    >
      <TransitionGroup className='w-9/12'>
        {alerts.map(alert => (
          <CSSTransition key={alert.id} timeout={500} classNames='item'>
            <div
              className={`font-semibold rounded border border-gray-200 p-2 ${
                alert.type === 'danger' ? 'bg-red-600' : 'bg-green-600'
              } 
              
            `}
            >
              <i
                className={`mr-1 fas ${
                  alert.type === 'danger' ? 'fa-info-circle' : 'fa-check-circle'
                }`}
              />{' '}
              {alert.msg}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array,
};

const mapStateToProps = state => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);
