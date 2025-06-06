import { useFeedbackStore } from "../../modules/feedback/feedback-store";
import { FeedbackItem } from "./feedback-item";

export const FeedbackList = () => {
  const { feedbackList, removeFeedback, likeFeedback, hasLike } =
    useFeedbackStore();

  return (
    <div>
      {feedbackList.map((feedbackText, id) => (
        <FeedbackItem
          key={id}
          feedbackText={feedbackText}
          handleDelete={() => removeFeedback(id)}
          handleLike={() => likeFeedback(!hasLike)}
          hasLike={hasLike}
        />
      ))}
    </div>
  );
};
