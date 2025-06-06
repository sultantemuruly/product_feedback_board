import { create } from "zustand";

type FeedbackStore = {
  feedbackList: string[];
  addFeedback: (feedback: string) => void;
  clearFeedback: () => void;
};

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  feedbackList: [],
  addFeedback: (feedback) =>
    set((state) => ({
      feedbackList: [...state.feedbackList, feedback],
    })),
  clearFeedback: () => set({ feedbackList: [] }),
}));
