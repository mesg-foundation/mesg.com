<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/enterprise/mesg-enterprise.png')"
      :title="title"
      :description="description"
    >
      <div flex row>
        <Button :to="links.demo" primary>Request a demo</Button>
        <span spacer></span>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between>
        <TextWithIcon
          :src="require('~/assets/enterprise/connect.png')"
          title="Connect systems"
          text="Build and share APIs and connections to blockchains to save time in development, or boost revenues. Managed by the free, open source MESG Engine."
        />
        <TextWithIcon
          :src="require('~/assets/enterprise/automate.png')"
          title="Automate tasks"
          text="Create autonomous reactive applications and workflows using any API, IoT device or blockchain, that can execute and function entirely from a decentralized cloud."
        />
        <TextWithIcon
          :src="require('~/assets/enterprise/process.png')"
          title="Process data"
          text="By listening for digital events, data can be gathered and processed more efficiently than ever before. Use more blockchains and databases without the headache."
        />
      </Container>
    </section>

    <section id="features-2" mb3>
      <Container>
        <h2 mb2>MESG Enterprise Features</h2>
        <div flex row wrap>
          <TextWithIcon
            half
            :src="require('~/assets/enterprise/support.png')"
            title="Engineering support"
            text="Receive priority technical support from a team of engineers dedicated to your project, day or night."
          />
          <TextWithIcon
            half
            :src="require('~/assets/enterprise/architecture.png')"
            title="Architecture advisory"
            text="Our advisors are committed to creating optimum efficiency between all of your connected systems."
          />
          <TextWithIcon
            half
            :src="require('~/assets/enterprise/custom-build.png')"
            title="Custom-built solutions"
            text="Don’t want to built it yourself? Let us build apps for you, enhancing legacy software with blockchains, IoT devices and more."
          />
          <TextWithIcon
            half
            :src="require('~/assets/enterprise/community-support.png')"
            title="Custom-built solutions"
            text="MESG has a strong community and economy built to support development. Share app components, or get support on <a href='https://forum.mesg.com' target='_blank'>the forum</a>."
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
        >Use MESG’s powerful functionality locally for free, or sit back and receive expert guidance from a team of engineers dedicated to your project</p>
      </Container>
    </section>
    <section id="packages-2" mb3 class="with-background">
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
          <div half mb2>
            <h4 mb1>Are apps dependent on MESG to run?</h4>
            <p>No, MESG’s software is free and open-source, so apps will always be accessible regardless of MESG’s status. You retain ownership over the application components you build, plus the decentralization network allows apps to execute without any centralized dependencies.</p>
          </div>
          <div half mb2>
            <h4 mb1>How does MESG manage intellectual property?</h4>
            <p>We take privacy seriously and set clear expectations with new clients. MESG keeps intellectual property secure through agreements signed with new clients, plus, services and apps can always be kept private, designed to function on your own private network and nowhere else.</p>
          </div>
          <div half mb2>
            <h4 mb1>Who owns the apps that MESG builds for me?</h4>
            <p>When our team of dedicated engineers build apps and components for our enterprise clients, the full ownership of will remain in the client’s hands. We provide additional integration options as well, such as the ability to rent services from MESG.</p>
          </div>
          <div half mb2>
            <h4 mb1>MESG is free, so why purchase advisory services?</h4>
            <p>Apps and components on MESG can be created for free and will always remain free, but great app architectures are hard to come by. Our architects and engineers help you save time throughout the life of the app by designing a strong, efficient architecture.</p>
          </div>
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
    links: "links"
  })
};
</script>
