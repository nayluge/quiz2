import React from 'react';
import PropTypes from 'prop-types'
import Step2 from './Steps/Step2';
import Step1 from "./Steps/Step1";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class QuizStep extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answers: [],
    };

    this.next = this.nextStep.bind(this);
  }

  nextStep(event) {
    this.setState({
      questionId: this.state.questionId+1
    })
  }

    // to Improve ... dynamic component rendering not working actually
    render () {
      switch(this.state.questionId){
        case 1: return(
          <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={5000}
            transitionAppear
            transitionAppearTimeout={5000}
          >
            <Step1 next={this.next}/>
          </ReactCSSTransitionGroup>
        );
          break;
        case 2: return(
          <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={5000}
            transitionAppear
            transitionAppearTimeout={5000}
          >
            <Step2 next={this.next}/>
          </ReactCSSTransitionGroup>
        )
          break;
      }
    }

}

export default QuizStep;