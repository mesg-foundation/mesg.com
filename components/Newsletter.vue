<template>
  <form data-token="32bdd13cbff3931061eb3eca01321d84" @submit.prevent="submit" flex row wrap>
    <div flex column>
      <input type="email" placeholder="Your email address" v-model="email" required />
    </div>
    <div flex column third>
      <Button submit primary>Sign up</Button>
    </div>
  </form>
</template>

<script>
import Button from "~/components/Button";
export default {
  components: {
    Button
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    async submit() {
      const token = "32bdd13cbff3931061eb3eca01321d84";
      const data = new FormData();
      data.append("email", this.email);
      data.append("token", token);
      const req = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      req.open(
        "POST",
        "https://app.sgwidget.com/v2/api/newsletter-signup",
        false
      );
      req.onload = () => {
        const res = JSON.parse(req.responseText);
        if (req.status === 200) {
          alert(res.message);
          this.email = "";
        } else {
          alert(res.email[0]);
        }
      };
      req.send(data);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  position: relative;
}

input[type="email"] {
  max-height: 50px;
  font-size: 15px;
  padding: 13px var(--margin);
  border: solid 1px var(--light-purple);
  border-radius: 3px;
  background-color: var(--white);
  color: var(--dark-purple);
}

input[type="email"]:focus {
  outline: none;
  box-shadow: 0 0 0 1px var(--light-purple) inset;
}

button {
  border: none;
}
button:hover {
  cursor: pointer;
}

@media only screen and (max-width: $mobile-breakpoint) {
  button {
    margin-top: 20px;
  }
}
</style>