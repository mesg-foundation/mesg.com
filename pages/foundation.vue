<template>
  <div>
    <Header :picture="require('~/assets/team.svg')" :title="title" :description="description">
      <div>
        <Button :href="externalLinks.contact" target="_blank" primary>Get in touch</Button>
      </div>
    </Header>

    <section id="presentation" mb3>
      <Container flex column align-center class="text-center">
        <h2 mb1>About the Foundation</h2>
        <p
          mb2
        >The SDK and Marketplace are developed by a global team of passionate developers for The MESG Foundation, a non-profit organization.</p>
        <div class="mesg-presentation">
          <Video :src="externalLinks.video"></Video>
        </div>
      </Container>
    </section>

    <section id="story-vision" mb3>
      <Container>
        <div flex row space-between wrap>
          <Titletext3
            half
            title="Story"
            text="The MESG Foundation was built to promote and support blockchain technology through the improvement of its accessibility and use in the real world."
            mb2
          />

          <Titletext3
            half
            title="Vision"
            text="To be the first universal infrastructure to bridge legacy companies moving into a trustless landscape. The future of business is decentralized."
            mb2
          />
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="documents" mb2>
      <Container>
        <div flex row space-between wrap>
          <Document :list="['twopager', 'business']" />
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="team">
      <Container flex column align-center class="title text-center">
        <h2>The team behind MESG</h2>
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
      <Partners />
    </section>

    <News :articles="articles" mb3 />

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Connect with us</h3>
            <p
              mb2
            >Join us and the global community of builders on our mission to bridge the gaps between legacy and emerging technologies.</p>
          </div>
          <div half>
            <ListSN :list="[icons.twitter, icons.discord, icons.telegram, icons.forum]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-envelope-open-text"
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
import Button from "@mesg-components/button";
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
    links: "links",
    externalLinks: "externalLinks",
    articles: "articles",
    icons: "icons"
  })
};
</script>

<style lang="scss" scoped>
.mesg-presentation {
  width: 66%;
}

@media only screen and (max-width: $tablet-breakpoint) {
  #documents {
    margin-bottom: 0 !important;
  }
  #documents .container {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  .mesg-presentation {
    width: 100%;
  }
  #presentation .container {
    padding-bottom: 0;
  }
  #team .title {
    padding-bottom: 0;
  }
  .founders {
    margin-bottom: calc(var(--margin) * 2);
  }
  #documents {
    margin-bottom: 0 !important;
  }
  #documents .container {
    padding-bottom: calc(var(--margin) * 2);
  }
}
</style>
