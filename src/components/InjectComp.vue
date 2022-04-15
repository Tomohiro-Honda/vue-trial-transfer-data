<template>
  <div>
    <textarea cols="30" rows="10" :value="prvMemo" readonly></textarea>
    <input type="button" value="erease" @click="eraseReq" />
  </div>
</template>

<script>
export default {
  name: "InjectComp",
  props: {
    memo: {
      type: String,
    },
  },
  inject: ["prvMemo"],
  methods: {
    eraseReq() {},
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