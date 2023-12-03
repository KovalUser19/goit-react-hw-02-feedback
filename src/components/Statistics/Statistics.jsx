import css from './Statistics.module.css'
export const Statistics = (props, style) => {

  const countTotalFeedback = () => {
    return props.good + props.neutral + props.bad
  }

  const countPositiveFeedbackPercentage = () =>{
  {return Math.floor(props.good * 100 / countTotalFeedback()) }
}
   return(
     <div className={css.statistics}>
          <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral }</p>
            <p>Bad: {props.bad }</p>
            <p>Total:{countTotalFeedback() }</p>
            <p>Positive feedback:{countPositiveFeedbackPercentage()}%</p>
        </div>
    )
  }
