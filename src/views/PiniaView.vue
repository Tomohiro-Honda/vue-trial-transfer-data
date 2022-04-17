<template>
  <h3>Pinia</h3>
  <p>{{ description }}</p>
  <div>
    <textarea cols="30" rows="10" :value="memoStore.memo" readonly></textarea>
  </div>
</template>

<script>
import { useMemoStore } from "@/store/memoStore";
export default {
  data() {
    return {
      description: "Displayed text was saved on Props tab",
      memoStore: useMemoStore(),
    };
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 250px;
  display: flex;
  justify-content: center;
}
textarea {
  width: 100%;
}
</style>