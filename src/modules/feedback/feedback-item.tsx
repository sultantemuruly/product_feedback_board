export const FeedbackItem = ({ feedbackText }: { feedbackText: string }) => {
  return (
    <div className="flex justify-center items-center outline p-2 border border-gray-500">
      {feedbackText}
    </div>
  );
};
