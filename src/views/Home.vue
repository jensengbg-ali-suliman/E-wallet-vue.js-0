<template>
  <div class="home">
    <TopView headTitle="e-wallet" cardStatus="active card" />
    <BankCard v-bind:card="activeCard" />
    <CardStack @avtivateCard="activateClicked" v-bind:cards="CardsData" />
    <Btn @btnClicked="addCard" btnText="add a new card" />
  </div>
</template>

<script>
import TopView from "../components/Top.vue";
import BankCard from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";
import Btn from "../components/button.vue";
import Cards from "../assets/data.json";

export default {
  components: {
    TopView,
    BankCard,
    CardStack,
    Btn
  },
  name: "Home",
  data: () => {
    return {
      activeCard: {
        id: "01",
        holder: "John Snow",
        number: "5595 5960 0938 9383",
        bgColor: "#FFAE34",
        textColor: "#444",
        company: "Bitcoin",
        validation: "12/22",
        ccv: "956"
      },
      CardsData: Cards.cards
    };
  },
  methods: {
    addCard() {
      console.log("youClicked");
      this.$router.push("/addCard");
    },
    activateClicked(card) {
      this.CardsData.splice(this.CardsData.indexOf(card), 1);
      this.CardsData.push(this.activeCard);
      this.activeCard = card;
    }
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

button {
  width: 100%;
  border: black 1px solid;
  padding: 1.2rem 2.6rem;
  margin-bottom: 1rem;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 8px;
  word-spacing: 0.6rem;
  font-size: 1rem;
  background: #fff;
  color: #000;
}

@media all and (min-width: 600px) {
  .home {
    width: 378px;
  }
}
</style>