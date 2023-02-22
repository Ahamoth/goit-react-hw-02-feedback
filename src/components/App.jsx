import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;
    const percentage = (this.state.good / totalFeedbacks) * 100;
    return Math.round(percentage) > 0 ? Math.round(percentage) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>

   
      </>
    );
  }
}