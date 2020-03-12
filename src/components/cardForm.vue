<template>
  <div class="form">
    <label for="card-number">card number</label>
    <input type="text" v-model="cardNumber" placeholder="Must be 16 numbers" />
    <label for="cardholder-name">cardholder name</label>
    <input type="text" v-model="cardholderName" placeholder="Firstname Lasname" />
    <section class="validInfo">
      <article>
        <label for="validation">valid thru</label>
        <input type="text" v-model="validation" placeholder="MMYY" />
      </article>
      <article>
        <label for="CCV">ccv</label>
        <input type="text" v-model="ccv" />
      </article>
    </section>
    <select v-model="vendor">
      <option disabled value>Please select a vendor</option>
      <option>Block Chain</option>
      <option>Evil Corp</option>
      <option>Ninja</option>
      <option>Bitcoin</option>
    </select>
    <Btn @btnClicked="addCard" btnText="add card" />
  </div>
</template>

<script>
import Btn from "../components/button.vue";

export default {
  components: {
    Btn
  },
  data: () => {
    return {
      cardNumber: "",
      cardholderName: "",
      validation: "",
      ccv: "",
      vendor: "",
      Cards: JSON.parse(window.localStorage.getItem("Cards"))
    };
  },
  methods: {
    addCard: function() {
      let newId = Math.round(Math.random() * 1000);

      let newCard = {
        id: JSON.stringify(newId),
        holder: this.cardholderName,
        number: "",
        bgColor: "#D0D0D0",
        textColor: "#444",
        company: this.vendor,
        validation: this.validation,
        ccv: this.ccv
      };

      if (this.vendor == "Block Chain") {
        newCard.bgColor = "#8B58F9";
        newCard.textColor = "#fffc";
      } else if (this.vendor == "Evil Corp") {
        newCard.bgColor = "#F33355";
        newCard.textColor = "#fffc";
      } else if (this.vendor == "Ninja") {
        newCard.bgColor = "#222222";
        newCard.textColor = "#fffc";
      } else if (this.vendor == "Bitcoin") {
        newCard.bgColor = "#FFAE34";
        newCard.textColor = "#444";
      }

      //validation of card number

      if (this.cardNumber.length < 16) {
        alert("Card number must contain 16 numbers!");
      } else if (this.cardNumber.length > 16) {
        alert("Card number must contain only 16 numbers!");
      } else if (this.cardNumber.length == 16) {
        if (isNaN(parseInt(this.cardNumber))) {
          alert("Card number must be a valid number");
        } else {
          let number = this.cardNumber.split("");
          for (let i = 0; i < 4; i++) {
            if (i < 3) {
              newCard.number += number.splice(0, 4).join("") + " ";
            } else {
              newCard.number += number.splice(0, 4).join("");
            }
          }

          // validation of cardholderName

          if (!newCard.holder.match(/^[A-Za-z\s]+$/)) {
            alert("Cardholder name must contain only letters");
          } else {
            // validation of validation date and ccv number

            if (isNaN(parseInt(this.validation)) || isNaN(parseInt(this.ccv))) {
              alert("Validation date and CCV must be a number");
            } else {
              if (
                this.validation.length > 5 ||
                this.validation.indexOf("/") == -1
              ) {
                alert(
                  "Validation date must be a four digit number and contain a '/'"
                );
              } else {
                this.Cards.cards.push(newCard);
                window.localStorage.setItem(
                  "Cards",
                  JSON.stringify(this.Cards)
                );
                this.$router.push("/");
              }
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin: 1rem 0rem 0rem 0rem;
  width: 94%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  input,
  select {
    width: 100%;
    padding: 1rem;
    border: 1px solid #0009;
    border-radius: 8px;
    outline: none;
  }

  select {
    margin: 1rem 0rem;
  }

  label {
    margin: 1rem 0rem 0.4rem 0rem;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    color: #0009;
  }

  .validInfo {
    display: grid;
    grid-template-columns: auto auto;

    article {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      &:nth-child(2) {
        justify-self: flex-end;
      }
    }
  }
  button {
    background: #000;
    color: #fff;
    margin-top: 0rem;
  }
}
</style>