import { Component } from "react"
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  stateArray = Object.keys(this.state)

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

   countPositiveFeedbackPercentage = () =>{
  {return Math.floor(this.state.good * 100 / this.countTotalFeedback()) }
}
  isAnyChanges = () =>{
    return this.state.good !== 0 || this.state.neutral !== 0 || this.state.bad !== 0
  }


  handleFeedback = (key) => {
    this.setState((prev) => {
      return {
        [key]: prev[key] + 1
      }
    })
  }
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          { !this.isAnyChanges() && < Notification message="There is no feedback" style={this.display='none'}></Notification>}
          {this.isAnyChanges() && <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
            total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} style={this.display='block'}></Statistics >}
        </Section>
      </>
    )
  }
}