export const FeedbackForm = () => {
  return (
    <div className="absolute bottom-10 w-full flex justify-center">
      <div className="w-1/2 flex items-center gap-2">
        <input
          type="text"
          className="w-full outline p-2 border border-gray-300"
        />
        <button className="bg-blue-600 text-white rounded-sm p-2 hover:bg-white hover:text-black">
          Add Feedback
        </button>
      </div>
    </div>
  );
};
