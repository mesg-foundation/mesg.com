<template>
  <div>
    <Header :picture="usecase.headerimage" :title="title" :description="description"></Header>

    <section id="usecase-intro">
      <Container flex column align-center class="intro">
        <h2 mb1>{{ usecase.technology }}</h2>
        <p mb2 class="text-center product-desc description">{{ usecase.paragraphe }}</p>
      </Container>
      <Container mb3>
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
    </section>
    <section id="usecase-description" class="inner-background" mb3>
      <Container>
        <div flex row space-between align-center mobile-column-reverse wrap>
          <div half>
            <Card p2 flex column space-between>
              <h3 mb1>Benefits</h3>
              <ul mb1>
                <li v-for="(benefit, i) in usecase.benefits" :key="i" mb1>{{ benefit }}</li>
              </ul>
              <h3 mb1>Opportunities</h3>
              <ul mb1>
                <li
                  v-for="(opportunitie, i) in usecase.opportunities"
                  :key="i"
                  mb1
                  class="opportunitie"
                >{{ opportunitie }}</li>
              </ul>
            </Card>
          </div>
          <div half>
            <Video v-if="usecase.video" :src="usecase.video"></Video>
            <img v-else :src="usecase.picture" />
          </div>
        </div>
      </Container>
    </section>

    <section v-if="usecase.companies" id="who">
      <Container flex column align-center mb3>
        <h3 class="text-center" mb2>Who could benefit from this?</h3>
        <ul flex row mobile-column class="companies">
          <li v-for="(company, i) in usecase.companies" :key="i">
            <a :href="company.to" class="link-secondary" target="_blank">
              <img :src="company.src" class="company" />
            </a>
          </li>
        </ul>
      </Container>
    </section>

    <section id="information">
      <Container flex column align-center mb3>
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
        <hr class="separator" mb3 />
        <h2 mb2>More use cases</h2>
      </Container>
    </section>
    <section class="usecase" id="next">
      <Container>
        <div flex row wrap>
          <nuxt-link
            v-for="usecase in nextUsecases"
            :key="usecase.id"
            :to="usecase.to"
            :id="usecase.id"
            third
            fill-height
            mb2
          >
            <Card p1 bordered>
              <div mb2 flex row space-between class="logos">
                <img v-for="(logo, i) in usecase.logos" :key="i" :src="logo" />
              </div>
              <p class="category" mb1>{{ usecase.category}}</p>
              <h4 mb1>{{ usecase.title }}</h4>
              <p mb1>{{ usecase.description}}</p>
              <i class="fa fa-arrow-right"></i>
            </Card>
          </nuxt-link>
        </div>
      </Container>
    </section>

    <CallToAction
      mb3
      title="Integrate complexities with confidence"
      description="Receive priority technical support from a team of engineers dedicated to your project, day or night."
      :links="[{ title: 'Enterprise solutions' , to: links.enterprise }]"
    />

    <Discover mb3 left="engine" right="marketplace" />

    <GetStarted mb3 />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import Container from "~/components/Container";
import Video from "~/components/Video";
import Button from "~/components/Button";
import Card from "~/components/Card";
import CallToAction from "~/components/CallToAction";
import Discover from "~/components/Discover";
import GetStarted from "~/components/GetStarted";
import page from "../page";

export default {
  components: {
    Header,
    Container,
    Video,
    Button,
    Card,
    CallToAction,
    Discover,
    GetStarted
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
