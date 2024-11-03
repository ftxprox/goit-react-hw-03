import css from "./Options.module.css";

function Options({leaveFeedback, resetFeedback, totalFeedback }) {
return (
    <div className={css.btnContainer}>
        <button onClick={() => leaveFeedback('good')}>Good </button>
        <button onClick={() => leaveFeedback('neutral')}>Neutral </button>  
        <button onClick={() => leaveFeedback('bad')}>Bad </button>
        {totalFeedback > 0 && (<button onClick={resetFeedback}>Reset</button>
        )}    
      </div>
  );
};

export default Options;