<template>
  <h2>Props</h2>
  <div class="text-input-box">
    <input type="text" v-model="text" />
    <input type="button" @click="wirteMemo" value="send" />
  </div>
  <div class="child-comp-box">
    <ChildComp :memo="memo" @erase-request="eraseMemo" />
  </div>
</template>

<script>
import ChildComp from "@/components/ChildComp.vue";
export default {
  name: "PropsView",
  components: {
    ChildComp,
  },
  data() {
    return {
      text: "",
      memo: "",
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