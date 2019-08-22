<template>
  <Card>
    <Container p2>
      <slot />
      <h2 mb1>{{ title }}</h2>
      <p mb2>{{ description }}</p>
      <div class="form">
        <form data-token="32bdd13cbff3931061eb3eca01321d84" @submit.prevent="submit" flex row wrap>
          <div flex column>
            <input type="email" placeholder="Your email address" v-model="email" required />
          </div>
          <div flex column third>
            <button type="submit" class="submit-newsletter">Sign up</button>
          </div>
        </form>
      </div>
    </Container>
    <Container class="bottom" p2>
      <p class="infos">
        By submitting this form you agree to receive email updates. Find out how we process
        <a
          href="/privacy-cookie-policy"
          target="_blank"
        >your data</a>.
      </p>
    </Container>
  </Card>
</template>

<script>
import Card from "~/components/Card";
import Container from "~/components/Container";
export default {
  components: {
    Card,
    Container
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      email: "",
      popup: true
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

.submit-newsletter:hover {
  cursor: pointer;
}

h2 {
  text-align: left;
}

.infos {
  font-size: 14px;
}

.bottom {
  background-color: var(--light-background);
}

@media only screen and (max-width: $mobile-breakpoint) {
  button {
    margin-top: 20px;
  }
}
</style>