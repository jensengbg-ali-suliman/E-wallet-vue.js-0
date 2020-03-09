<template>
  <section class="top">
    <h1>{{ headTitle }}</h1>
    <p>{{ cardStatus }}</p>
  </section>
</template>

<script>
export default {
  name: "TopView",
  props: {
    headTitle: String,
    cardStatus: String
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100vw;
  height: 6.6rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
h1 {
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1.7rem;
  width: 14rem;
}

p {
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: bold;
  color: #999;
}
</style>