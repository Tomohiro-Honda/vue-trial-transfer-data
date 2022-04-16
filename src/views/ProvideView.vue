<template>
  <h2>Provide</h2>
  <div class="text-input-box">
    <input type="text" v-model="text" />
    <input type="button" @click="provideMemo" value="send" />
  </div>
  <div class="child-comp-box">
    <InjectComp :memo="memo" @erase-request="eraseMemo" />
  </div>
</template>

<script>
import InjectComp from "@/components/InjectComp";
export default {
  name: "InjectView",
  components: {
    InjectComp,
  },
  data() {
    return {
      text: "",
      memo: "",
    };
  },
  emits: ["memo-save"],
  methods: {
    provideMemo() {
      let appendMemo = this.text;
      if (this.memo !== "") {
        appendMemo = "\n" + appendMemo;
      }
      this.memo = this.memo + appendMemo;
      this.text = "";
      this.$emit("memo-save", this.memo);
    },
    eraseMemo() {
      this.memo = "";
      this.$emit("memo-save", "");
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