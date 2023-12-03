import css from './FeedbackOptions.module.css'
export const FeedbackOptions = (props) => {
  console.log(props);
  return (
    <div className={css.feedbackButton}>
      {props.options.map(item => {
      return  <button className={item} key={item}
          onClick={() => props.onLeaveFeedback(item)}>{item}</button>
      })}
    </div>
  )
}