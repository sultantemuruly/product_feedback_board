export const FeedbackItem = ({
  feedbackText,
  handleDelete,
}: {
  feedbackText: string;
  handleDelete: () => void;
}) => {
  return (
    <div className="flex justify-center items-center gap-5 outline p-2 border border-gray-500">
      <div>{feedbackText}</div>
      <button
        onClick={handleDelete}
        className="flex bg-red-600 text-white p-2 rounded hover:bg-white hover:text-black"
      >
        delete
      </button>
    </div>
  );
};
