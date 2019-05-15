<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/enterprise/enterprise.svg')"
      :title="title"
      :description="description"
    >
      <div>
        <Button :to="links.demo" primary>Request a demo</Button>
        <span spacer></span>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between>
        <TextWithIcon
          v-for="(feature, i) in enterprise.features.primary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
        />
      </Container>
    </section>

    <section id="features-2" mb3>
      <Container>
        <h2 mb1>MESG Enterprise features</h2>
        <p
          mb2
          class="text-center"
        >We know businesses rely on well-functioning systems, which is why our engineers to help you build and design feature-rich workflows that optimize processes across the board.</p>
        <div flex row wrap>
          <TextWithIcon
            half
            v-for="(feature, i) in enterprise.features.secondary"
            :key="i"
            :src="feature.src"
            :title="feature.title"
            :text="feature.description"
          />
        </div>
      </Container>
    </section>

    <section id="packages" mb2>
      <Container>
        <h2 mb1>Our packages</h2>
        <p
          mb2
          class="text-center"
        >Use MESG’s powerful functionality locally for free, or sit back and receive expert guidance from a team of engineers dedicated to your project.</p>
      </Container>
    </section>
    <section id="packages-2" mb3 class="inner-background">
      <Container>
        <!-- TODO packages here -->
        Packages TODO
      </Container>
    </section>

    <section id="partners" mb3>
      <Container flex column align-center>
        <h2 mb2>Already building on MESG</h2>
        <Partners/>
      </Container>
    </section>

    <section id="faq" mb3>
      <Container>
        <h2 mb2>Frequently Asked Questions</h2>
        <div flex row space-between wrap>
          <Titletext4
            half
            v-for="(faq, i) in enterprise.faq"
            :key="i"
            :title="faq.title"
            :text="faq.description"
          />
        </div>
        <div class="text-center">
          <Button secondary :to="links.faq">Access the FAQ</Button>
        </div>
      </Container>
    </section>

    <CallToAction
      mb3
      title="Have specific needs for your custom solution?"
      description="Let MESG Enterprise guide you every step of the way to streamline processes between even the hardest-to-manage services."
      :links="[{ title: 'Request a demo' , to: links.demo }]"
    />

    <Discover mb3 left="showcase" right="token"/>

    <GetStarted mb3/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import TextWithIcon from "~/components/TextWithIcon";
import Partners from "~/components/Partners";
import Titletext4 from "~/components/Titletext4";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    TextWithIcon,
    Button,
    Partners,
    Titletext4,
    CallToAction,
    Discover,
    GetStarted
  },
  mixins: [
    page({
      title: "Enterprise Solutions",
      description:
        "Build with confidence using technical, advisory and design support from the MESG Enterprise Team."
    })
  ],
  computed: mapGetters({
    links: "links",
    enterprise: "enterprise"
  })
};
</script>
