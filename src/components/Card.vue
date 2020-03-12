<template>
  <div class="card" :style="{ 'background': card.bgColor}" @click="cardClicked">
    <section class="imgSection">
      <article>
        <img src="@/assets/wifi.svg" alt />
        <img src="@/assets/chip.svg" alt />
      </article>
      <img :src="require('../assets/'+card.company+'.svg')" alt />
    </section>
    <article class="cardNum">
      <p :style="{ 'color': card.textColor}">{{ card.number }}</p>
    </article>
    <article class="bottomSec tagsSec">
      <p :style="{ 'color': card.textColor}">cardholder name</p>
      <p :style="{ 'color': card.textColor}">valid thru</p>
    </article>
    <article class="bottomSec">
      <p :style="{ 'color': card.textColor}">{{ card.holder }}</p>
      <p :style="{ 'color': card.textColor}">{{card.validation }}</p>
    </article>
    <button v-if="activeCard" id="delete" @click="deleteCard(card)">&#10005;</button>
  </div>
</template>

<script>
export default {
  methods: {
    cardClicked() {
      this.$emit("cardClicked");
    },
    deleteCard(card) {
      let cards = JSON.parse(window.localStorage.getItem("Cards"));
      for (let i = 0; i < cards.cards.length; i++) {
        if (cards.cards[i].id == card.id) {
          cards.cards.splice(cards.cards.indexOf(cards.cards[i]), 1);
          window.localStorage.setItem("Cards", JSON.stringify(cards));
          location.reload();
        }
      }
    }
  },
  name: "BankCard",
  props: {
    card: Object,
    activeCard: Boolean
  },
  data: () => {
    return {
      img: "Bitcoin",
      exitBtnShown: false
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin displayFelx {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
p {
  text-transform: uppercase;
  text-shadow: -0.2px -0.2px rgb(19, 22, 29);
}

img {
  transform: scale(0.8);
}
.card {
  position: relative;
  margin-top: 0.6rem;
  width: 92%;
  height: 12rem;
  padding: 1rem 1rem;
  border-radius: 10px;
  @include displayFelx();
  justify-content: center;
  box-shadow: 0px 0px 10px #666;
  cursor: pointer;

  .imgSection {
    width: 100%;
    @include displayFelx();
    flex-direction: row;
    align-items: flex-start;

    * {
      transform: scale(0.8);
    }

    article {
      @include displayFelx();
      align-self: flex-start;
    }
  }

  .cardNum {
    font-size: 1.6rem;
    word-spacing: 0.4rem;
    margin: 0.4rem 0rem;
    font-weight: 100;
  }

  .bottomSec {
    width: 100%;
    margin-top: 0.2rem;
    @include displayFelx();
    flex-direction: row;
    font-size: 1rem;
  }

  .tagsSec {
    font-size: 0.5rem;
    margin-top: 0.5rem;
    p {
      opacity: 0.7;
    }
  }
}

#delete {
  width: initial;
  position: absolute;
  right: -1.6rem;
  top: 40%;
  border-radius: 4px;
  padding: 0.4rem 0.5rem;
  background: red;
  color: #fff;
  border: none;
  font-weight: 100;
  font-size: 0.7rem;
  text-align: center;
  cursor: pointer;
}
</style>