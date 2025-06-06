import { useFeedbackStore } from "../../modules/feedback/feedback-store";
import { FeedbackItem } from "./feedback-item";

export const FeedbackList = () => {
  const { feedbackList, removeFeedback } = useFeedbackStore();

  return (
    <div>
      {feedbackList.map((feedbackText, id) => (
        <FeedbackItem
          key={id}
          feedbackText={feedbackText}
          handleDelete={() => removeFeedback(id)}
        />
      ))}
    </div>
  );
};
