<template>
  <div>
    <Header
      :picture="require('~/assets/workflows/workflows.svg')"
      :title="title"
      :description="description"
    >
      <div class="btn-center">
        <Button @click="popup = !popup" class="btn-cta" primary mr2>Stay Updated</Button>
      </div>
    </Header>

    <transition name="fade">
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
    </transition>

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
      <div class="outer-background" pt3 pb3>
        <Container>
          <div flex row space-between align-center wrap>
            <div half>
              <Code class="code" />
            </div>
            <div half>
              <Titletext3
                title="Automate complexities"
                text="Build your own development workflow by connecting the events and tasks from any service through a simple config file. Implement complex technologies like blockchains without managing the complexities like server instances and data consensuses.</br></br>Any services from the Marketplace can be immediately reused within workflows, or users can write new services using any language or data format."
              />
            </div>
          </div>
        </Container>
      </div>
    </section>

    <CallToAction
      mb3
      title="Launching September 4th"
      description="Orchestrator will launch on ProductHunt soon! Get notified when it’s time to vote."
    >
      <Button @click="popup = !popup" class="btn-cta" white mr2>Stay Updated</Button>
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
import Titletext3 from "~/components/Titletext3";
import Code from "~/components/Code";
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
    Titletext3,
    Code,
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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

.outer-background {
  padding-top: 0;
  background-image: linear-gradient(
    to top,
    var(--light-background),
    var(--white)
  );
}

@media only screen and (max-width: $mobile-breakpoint) {
  .btn-cta {
    margin-right: 0 !important;
  }
  .code {
    margin-bottom: 40px;
  }
  #popup-newsletter > .content {
    width: auto;
  }
}

@media only screen and (max-width: $tablet-breakpoint) {
  .outer-background {
    margin-bottom: 40px;
  }
}
</style>







