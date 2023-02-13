import { defineStore } from 'pinia'

export const useModalsDataStore = defineStore({
  id: 'modalsData',
  state: () => ({
    isFeedbackModalOpened: false
  }),
  actions: {
    setFeedbackModalState(value: boolean) {
      this.isFeedbackModalOpened = value;
    }
  }
});
