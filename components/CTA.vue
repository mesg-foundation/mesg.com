<template>
  <section id="cta">
    <Container>
      <Card class="card-cta" p2>
        <div flex row align-center space-between mobile-column>
          <div class="icon" v-if="icon">
            <span flex align-center>
              <i :class="icon"></i>
            </span>
          </div>
          <div class="content">
            <h2>{{ title }}</h2>
            <p v-if="description" mt1>{{ description }}</p>
          </div>
          <nav flex column quarter>
            <Button
              white
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              :href="link.href"
              target="_blank"
            >{{ link.title }}</Button>
            <slot />
          </nav>
        </div>
      </Card>
    </Container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import Card from "~/components/Card";
export default {
  components: {
    Container,
    Card,
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    icon: {
      type: String
    },
    links: {
      type: Array,
      default: () => []
    },
    externalLinks: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
#cta {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(100% + 100px);
    background: $grey-light;
    transform: translateY(30%) skewY(-8deg);
    z-index: -1;
  }
  .card-cta {
    background-image: linear-gradient(to right, $primary, $purple);
  }
  h2 {
    color: $white;
  }
  p {
    opacity: 0.85;
    color: $white;
  }
  span {
    min-width: 80px;
    max-width: 80px;
    min-height: 80px;
    max-height: 80px;
    border-radius: 3px;
    background-color: $purple;
    i {
      text-align: center;
      font-size: 40px;
      color: $primary-light;
    }
  }
  nav {
    min-width: 220px;
  }
}

@media only screen and (min-width: $huge-breakpoint) {
  #cta:before {
    transform: translateY(30%) skewY(-5deg);
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  #cta:before {
    height: calc(100% + 80px);
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  .content {
    margin-bottom: calc(#{$margin} * 2);
  }
  .icon {
    width: 100%;
    span {
      width: 100%;
      margin-bottom: calc(#{$margin} * 2);
    }
  }
}
</style>
