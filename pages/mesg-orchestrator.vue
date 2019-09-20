<template>
  <div>
    <Header
      :picture="require('~/assets/orchestrator.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <Button @click="popup = !popup" class="btn-cta" primary>Stay Updated</Button>
      </div>
    </Header>

    <transition name="fade">
      <div id="popup-newsletter" v-if="popup">
        <div class="background" @click="popup = false" />
        <div class="content">
          <NewsletterPopup
            class="newsletter"
            title="Keep in touch"
            description="Stay connected with us and receive a notification on September 24th for the launch of MESG Orchestrator."
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
          v-for="(feature, i) in orchestrator.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
          class="feature"
        />
      </Container>
    </section>

    <section id="config" mb3>
      <Container class="intro text-center">
        <h2 mb1>Feature-based applications</h2>
        <p>Orchestrate services to create features for your applications. After all, what is an application but a collection of features?</p>
      </Container>
      <div class="outer-background" pt3 pb3>
        <Container>
          <div flex row space-between align-center wrap>
            <div half>
              <Code class="code" />
            </div>
            <div half>
              <Titletext3
                title="Describe your feature"
                text="Orchestrate your application by connecting the events and tasks from any service with a process.</br></br>Implement complex technologies like blockchains and AI without managing the complexities.</br></br>Any existing services from the Marketplace can be used to create features, or users can write new services using any language.</br></br>Currently, services can be orchestrated by writing a process file, and soon, other formats will become available like a UI and Turing-complete programming languages."
              />
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Help & Guidance</h3>
            <p
              mb2
            >The MESG Forum and Github are built to support the community. Browse existing issues and solutions, or create a new one.</p>
          </div>
          <div half>
            <ListSN :list="['github', 'forum']" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Launching September 24th"
      description="Orchestrator will launch on ProductHunt soon! Get notified when it’s time to vote."
      mb1
    >
      <Button @click="popup = !popup" class="btn-cta" white>Stay Updated</Button>
    </CTA>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import Card from "~/components/Card";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
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
    CTA,
    ListSN,
    TextWithIcon,
    Titletext3,
    Code,
    NewsletterPopup
  },
  mixins: [
    page({
      title: "MESG Orchestrator",
      description:
        "Build feature-based applications through the orchestration of MESG services."
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
    orchestrator: "orchestrator"
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

@media only screen and (max-width: $mobile-breakpoint) {
  .btn-cta {
    margin-right: 0 !important;
  }
  .code {
    margin-bottom: calc(var(--margin) * 2);
  }
  #popup-newsletter > .content {
    width: auto;
  }
}
</style>







