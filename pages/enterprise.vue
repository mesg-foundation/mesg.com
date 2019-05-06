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

    <section id="packages" mb3>
      <Container>
        <h2 mb1>Our packages</h2>
        <p
          mb2
          class="text-center"
        >Use MESG’s powerful functionality locally for free, or sit back and receive expert guidance from a team of engineers dedicated to your project</p>
      </Container>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Button from "~/components/Button";
import TextWithIcon from "~/components/TextWithIcon";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    TextWithIcon,
    Button
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
