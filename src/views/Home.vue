<template>
  <div id="home">
    <TopView headTitle="e-wallet" cardStatus="active card" />
    <BankCard v-bind:card="activeCard" v-bind:activeCard="true" />
    <p
      class="alert"
      v-if="this.CardsData.length == 0"
    >Your card stack is empty, press the button bellow to add cards.</p>
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
      if (this.CardsData.length === 0) {
        this.activeCard = {
          id: "00",
          holder: "sample card",
          number: "0000 0000 0000 0000",
          bgColor: "#D0D0D0",
          textColor: "#222",
          company: "Bitcoin",
          validation: "12/22",
          ccv: "342"
        };
      } else {
        this.activeCard = this.CardsData[0];
      }
    },
    activateClicked(card) {
      this.activeCard = card;
    },
    setStorage() {
      //localStorage.clear();
      let checkCards = JSON.parse(window.localStorage.getItem("Cards"));
      if (checkCards === null) {
        let cards = {
          cards: []
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

.alert {
  color: red;
  padding-top: 2.6rem;
  line-height: 1.6rem;
  font-weight: bold;
}

@media all and (min-width: 600px) {
  #home {
    width: 378px;
  }
}
</style>