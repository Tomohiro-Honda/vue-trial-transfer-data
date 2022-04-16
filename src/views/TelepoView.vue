<template>
  <h2>Teleport</h2>
  <p class="description">Enter something text on Provide tab</p>
  <TelepoComp />
</template>

<script>
import TelepoComp from "@/components/TelepoComp";
export default {
  name: "TelepoView",
  components: {
    TelepoComp,
  },
};
</script>
<style scoped>
.description {
  margin-top: 20px;
}
</style>