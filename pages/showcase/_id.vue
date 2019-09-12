<template>
  <div>
    <Header :picture="usecase.headerimage" :title="title" :description="description">
      <div class="btn-center">
        <Button :href="externalLinks.getStarted" target="_blank" primary>Discover the project</Button>
      </div>
    </Header>

    <section>
      <Container flex column align-center class="intro" mb3>
        <h2 mb1>{{ usecase.technology }}</h2>
        <p class="text-center">{{ usecase.paragraphe }}</p>
      </Container>
      <Container mb2>
        <div flex row space-between align-center wrap mb3>
          <div half>
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
              <li v-for="(benefit, i) in usecase.benefits" :key="i" mb1>{{ benefit }}</li>
            </ul>
            <h3 mb1>Opportunities</h3>
            <ul>
              <li
                v-for="(opportunitie, i) in usecase.opportunities"
                :key="i"
                mb1
                class="opportunitie"
              >{{ opportunitie }}</li>
            </ul>
          </div>
          <div half>
            <Video v-if="usecase.video" :src="usecase.video"></Video>
            <img v-else :src="usecase.picture" class="image" />
          </div>
        </div>
      </Container>
    </section>

    <section class="outer-background" mb3>
      <Container v-if="usecase.companies" id="who" flex column align-center mb3>
        <h3 class="text-center" mb3>Who could benefit from this?</h3>
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
        <div class="button" flex row mobile-column>
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

    <section id="title-next">
      <Container>
        <h2 class="text-center" mb3>More use cases</h2>
      </Container>
    </section>
    <section class="usecase" id="next" mb3>
      <Container>
        <div flex row wrap>
          <UseCase v-for="usecase in nextUsecases" :key="usecase.id" :usecase="usecase" />
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section mb3>
      <Container>
        <div flex row mobile-column align-center>
          <CardNewsletter
            title="Newsletter"
            description="Sign up for our monthly newsletter to receive updates about MESG, our roadmap, products, new releases and more."
            half
          />
          <div half>
            <h3 mb1>Community</h3>
            <p
              mb2
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus id nunc suscipit volutpat.</p>
            <ListSN :list="['forum', 'discord']" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="Get started"
      description="MESG is free to start and only takes moments to install. Build more with less effort."
      :links="[{ title: 'Start building' , href: externalLinks.getStarted }]"
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
import Button from "~/components/Button";
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
      externalLinks: "externalLinks"
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

ul {
  list-style: none;
}
li {
  font-weight: normal;
}
li::before {
  content: "";
  width: 7px;
  height: 7px;
  margin-right: 15px;
  background-color: var(--deep-purple);
  border-radius: 100%;
  display: inline-block;
}

li.opportunitie:last-child {
  margin-bottom: 0 !important;
}
.companies li::before {
  display: none;
}
.companies li {
  text-align: center;
}
.company {
  height: 30px;
  width: auto;
}

/*next use case*/
.usecase .card {
  margin: 0;
}
.usecase a {
  position: relative;
}
.usecase img {
  min-width: 10%;
  max-width: 100%;
  min-height: 10%;
  max-height: 80px;
}
.usecase .logos::before {
  content: "";
  position: absolute;
  top: 20px;
  height: 80px;
  width: 0.1em;
  left: 50%;
  background-color: var(--light-purple);
}
.usecase .category {
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--purple);
}
.usecase i {
  position: absolute;
  bottom: calc(var(--margin) + 6px);
  right: var(--margin);
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}

@media only screen and (max-width: $tablet-breakpoint) {
  #title-next h2 {
    margin-bottom: 0 !important;
  }
  #title-next .container {
    padding-top: 0;
    padding-bottom: 0;
  }
}
@media only screen and (max-width: $mobile-breakpoint) {
  .intro {
    padding-bottom: 0;
  }
  #usecase-description iframe,
  img {
    margin-bottom: 20px;
  }
  #usecase-description ul:last-child {
    margin-bottom: 0 !important;
  }
  .companies li {
    margin-right: 0 !important;
    margin-bottom: 20px;
  }
  .companies li:last-child img:last-child {
    margin-bottom: 0;
  }
  #next img {
    margin-bottom: 0;
  }
  #information a {
    text-align: center;
    margin-right: 0 !important;
  }
  #information p {
    margin-bottom: 20px !important;
  }
  #information .container {
    margin-bottom: 20px !important;
  }
}
</style>
