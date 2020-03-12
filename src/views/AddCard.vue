<template>
  <div class="addCard">
    <TopView headTitle="add a new bank card" cardStatus="new card" />
    <bank-card v-bind:card="activeCard" />
    <cardForm
      @getHolderName="sendHolderName"
      @getCardNumber="sendCardNumber"
      @getValidation="sendValidation"
      @getCcv="sendCcv"
      @getvendor="sendVendor"
    />
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
    sendHolderName: function(data) {
      this.activeCard.holder = data;
    },
    sendCardNumber: function(data) {
      let number = data.match(/.{1,4}/g).join(" ");
      this.activeCard.number = number;
    },
    sendValidation: function(data) {
      this.activeCard.validation = data;
    },
    sendCcv: function(data) {
      this.activeCard.ccv = data;
    },
    sendVendor: function(data) {
      if (data == "Block Chain") {
        this.activeCard.bgColor = "#8B58F9";
        this.activeCard.textColor = "#fffc";
      } else if (data == "Evil Corp") {
        this.activeCard.bgColor = "#F33355";
        this.activeCard.textColor = "#fffc";
      } else if (data == "Ninja") {
        this.activeCard.bgColor = "#222222";
        this.activeCard.textColor = "#fffc";
      } else if (data == "Bitcoin") {
        this.activeCard.bgColor = "#FFAE34";
        this.activeCard.textColor = "#444";
      }
      this.activeCard.company = data;
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
