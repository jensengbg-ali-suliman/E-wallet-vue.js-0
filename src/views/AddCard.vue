<template>
  <div class="addCard">
    <TopView headTitle="add a new bank card" cardStatus="new card" />
    <bank-card v-bind:card="activeCard" />
    <cardForm />
  </div>
</template>
<script>
import TopView from "../components/Top.vue";
import cardForm from "../components/cardForm.vue";
import BankCard from "../components/Card.vue";

export default {
  components: {
    TopView,
    cardForm,
    BankCard
  },
  data: () => {
    return {
      activeCard: {
        id: "01",
        holder: "firstname lastname",
        number: "xxxx xxxx xxxx xxxx",
        bgColor: "#D0D0D0",
        textColor: "#444",
        company: "Bitcoin",
        validation: "mm/yy",
        ccv: "956"
      }
    };
  },
  methods: {
    addCard() {
      console.log("Clicked in add card");
    }
  }
};
</script>

<style lang="scss">
.addCard {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

@media all and (min-width: 600px) {
  .addCard {
    width: 378px;
  }
}
</style>
