<template>
  <Card class="card" :class="{ white, purple }" p2>
    <div flex column>
      <div flex row space-between align-center wrap mb2>
        <h3>{{ title }}</h3>
        <p class="pricing text-right">{{ text }}</p>
      </div>
      <hr mb2 />
      <div>
        <ul flex row wrap mb2>
          <li
            mb1
            v-for="(item, i) in items"
            :key="i"
            flex
            half
            align-center
            :class="{ invalid: !item.valid }"
          >
            <i v-if="item.valid" class="far fa-check" mr1></i>
            <i v-else class="far fa-times" mr1></i>
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
  li {
    margin-right: var(--margin);
    &:last-child {
      margin-bottom: 0 !important;
    }
    i {
      max-width: 18px;
    }
  }
}

.pricing {
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}

hr {
  min-width: 100%;
  width: 100%;
}

/*white*/
.white {
  background-color: var(--white);
  .invalid {
    p {
      color: var(--light-purple);
    }
    i {
      color: var(--light-purple);
    }
  }
}

/*purple*/
.purple {
  transform: scale(1.05);
  background-color: var(--purple);
  h3 {
    color: var(--white);
  }
  p {
    color: var(--white);
  }
  .invalid {
    p {
      color: var(--deep-purple);
    }
    i {
      color: var(--deep-purple);
    }
  }
  li {
    color: var(--white);
  }
  hr {
    color: var(--deep-purple);
  }
  button {
    color: var(--purple);
    background-color: var(--white);
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  li {
    margin-right: 0;
  }
  a {
    width: 100%;
  }
}
@media only screen and (max-width: $mobile-only) {
  .pricing {
    margin-top: calc(var(--margin) * 2);
    text-align: left;
  }
}
</style>
