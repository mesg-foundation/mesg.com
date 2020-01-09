<template>
  <div>
    <Header
      :image="require('~/assets/enterprise/enterprise.svg')"
      :title="title"
      :description="description"
    >
      <div mt2>
        <TypeFormPopup :id="forms.contactForm" class="form">
          <Button primary>Get in touch</Button>
        </TypeFormPopup>
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in enterprise.features.primary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="packages" mb3>
      <Container class="intro text-center">
        <h2 mb1>Custom solutions</h2>
        <p>Sit back with confidence and receive expert guidance tailored to your needs from a team of engineers dedicated to your project.</p>
      </Container>
      <div class="outer-background">
        <Container flex mobile-column justify-center>
          <Package v-for="p in enterprise.packages" :key="p.title" v-bind="p" />
        </Container>
      </div>
    </section>

    <section id="features-2" mb3>
      <Container>
        <h2 class="text-center" mb1>MESG Enterprise features</h2>
        <p
          mb2
          class="text-center"
        >We know businesses rely on well-functioning systems, which is why our engineers to help you build and design feature-rich solutions to optimize processes across your stack.</p>
        <div flex row wrap class="features">
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

    <section mb3>
      <Partners />
    </section>

    <section id="faq" mb3>
      <Container>
        <h2 class="text-center" mb2>Frequently Asked Questions</h2>
        <div flex row space-between wrap>
          <Titletext4
            half
            v-for="(faq, i) in enterprise.faq"
            :key="i"
            :title="faq.title"
            :text="faq.description"
            mb2
          />
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-envelope-open-text"
      title="Custom solutions"
      description="MESG offers high levels of customizability and control. We can create custom solutions for you regardless of what’s in your software stack."
      mb1
    >
      <TypeFormPopup :id="forms.contactForm" class="form">
        <Button white>Get in touch</Button>
      </TypeFormPopup>
    </CTA>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@mesg-components/button";
import Header from "@mesg-components/header";
import Container from "~/components/Container";
import TypeFormPopup from "@mesg-components/type-form-popup";
import Package from "~/components/Package";
import TextWithIcon from "~/components/TextWithIcon";
import Partners from "~/components/Partners";
import Titletext4 from "~/components/Titletext4";
import CTA from "~/components/CTA";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    TypeFormPopup,
    Package,
    TextWithIcon,
    Button,
    Partners,
    Titletext4,
    CTA
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
    externalLinks: "externalLinks",
    enterprise: "enterprise",
    forms: "forms"
  })
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
.features {
  padding-top: calc(#{$margin} * 2);
}
@media only screen and (max-width: $tablet-breakpoint) {
  .features {
    padding-top: 0;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  #packages .intro {
    padding-bottom: 0;
  }
}
</style>


