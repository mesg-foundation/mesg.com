<template>
  <section id="newsletter">
    <Container>
      <Card p2>
        <slot />
        <h2 mb1>{{ title }}</h2>
        <p mb2>{{ description }}</p>
        <div class="form">
          <form
            data-token="32bdd13cbff3931061eb3eca01321d84"
            @submit.prevent="submit"
            flex
            row
            wrap
          >
            <div flex column>
              <input type="email" placeholder="Your email address" v-model="email" required />
            </div>
            <div flex column third>
              <button type="submit" class="submit-newsletter">Sign up</button>
            </div>
          </form>
        </div>
      </Card>
    </Container>
  </section>
</template>

<script>
import Card from "~/components/Card";
import Container from "~/components/Container";
import Button from "~/components/Button";
export default {
  components: {
    Card,
    Container,
    Button
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
button[type="submit"] {
  border-radius: 3px;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  padding: 0.75em;
  padding-left: 2em;
  padding-right: 2em;
  text-decoration: none;
  display: inline-block;
  color: var(--white);
  background-color: var(--purple);
}
button[type="submit"]:hover {
  background-color: var(--purple-shadow);
  transition: 0.2s ease;
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

.close {
  top: 20px;
  right: 20px;
  position: absolute;
  color: var(--light-purple);
}
.close:hover {
  cursor: pointer;
  color: var(--purple);
}

@media only screen and (max-width: $tablet-breakpoint) {
  input[type="email"] {
    width: 100%;
    margin-right: 0 !important;
  }
  button[type="submit"] {
    width: 100%;
  }
}
</style>