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
      CardsData: JSON.parse(window.localStorage.getItem("Cards")).cards
    };
  },
  created() {
    let checkCards = JSON.parse(window.localStorage.getItem("Cards"));
    if (checkCards === null) {
      let cards = {
        cards: [
          {
            id: "02",
            holder: "john snow",
            number: "5595 5960 0938 9383",
            bgColor: "#8B58F9",
            textColor: "#fffc",
            company: "Block Chain",
            validation: "12/22",
            ccv: "354"
          },
          {
            id: "03",
            holder: "john snow",
            number: "5595 5960 0938 9383",
            bgColor: "#F33355",
            textColor: "#fffc",
            company: "Evil Corp",
            validation: "12/22",
            ccv: "262"
          },
          {
            id: "04",
            holder: "john snow",
            number: "5595 5960 0938 9383",
            bgColor: "#222222",
            textColor: "#fffc",
            company: "Ninja",
            validation: "12/22",
            ccv: "342"
          }
        ]
      };
      window.localStorage.setItem("Cards", JSON.stringify(cards));
    }
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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