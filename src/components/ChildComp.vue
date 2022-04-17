<template>
  <div>
    <textarea cols="30" rows="10" :value="memo" readonly></textarea>
    <input type="button" value="erase" @click="eraseReq" />
    <input type="button" value="save" @click="saveReq" />
    <input type="button" value="load" @click="loadReq" />
  </div>
</template>

<script>
export default {
  name: "ChildComp",
  props: {
    memo: {
      type: String,
    },
  },
  methods: {
    eraseReq() {
      this.$emit("erase-request");
    },
    saveReq() {
      this.$emit("save-request", this.memo);
    },
    loadReq() {
      this.$emit("load-request");
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
}
input[type="button"] {
  margin: 10px 5px;
  width: max-content;
}
</style>