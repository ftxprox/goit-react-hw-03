import css from "./Feedback.module.css";

function Feedback({feedback, totalFeedback, positiveFeedback}) {
  return (
    <div>
      <ul className={css.list}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total feedback: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li> 
      </ul>
    </div>
  );
}

export default Feedback;