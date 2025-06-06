import { create } from "zustand";

type FeedbackStore = {
  hasLike: boolean;
  feedbackList: string[];
  addFeedback: (feedback: string) => void;
  clearFeedback: () => void;
  removeFeedback: (index: number) => void;
  likeFeedback: (value: boolean) => void;
};

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  hasLike: false,
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
  likeFeedback: (value) =>
    set({
      hasLike: value,
    }),
}));
