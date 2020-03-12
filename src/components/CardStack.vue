<template>
  <section class="cardStack">
    <BankCard
      v-for="card in cards"
      :key="card.id"
      v-bind:card="card"
      @cardClicked="cardClicked(card)"
    />
  </section>
</template>

<script>
import BankCard from "../components/Card.vue";
export default {
  props: {
    cards: Array
  },
  methods: {
    cardClicked: function(card) {
      this.$emit("avtivateCard", card);
    }
  },
  components: {
    BankCard
  },
  data: () => {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.cardStack {
  margin-top: 1.6rem;
  min-height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .card {
    width: 100%;
    margin-top: -9rem;
    position: relative;

    &:nth-child(1) {
      margin-top: 0rem;
    }
  }
}
</style>