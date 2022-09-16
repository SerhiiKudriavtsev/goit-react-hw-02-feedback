import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
    
  countTotalFeedback = () => { 
    const {good,neutral,bad} = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage = () => {
    const total = Math.round(this.state.good /(this.countTotalFeedback())*100);
    if(total > 0) {
    return total 
  } else return 0
  }

  addVote = event => {
    const target = event.currentTarget.name;
    this.setState(prevState => {
      return { [target]: prevState[target] + 1 }
    });
  };
    
  render() { 
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const mems = ['🤩', '🤔', '😪'];
    return (
      <div className="feedback__container">
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={options} 
            mems={mems}
            onLeaveFeedback={this.addVote}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={this.countTotalFeedback()}
            countPercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback" />}
        </Section>
        
      </div>
    )
  }
};

export default App;