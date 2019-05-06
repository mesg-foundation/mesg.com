<template>
  <div>
    <Header
      mb3
      :picture="require('~/assets/token/mesg-token.png')"
      :title="title"
      :description="description"
    >
      <div flex row>
        <!-- TODO: links -->
        links
      </div>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between>
        <TextWithIcon
          :src="require('~/assets/token/decentralized-executions.png')"
          title="Decentralize executions"
          text="You can become a part of the decentralized network by executing transactions for other applications, all while being rewarded for your participation."
        />
        <TextWithIcon
          :src="require('~/assets/token/secure.png')"
          title="Secure the network"
          text="All participants stake MESG Tokens to commit to their availability and good behavior. Then, participants are rewarded for validating each execution."
        />
        <TextWithIcon
          :src="require('~/assets/token/buy-sell.png')"
          title="Buy and sell Modules"
          text="App components, called Modules, are bought and sold using the MESG Token. Then Modules can be used in any app, no complex coding required."
        />
      </Container>
    </section>

    <section id="atd" mb3>
      <Container>
        <h2 mb1>Algorithmic Token Distribution</h2>
        <p
          mb2
          class="text-center"
        >Built to promote stability and transparency, the Algorithmic Token Distribution (ATD) is the MESG Foundation’s commitment to limit release to only a fraction of the previous day’s total volume.</p>
        <div flex row space-between wrap>
          <TextWithIcon
            half
            :src="require('~/assets/token/algorythm.png')"
            title="The algorithm"
            text="Daily allotment will be calculated as a small percentage of the previous day’s trading volume, tying tokens released to actual demand."
          />
          <TextWithIcon
            half
            :src="require('~/assets/token/transparency.png')"
            title="Transparency"
            text="Metrics will be published daily to enhance transparency between the MESG Foundation and the community."
          />
          <TextWithIcon
            half
            :src="require('~/assets/token/initial-supply.png')"
            title="Initial supply"
            text="0.1% of the total supply was released on the first day of exchange listing to initiate the supply."
          />
          <TextWithIcon
            half
            :src="require('~/assets/token/distribution.png')"
            title="Supply distribution"
            text="The supply distribution of 62.5% will be released in daily allotments."
          />
        </div>
      </Container>
    </section>

    <CallToAction
      mb3
      title="Buy and trade MESG Token on"
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="showcase" right="enterprise"/>

    <GetStarted mb3/>
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
    Feature
  },
  mixins: [
    page({
      title: "MESG Token",
      description:
        "Buy and sell app components in the new economy of app development. MESG Token available now."
    })
  ],
  computed: mapGetters({
    links: "links"
  })
};
</script>
