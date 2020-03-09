<template>
  <button @click="BtnClicked">{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    btnText: String
  },
  methods: {
    BtnClicked() {
      this.$emit("btnClicked");
    }
  }
};
</script>

<style lang="scss">
</style>