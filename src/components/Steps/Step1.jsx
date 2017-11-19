import React from 'react';
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './transition.css';

class Step1 extends React.Component {

    render () {
      return <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={5000}
        transitionAppear
        transitionAppearTimeout={5000}
      >
        <div class="question">Bla bla bla ?</div>
        <div>
          <input type='button' value='test' onClick={this.props.next}/>
        </div>

      </ReactCSSTransitionGroup>;
    }

}
export default Step1;