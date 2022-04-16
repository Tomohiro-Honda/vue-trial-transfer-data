<template>
  <button @click="dispOpen = true">Display</button>
  <teleport to="body">
    <div v-if="dispOpen" class="telepo-disp">
      <div class="elment-container">
        <h3>Displayed text was entered on Provide tab</h3>
        <textarea class="text-area" :value="prvMemo"></textarea>
        <button @click="dispOpen = false">close</button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "TelepoComp",
  inject: ["prvMemo"],
  data() {
    return {
      dispOpen: false,
    };
  },
};
</script>

<style scoped>
button {
  font-size: 16px;
  width: 100px;
  height: 30px;
  margin: 50px auto;
}
.relative {
  position: relative;
}
.telepo-disp {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.telepo-disp .elment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 300px;
  height: 600px;
  padding: 5px;
}
.telepo-disp textarea {
  resize: none;
  width: 100%;
  height: 100%;
  border: none;
}
.telepo-disp h3 {
  font-size: 12px;
}
</style>