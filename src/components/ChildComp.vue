<template>
  <div>
    <textarea cols="30" rows="10" :value="memo" readonly></textarea>
    <input type="button" value="erase" @click="eraseReq" />
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
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
}
input[type="button"] {
  margin-top: 10px;
  width: max-content;
}
</style>