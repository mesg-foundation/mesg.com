<template>
  <Card class="card" :class="{ white, purple }" p2>
    <div flex column>
      <div flex row space-between align-center wrap mb2>
        <h3>{{ title }}</h3>
        <p class="pricing text-right">{{ text }}</p>
      </div>
      <hr mb2 />
      <div mb2>
        <ul flex row wrap>
          <li v-for="(item, i) in items" :key="i" flex row half :class="{ invalid: !item.valid }">
            <i v-if="item.valid" class="fal fa-check" mr1></i>
            <i v-else class="fal fa-times" mr1></i>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>
      <hr mb2 />
    </div>
    <div class="text-center btn-action">
      <Button v-if="featured" white :href="to" target="_blank">{{ action }}</Button>
      <Button v-else primary :href="to" target="_blank">{{ action }}</Button>
    </div>
  </Card>
</template>

<script>
import Card from "~/components/Card";
import Button from "@mesg-components/button";
export default {
  components: {
    Card,
    Button
  },
  props: {
    title: {
      type: String,
      default: true
    },
    text: {
      type: String,
      default: true
    },
    items: {
      type: Array,
      required: true
    },
    icon: {
      type: String
    },
    description: {
      type: String
    },
    to: {
      type: [String, Object],
      required: true
    },
    action: {
      type: String,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    white() {
      return !this.featured;
    },
    purple() {
      return this.featured;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin-left: 0;
  i {
    position: relative;
    top: 0.2em;
    max-width: 18px;
  }
}

.pricing {
  font-weight: bold;
}

hr {
  min-width: 100%;
  width: 100%;
}

/*white*/
.white {
  background-color: $white;
  .invalid {
    p {
      color: $light-purple;
    }
    i {
      color: $light-purple;
    }
  }
}

/*purple*/
.purple {
  transform: scale(1.05);
  background-color: $purple;
  h3 {
    color: $white;
  }
  p {
    color: $white;
  }
  .invalid {
    p {
      color: $deep-purple;
    }
    i {
      color: $deep-purple;
    }
  }
  li {
    color: $white;
  }
  hr {
    color: $deep-purple;
  }
  button {
    color: $purple;
    background-color: $white;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  li {
    margin-right: 0 !important;
    margin-bottom: calc(#{$margin} / 2);
  }
  a {
    width: 100%;
  }
}
@media only screen and (max-width: $mobile-only) {
  .pricing {
    margin-top: calc(#{$margin} * 2);
    text-align: left;
  }
}
</style>
