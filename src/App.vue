<template>
  <input v-model="amount" type="number" />
  <br />
  <button @click="deposit">Deposit</button>
  <button @click="withdraw">Withdraw</button>

  <br />
  <p>Balnce : {{ balance }}</p>
  <p>Squared : {{ squaredAmount }}</p>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      balance: 0,
    };
  },

  methods: {
    deposit() {
      if (this.amount < 0) {
        alert("amount must be positive");
      } else {
        this.balance += this.amount;
      }
    },
    withdraw() {
      if (this.amount > this.balance) {
        alert("amount can not exceed balance");
      } else if (this.amount < 0) {
        alert("amount can not be negative");
      } else {
        this.balance -= this.amount;
      }
    },
  },

  computed: {
    squaredAmount() {
      return this.amount ** 2;
    },
  },
};
</script>
