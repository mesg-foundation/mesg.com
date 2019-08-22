<template>
  <div>
    <Header
      :picture="require('~/assets/workflows/workflows.svg')"
      :title="title"
      :description="description"
    >
      <div class="btn-center">
        <Button @click="popup = true" class="btn-cta" primary mr2>Stay Updated</Button>
      </div>
    </Header>

    <div id="popup-newsletter" v-if="popup">
      <div class="background" @click="popup = false" />
      <div class="content">
        <NewsletterPopup
          class="newsletter"
          title="Keep in touch"
          description="Stay connected with us and receive a notification on September 4th for the launch of MESG Orchestrator."
        >
          <button class="btn-close" @click="popup = false">
            <i class="fas fa-times"></i>
          </button>
        </NewsletterPopup>
      </div>
    </div>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in workflows.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
          class="feature"
        />
      </Container>
    </section>

    <section id="community" mb3>
      <Container class="intro">
        <h2 mb1>Community-driven workflows</h2>
        <p
          mb2
          class="text-center description"
        >Build apps with workflows through an open-source decentralized economy where every user is a cloud provider.</p>
      </Container>
      <div class="inner-background">
        <Container>
          <Feature
            v-for="(feature, i) in workflows.features.primary"
            :key="i"
            v-bind="feature"
            :reverse="i % 2 === 1"
            mb3
          />
        </Container>
      </div>
    </section>

    <CallToAction
      mb3
      title="Launching September 4th"
      description="Orchestrator will launch on ProductHunt soon! Get notified when it’s time to vote."
    >
      <Button @click="popup = true" class="btn-cta" white mr2>Stay Updated</Button>
    </CallToAction>

    <Discover mb3 left="engine" right="marketplace" />

    <GetStarted mb3 />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Card from "~/components/Card";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import TextWithIcon from "~/components/TextWithIcon";
import Feature from "~/components/Feature";
import NewsletterPopup from "~/components/NewsletterPopup";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    Card,
    CallToAction,
    Discover,
    GetStarted,
    TextWithIcon,
    Feature,
    NewsletterPopup
  },
  mixins: [
    page({
      title: "MESG Orchestrator",
      description:
        "A service-orchestration system for automated deployment, interaction, testing and scaling."
    })
  ],
  data() {
    return {
      popup: false
    };
  },
  computed: mapGetters({
    links: "links",
    externalLinks: "externalLinks",
    workflows: "workflows"
  })
};
</script>

<style lang="scss" scoped>
.btn-cta:hover {
  cursor: pointer;
}

#popup-newsletter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
#popup-newsletter > .background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.32);
}
#popup-newsletter > .content {
  width: 680px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.newsletter {
  position: relative;
}

.btn-close {
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;
  text-decoration: none;
  font-size: 18px;
  position: absolute;
  color: var(--light-purple);
  background-color: var(--light-background);
  border-bottom-left-radius: 6px;
}
.btn-close:focus {
  outline: none;
}
.btn-close:hover {
  cursor: pointer;
  color: var(--purple);
}

@media only screen and (max-width: $mobile-breakpoint) {
  .btn-cta {
    margin-right: 0 !important;
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  #popup-newsletter > .content {
    width: auto;
  }
  #community .intro {
    padding-bottom: 0;
  }
}
</style>







