<template>
  <div>
    <Header :picture="usecase.headerimage" :title="title" :description="description">
      <template v-slot:top v-if="usecase.label">
        <TagLabel :type="usecase.label.type" mb1>{{ usecase.label.title }}</TagLabel>
      </template>
      <div>
        <Button :href="usecase.cta" target="_blank" primary>Discover the project</Button>
      </div>
    </Header>

    <section id="use-case">
      <Container id="intro" flex column align-center class="intro text-center" mb3>
        <h2 mb1>{{ usecase.technology }}</h2>
        <p>{{ usecase.paragraphe }}</p>
      </Container>
      <Container id="challenges-goals">
        <div flex row space-between align-center wrap mb3>
          <div half p1>
            <img :src="usecase.image" />
          </div>
          <div half column flex space-between>
            <h3 mb1>Challenges</h3>
            <p mb2>{{ usecase.challenges }}</p>
            <h3 mb1>Goals</h3>
            <p>{{ usecase.goals}}</p>
          </div>
        </div>
      </Container>
      <Container id="usecase-description" mb3>
        <div flex row space-between align-center mobile-column-reverse wrap>
          <div half>
            <h3 mb1>Benefits</h3>
            <ul mb2>
              <li v-for="(benefit, i) in usecase.benefits" :key="i">{{ benefit }}</li>
            </ul>
            <h3 mb1>Opportunities</h3>
            <ul>
              <li
                v-for="(opportunitie, i) in usecase.opportunities"
                :key="i"
                class="opportunitie"
              >{{ opportunitie }}</li>
            </ul>
          </div>
          <div half class="illus">
            <Video v-if="usecase.video" :src="usecase.video" class="video"></Video>
            <img v-else :src="usecase.picture" class="image" />
          </div>
        </div>
      </Container>
    </section>

    <section class="outer-background" mb3>
      <Container v-if="usecase.companies" flex column align-center mb3>
        <h3 class="text-center" mb2>Who could benefit from this?</h3>
        <ul flex row mobile-column class="companies">
          <li v-for="(company, i) in usecase.companies" :key="i">
            <a :href="company.to" class="link-secondary" target="_blank">
              <img :src="company.src" class="company" />
            </a>
          </li>
        </ul>
      </Container>
      <Container id="information" flex column align-center mb3>
        <h3 mb1>More information</h3>
        <p class="text-center" mb2>{{usecase.information}}</p>
        <div flex row mobile-column>
          <Button
            secondary
            v-for="(resource, i) in usecase.resources"
            :key="i"
            :href="resource.to"
            target="_blank"
            mr2
          >{{resource.title}}</Button>
        </div>
      </Container>
    </section>

    <section id="showcase" mb3>
      <Container>
        <div flex column align-center>
          <h2 class="text-center" mb2>Built with MESG</h2>
          <div flex row mobile-column mb2>
            <UseCase v-for="usecase in nextUsecases" :key="usecase.id" :usecase="usecase" />
          </div>
          <Button secondary :to="links.showcase">See the showcase</Button>
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <CardNewsletter
            title="Newsletter"
            description="Sign up for our monthly newsletter to receive updates about MESG, our roadmap, products, new releases and more."
            half
          />
          <div id="community" half class="social">
            <h3 mb1>Community</h3>
            <p
              mb2
            >MESG is open-source and is built by contributors from around the world. Join us in building the bridges between legacy and emerging technologies.</p>
            <ListSN :list="[icons.forum, icons.discord]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      icon="fal fa-book"
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Start building' , to: links.getstarted }]"
      mb1
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import UseCase from "~/components/UseCase";
import Video from "~/components/Video";
import Button from "@mesg-components/button";
import TagLabel from "@mesg-components/tag-label";
import Card from "~/components/Card";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import CardNewsletter from "~/components/CardNewsletter";
import page from "../page";

export default {
  components: {
    Header,
    Container,
    UseCase,
    Video,
    Button,
    TagLabel,
    Card,
    CTA,
    ListSN,
    CardNewsletter
  },
  asyncData({ store, params, error }) {
    const usecase = store.getters.usecases.find(x => x.id === params.id);
    if (!usecase) {
      return error({ statusCode: 404, message: "Usecase not found" });
    }
    return { usecase };
  },
  mixins: [
    page(x => ({
      title: x.usecase.title,
      description: x.usecase.description
    }))
  ],
  props: {
    src: {
      type: String
    }
  },
  computed: {
    ...mapGetters({
      links: "links",
      usecases: "usecases",
      externalLinks: "externalLinks",
      icons: "icons"
    }),
    nextUsecases() {
      const index = this.usecases.findIndex(x => x.id === this.usecase.id) + 1;
      const end = index + 3;
      if (end > this.usecases.length) {
        return [
          ...this.usecases.slice(index),
          ...this.usecases.slice(0, end % this.usecases.length)
        ];
      } else {
        return this.usecases.slice(index, end);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: 6px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}

li.opportunitie:last-child {
  margin-bottom: 0 !important;
}
.companies {
  list-style: none;
  margin-left: 0;
  li {
    text-align: center;
    margin-bottom: 0;
  }
}

.company {
  height: 30px;
  width: auto;
}

.label {
  border-radius: 3px;
  padding: calc(var(--margin) / 2);
}
.partner {
  background-color: var(--light-orange);
}
.community {
  background-color: var(--light-background);
}

@media only screen and (max-width: $mobile-breakpoint) {
  .intro {
    padding-bottom: 0;
  }
  #usecase-description {
    .illus {
      margin-bottom: calc(var(--margin) * 2) !important;
    }
    ul:last-child {
      margin-bottom: 0 !important;
    }
  }
  .companies li {
    margin-bottom: var(--margin);
  }
  #information a {
    text-align: center;
    margin-right: 0 !important;
  }
  .social {
    margin-top: calc(var(--margin) * 3);
  }
}
</style>
