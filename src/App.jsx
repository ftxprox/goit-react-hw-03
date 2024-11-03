import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  const clearFeedback = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const calculateTotalFeedback = () => {
    return feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  };

  const calculatePositiveFeedbackPercentage = () => {
    const total = calculateTotalFeedback();
    return total > 0 ? Math.round((feedbackCounts.good / total) * 100) : 0;
  };

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedbackCounts");
    if (storedFeedback) {
      setFeedbackCounts(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const totalFeedback = calculateTotalFeedback();
  const positiveFeedbackPercentage = calculatePositiveFeedbackPercentage();

  return (
    <div className="container">
      <h1>Sip Happens Café</h1>
      <p>We value your feedback. Please let us know about your experience.</p>
      <Options leaveFeedback={handleFeedback} resetFeedback={clearFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedbackCounts} totalFeedback={totalFeedback} positiveFeedback={positiveFeedbackPercentage} />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
}

export default App;