import { create } from "zustand";

type FeedbackStore = {
  feedbackList: string[];
  addFeedback: (feedback: string) => void;
  clearFeedback: () => void;
  removeFeedback: (index: number) => void;
};

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  feedbackList: [],
  addFeedback: (feedback) =>
    set((state) => ({
      feedbackList: [...state.feedbackList, feedback],
    })),
  clearFeedback: () => set({ feedbackList: [] }),
  removeFeedback: (index) =>
    set((state) => ({
      feedbackList: state.feedbackList.filter((_, i) => i !== index),
    })),
}));
