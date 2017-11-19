import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class QuizStep2 extends React.Component {

    render () {
      return <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="slide"
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={5000}
        transitionAppear
        transitionAppearTimeout={5000}
      >
        <div>2</div>
        <div>
          <input type='button' value='test' onClick={this.props.next}/>
        </div>

      </ReactCSSTransitionGroup>;
    }

}