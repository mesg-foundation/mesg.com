<template>
  <div class="light">
    <section>
      <div class="container">
        <div class="groups">
          <div class="group">
            <h4>Businesses</h4>
            <ul>
              <li v-for="b in businesses" :key="b.id" 
                @mouseup="selectBusiness(b)"
                :class="{selected: b.selected}">
                {{ b.name }}
              </li>
            </ul>
          </div>
          <div class="group">
            <h4>Features</h4>
            <ul>
              <li v-for="f in features" :key="f.id" 
                @mouseup="selectFeature(f)"
                :class="{selected: f.selected}">
                {{ f.name }}
              </li>
            </ul>
          </div>
          <div class="group">
            <h4>Technologies</h4>
            <ul>
              <li v-for="t in technologies" :key="t.id" :class="{selected: t.selected}">
                {{ t.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const find = (id, obj) => obj.filter(x => x.id === id)[0]
export default {
  data () {
    return {
      technologyFilter: [],
      businessFilter: [],
      featureFilter: [],
    }
  },
  computed: {
    connections() {
      return require("~/assets/connections.json")
    },
    businesses() {
      return this.connections.businesses
        .map(x => ({
          ...x,
          selected: this.businessFilter.indexOf(x.id) >= 0
        }))
    },
    technologies() {
      return this.connections.technologies
        .map(x => ({
          ...x,
          selected: this.technologyFilter.indexOf(x.id) >= 0
        }))
    },
    features() {
      return this.connections.features
        .map(x => ({
          ...x,
          selected: this.featureFilter.indexOf(x.id) >= 0
        }))
    }
  },
  methods: {
    selectFeature(f) {
      this.featureFilter = [f.id]
      this.businessFilter = f.businesses
      this.technologyFilter = f.technologies
    },
    selectBusiness(b) {
      this.businessFilter = [b.id]
      this.featureFilter = this.features.filter(x => x.businesses.indexOf(b.id) >= 0).map(x => x.id)
      this.technologyFilter = this.features.filter(x => this.featureFilter.indexOf(x.id) >= 0).reduce((prev, next) => [
        ...prev,
        ...next.technologies
      ], []).filter((x, i, self) => self.indexOf(x) === i)
    }
  }
}
</script>

<style scoped>
.groups {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 3em 0;
}

.group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid 1px; 
  border-left: none;
}

.group:first-child {
  border-left: solid 1px;
}

ul {
  height: 400px;
  min-width: 200px;
  overflow: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: solid 1px;
}

li {
  cursor: pointer;
  padding: .5em 1em;
  width: 100%;
}

li:hover {
  background: rgb(0,0,0,.1);
}

li.selected {
  background: rgb(0,0,0,.1);
  color: black;
}
</style>
