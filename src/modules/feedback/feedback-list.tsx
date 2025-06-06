import { FeedbackItem } from "./feedback-item";

export const FeedbackList = () => {
  const feedbackTexts = [
    "Hello How are you?",
    "Hello How are you?",
    "Hello How are you?",
  ];
  return (
    <div>
      {feedbackTexts.map((feedbackText, id) => (
        <FeedbackItem key={id} feedbackText={feedbackText} />
      ))}
    </div>
  );
};
