<template>
  <div>
    <Header mb3 :picture="require('~/assets/team.svg')" :title="title" :description="description">
      <div>
        <Button :to="links.demo" primary>Get in touch</Button>
        <span spacer></span>
      </div>
    </Header>

    <section id="intro" mb3>
      <Container flex column align-center>
        <h2 mb1>About the MESG Foundation</h2>
        <p
          mb2
          class="text-center"
        >The Engine and Marketplace are developed by a worldwide team of passionate developers for The MESG Foundation, a non-profit organization.</p>
        <Card>
          <Video :src="externalLinks.video"></Video>
        </Card>
      </Container>
    </section>

    <section id="story vision">
      <Container>
        <div flex row space-between wrap>
          <Titletext3
            half
            mb3
            title="Our story"
            text="The MESG Foundation was built to promote and support blockchain technology through the improvement of its accessibility and use in the real world."
          />

          <Titletext3
            half
            mb3
            title="Our vision"
            text="To be the first universal infrastructure to bridge legacy companies moving into a trustless landscape. The future of business is decentralized."
          />
        </div>
      </Container>
    </section>

    <section id="numbers-intro">
      <Container flex column align-center>
        <h3 mb2>The Foundation in numbers</h3>
      </Container>
    </section>
    <section id="numbers">
      <Container>
        <div flex row space-between wrap>
          <Card quarter p2 mb3 flex column>
            <h3 class="text-center">2017</h3>
            <p class="text-center">CREATION OF MESG</p>
          </Card>

          <Card quarter p2 mb3 flex column>
            <h3 class="text-center">2017</h3>
            <p class="text-center">CREATION OF MESG</p>
          </Card>

          <Card quarter p2 mb3 flex column>
            <h3 class="text-center">2017</h3>
            <p class="text-center">CREATION OF MESG</p>
          </Card>

          <Card quarter p2 mb3 flex column>
            <h3 class="text-center">2017</h3>
            <p class="text-center">CREATION OF MESG</p>
          </Card>
        </div>
      </Container>
    </section>

    <section id="team">
      <Container flex column align-center>
        <h2 mb2>The Core of the project</h2>
      </Container>
      <div class="inner-background" mb3>
        <Container>
          <div flex row wrap>
            <div v-for="(member, i) in team.members.founders" :key="i" third mb2 fill-height>
              <Member :src="member.src" :title="member.title" :text="member.description"/>
            </div>
          </div>
          <div flex row wrap>
            <div v-for="(member, i) in team.members.other" :key="i" quarter mb2 fill-height>
              <Member :src="member.src" :title="member.title" :text="member.description"/>
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="partners" mb3>
      <Container flex column align-center>
        <h2 mb2>Trusted by fantastic brands</h2>
        <Partners mb2/>
        <Button secondary :to="links.partners">Our partners</Button>
      </Container>
    </section>

    <News :articles="articles"/>

    <CallToAction
      mb3
      title="Aligned with our purpose?"
      description="Reach out! We love helping companies find new integrations to build powerful solutions."
      :links="[{ title: 'Get in touch' , to: links.enterprise }]"
    />

    <Discover mb3 left="token" right="enterprise"/>

    <GetStarted mb3/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Video from "~/components/Video";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Member from "~/components/Member";
import Partners from "~/components/Partners";
import News from "~/components/News";
import Titletext3 from "~/components/Titletext3";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Video,
    Member,
    Button,
    Card,
    Partners,
    News,
    Titletext3,
    CallToAction,
    Discover,
    GetStarted
  },
  mixins: [
    page({
      title: "MESG Foundation",
      description:
        "The MESG Foundation is a group of passionate individuals dedicated to the creation of a new economy for developers."
    })
  ],
  computed: mapGetters({
    team: "team",
    links: "links",
    externalLinks: "externalLinks",
    articles: "articles"
  })
};
</script>


