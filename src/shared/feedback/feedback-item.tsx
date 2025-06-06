export const FeedbackItem = ({
  feedbackText,
  handleDelete,
  hasLike,
  handleLike,
}: {
  feedbackText: string;
  handleDelete: () => void;
  hasLike: boolean;
  handleLike: () => void;
}) => {
  return (
    <div className="flex justify-center items-center gap-5 outline p-2 border border-gray-500">
      <div>{feedbackText}</div>
      <button
        onClick={handleDelete}
        className="flex bg-red-700 text-white p-2 rounded hover:bg-white hover:text-black"
      >
        Delete
      </button>
      <button
        className={
          hasLike
            ? "bg-green-700 text-white rounded-sm p-2"
            : "bg-red-700 text-white rounded-sm p-2"
        }
        onClick={handleLike}
      >
        {hasLike ? "Like" : "No Like"}
      </button>
    </div>
  );
};
