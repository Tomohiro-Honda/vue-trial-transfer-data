<template>
  <h2>Props</h2>
  <div class="text-input-box">
    <input type="text" v-model="text" />
    <input type="button" @click="wirteMemo" value="send" />
  </div>
  <div class="child-comp-box">
    <ChildComp
      :memo="memo"
      @erase-request="eraseMemo"
      @save-request="saveMemo"
      @load-request="loadMemo"
    />
  </div>
</template>

<script>
import ChildComp from "@/components/ChildComp";
import { useMemoStore } from "@/store/memoStore";
export default {
  name: "PropsView",
  components: {
    ChildComp,
  },
  data() {
    return {
      text: "",
      memo: "",
      memoStore: useMemoStore(),      
      isLoaded: false,
    };
  },
  methods: {
    wirteMemo() {
      let appendMemo = this.text;
      if (this.memo !== "") {
        appendMemo = "\n" + appendMemo;
      }
      this.memo = this.memo + appendMemo;
      this.text = "";
    },
    eraseMemo() {
      this.memo = "";
    },
    saveMemo(text) {
      let storedMemo = this.memoStore.memo;
      if (storedMemo !== "" && !this.isLoaded) {
        alert("Saved memo already exists, please click load.");
        return;
      }
      this.memoStore.addMemo(text);
    },
    loadMemo() {
      if (this.memoStore.memo === "") {
        alert("No saved memo.");
        return;
      }
      this.memo = this.memoStore.memo;
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped>
.text-input-box {
  margin: 10px auto;
  width: 250px;
  display: flex;
  justify-content: center;
}
input[type="text"] {
  width: calc(100% - 50px);
}
input[type="button"] {
  margin-left: 7px;
  width: 50px;
}
.child-comp-box {
  margin: 0 auto;
  width: 250px;
  display: flex;
  justify-content: center;
}
</style>