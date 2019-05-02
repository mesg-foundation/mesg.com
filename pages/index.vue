<template>
  <div>
    <Header :schema="schema" :title="title" :description="description">
      <div flex row>
        <Button to="/token" primary>Enterprise Solutions</Button>
        <Button to="/token" secondary>Get Started</Button>
      </div>
    </Header>

    <section id="partners">
      <Container flex column align-center>
        <div mb2 flex row space-around>
          <img src alt>
          <img src alt>
          <img src alt>
          <img src alt>
        </div>
        <Button secondary>Our partners</Button>
      </Container>
    </section>

    <section id="intro">
      <Container flex column align-center>
        <h2 mb2>How MESG accelerates app development</h2>
        <Card>
          <Video src="https://www.youtube.com/embed/VjPG51iE_fk"></Video>
        </Card>
      </Container>
    </section>

    <section id="products">
      <Container flex column align-center>
        <h2 mb1>Our products</h2>
        <p
          mb2
          class="text-center"
        >MESG’s Engine and Marketplace work in tandem to offer an open economy of limitless app and workflow integrations that all work together right out of the box.</p>
      </Container>
      <Container>
        <div flex row space-between>
          <Card p2 mb2 mr1 flex column space-between>
            <img src alt>
            <h3 mb1>MESG Engine</h3>
            <p
              mb2
            >The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.</p>
            <span flex></span>
            <ul mb2>
              <li mb1>Event-driven architecture</li>
              <li mb1>Connect divergent tech</li>
              <li mb1>Connect divergent tech</li>
            </ul>
            <Button outline>Connect divergent tech</Button>
          </Card>
          <Card p2 mb2 ml1 flex column space-between>
            <img src alt>
            <h3 mb1>MESG Marketplace</h3>
            <p
              mb2
            >A decentralized marketplace to connect buyers looking to save time in development with sellers earning tokens for the reuse of their code.</p>
            <span flex></span>
            <ul mb2>
              <li mb1>Reuse your work</li>
              <li mb1>Earn while you sleep</li>
              <li mb1>Economy of development</li>
            </ul>
            <Button outline>Discover the MESG Marketplace</Button>
          </Card>
        </div>
        <Card p2>
          <div flex row>
            <img src alt>
            <div>
              <h3 mb1>Build Modules, Earn Tokens</h3>
              <p>Earn MESG Tokens by building reusable Modules in the decentralized economy of app development.</p>
            </div>
            <div>
              <Button outline>Discover the MESG Token</Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  </div>
</template>


<script>
import Header from "~/components/Header";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Video from "~/components/Video";
import Card from "~/components/Card";
import page from "./page";
export default {
  components: {
    Header,
    Container,
    Button,
    Video,
    Card
  },
  mixins: [
    page({
      title: "The new economy of app development",
      description:
        "Build applications connecting reusable, shareable integrations from any API or decentralized network, managed by the MESG Engine. And get paid for it."
    })
  ]
};
</script>