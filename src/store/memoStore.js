import { defineStore } from "pinia";

export const useMemoStore = defineStore("main", {
  state: () => ({
    memo: "",
    name: "Test"
  }),
  getters: {
    getMemo: (state) => {
      return state.memo;
    }
  },
  actions: {
    erase() {
      this.memo = "";
    },
    addMemo(text) {
      this.memo = text;
    }
  }
});
