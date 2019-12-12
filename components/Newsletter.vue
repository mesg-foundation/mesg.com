<template>
  <form
    data-token="32bdd13cbff3931061eb3eca01321d84"
    @submit.prevent="submit"
    flex
    row
    tablet-column
    wrap
  >
    <div flex column class="email">
      <input type="email" placeholder="Your email address" v-model="email" required />
    </div>
    <div flex column third class="btn">
      <Button submit primary>Sign up</Button>
    </div>
  </form>
</template>

<script>
import Button from "@mesg-components/button";
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
@import "~/assets/_variables";
form {
  position: relative;
}

input[type="email"] {
  max-height: 50px;
  font-size: 15px;
  padding: 13px $margin;
  border: solid 1px $primary-light;
  border-radius: 3px;
  background-color: $white;
  color: $title-color;
}

input[type="email"]:focus {
  outline: none;
  box-shadow: 0 0 0 1px $primary-light inset;
}

.email {
  margin-right: $margin;
}

button {
  padding-left: $margin;
  padding-right: $margin;
  border: none;
}
button:hover {
  cursor: pointer;
}

@media only screen and (max-width: $tablet-breakpoint) {
  .email {
    margin-right: 0;
  }
  .btn {
    width: 100%;
    max-width: 100%;
    margin-top: $margin;
  }
}
</style>