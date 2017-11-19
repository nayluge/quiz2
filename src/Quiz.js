var React = require('react');
var $ = require('jquery'); // We will need it later to get the quiz JSON
var Quiz = React.createClass({

  getInitialState: function(){
    return {
      quiz: {},
      user_answers: [],
      step: 0
    }
  },
});
module.exports = Quiz;