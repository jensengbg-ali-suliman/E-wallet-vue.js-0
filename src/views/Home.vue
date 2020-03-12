<template>
  <div id="home">
    <TopView headTitle="e-wallet" cardStatus="active card" />
    <BankCard v-bind:card="activeCard" v-bind:activeCard="true" />
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
  computed: {
    CardsData() {
      return JSON.parse(window.localStorage.getItem("Cards")).cards;
    }
  },
  data: () => {
    return {
      activeCard: {}
    };
  },
  created() {
    this.setStorage();
    this.setActiveCard();
  },
  methods: {
    addCard() {
      console.log("youClicked");
      this.$router.push("/addCard");
    },
    setActiveCard: function() {
      console.log("asdsad");
      if (Object.entries(this.activeCard).length === 0) {
        this.activeCard = this.CardsData[0];
      }
    },
    activateClicked(card) {
      this.activeCard = card;
    },
    setStorage() {
      let checkCards = JSON.parse(window.localStorage.getItem("Cards"));
      if (checkCards === null) {
        let cards = {
          cards: [
            {
              id: "04",
              holder: "john snow",
              number: "5595 5960 0938 9383",
              bgColor: "#222222",
              textColor: "#fffc",
              company: "Ninja",
              validation: "12/22",
              ccv: "342"
            },
            {
              id: "01",
              holder: "John Snow",
              number: "5595 5960 0938 9383",
              bgColor: "#FFAE34",
              textColor: "#444",
              company: "Bitcoin",
              validation: "12/22",
              ccv: "956"
            }
          ]
        };
        window.localStorage.setItem("Cards", JSON.stringify(cards));
      }
    }
  }
};
</script>

<style>
#home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.btn {
  width: 100%;
  border: black 1px solid;
  padding: 1.2rem 2.6rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
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
  #home {
    width: 378px;
  }
}
</style>