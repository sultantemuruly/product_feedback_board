import { useFeedbackStore } from "../../modules/feedback/feedback-store";
import { FeedbackItem } from "./feedback-item";

export const FeedbackList = () => {
  const { feedbackList } = useFeedbackStore();

  return (
    <div>
      {feedbackList.map((feedbackText, id) => (
        <FeedbackItem key={id} feedbackText={feedbackText} />
      ))}
    </div>
  );
};
