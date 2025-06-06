import { useState } from "react";
import { useFeedbackStore } from "../../modules/feedback/feedback-store";

export const FeedbackForm = () => {
  const { addFeedback } = useFeedbackStore();
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      console.log(inputValue);
      addFeedback(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className="absolute bottom-10 w-full flex justify-center">
      <div className="w-1/2 flex items-center gap-2">
        <input
          type="text"
          className="w-full outline p-2 border border-gray-300"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your feedback..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white rounded-sm p-2 hover:bg-white hover:text-black"
        >
          Add Feedback
        </button>
      </div>
    </div>
  );
};
