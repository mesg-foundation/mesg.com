<template>
  <div>
    <Header :picture="require('~/assets/team.svg')" :title="title" :description="description">
      <div>
        <Button :href="externalLinks.contact" target="_blank" primary>Get in touch</Button>
      </div>
    </Header>

    <section id="intro" mb3>
      <Container flex column align-center>
        <h2 mb1>About the Foundation</h2>
        <p
          mb3
          class="text-center"
        >The SDK and Marketplace are developed by a global team of passionate developers for The MESG Foundation, a non-profit organization.</p>
        <Card>
          <Video :src="externalLinks.video"></Video>
        </Card>
      </Container>
    </section>

    <section id="story vision" mb3>
      <Container>
        <div flex row space-between wrap>
          <Titletext3
            half
            title="Story"
            text="The MESG Foundation was built to promote and support blockchain technology through the improvement of its accessibility and use in the real world."
          />

          <Titletext3
            half
            title="Vision"
            text="To be the first universal infrastructure to bridge legacy companies moving into a trustless landscape. The future of business is decentralized."
          />
        </div>
      </Container>
    </section>

    <hr mb3 />
    <section id="documents" mb2>
      <Container>
        <div flex row space-between wrap>
          <Document v-for="(document, i) in documents" :key="i" half :document="document" mb2 />
        </div>
      </Container>
    </section>
    <hr mb3 />

    <section id="team">
      <Container flex column align-center class="title">
        <h2 class="description">The team behind MESG</h2>
      </Container>
      <div class="outer-background" mb3>
        <Container>
          <div flex row wrap class="founders">
            <div v-for="(member, i) in team.members.founders" :key="i" third mb2 fill-height>
              <Member
                :src="member.src"
                :to="member.linkedin"
                :title="member.title"
                :text="member.description"
              />
            </div>
          </div>
          <div class="team" flex row wrap>
            <div v-for="(member, i) in team.members.other" :key="i" quarter mb2 fill-height>
              <Member
                :src="member.src"
                :to="member.linkedin"
                :title="member.title"
                :text="member.description"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="partners" mb3>
      <Container flex column align-center>
        <h2 mb3>Trusted by fantastic brands</h2>
        <Partners />
      </Container>
    </section>

    <News :articles="articles" mb3 />

    <hr mb3 />

    <section mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Connect with us</h3>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat.</p>
          </div>
          <div half>
            <ListSN :list="['twitter', 'discord', 'telegram', 'forum']" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Aligned with our purpose?"
      description="Reach out! We love helping the community find new ways to build powerful solutions."
      :links="[{ title: 'Get in touch' , href: externalLinks.contact }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Video from "~/components/Video";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Document from "~/components/Document";
import Member from "~/components/Member";
import Partners from "~/components/Partners";
import News from "~/components/News";
import Titletext3 from "~/components/Titletext3";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
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
    Document,
    Partners,
    News,
    Titletext3,
    CTA,
    ListSN,
    GetStarted
  },
  mixins: [
    page({
      title: "MESG Foundation",
      description:
        "The MESG Foundation is a group of passionate individuals dedicated to promoting blockchain usability in the real world."
    })
  ],
  computed: mapGetters({
    team: "team",
    documents: "documents",
    links: "links",
    externalLinks: "externalLinks",
    articles: "articles"
  })
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $tablet-breakpoint) {
  .content {
    margin-bottom: 0 !important;
  }
  .title {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  #intro .container {
    padding-bottom: 0;
  }
  .content {
    margin-bottom: 40px !important;
  }
  .content:last-child {
    margin-bottom: 0 !important;
  }
  .founders {
    margin-bottom: 40px;
  }
}
</style>






