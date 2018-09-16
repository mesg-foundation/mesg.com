<template>
  <section>
    <div class="container" flex row space-between column-reverse-mobile>
      <div half justify-center>
        <nav flex row>
          <a href="#" flex column justify-center align-center>
            <img src="~/assets/mesg-icon-developers@3x.png" alt="Developers">
            Developers
          </a>
          <a href="#" flex column justify-center align-center>
            <img src="~/assets/mesg-icon-enterprises@3x.png" alt="Enterprises">
            Enterprises
          </a>
          <a href="#" flex column justify-center align-center mb0>
            <img src="~/assets/mesg-icon-entrepreneurs@3x.png" alt="Entrepreneurs">
            Entrepreneurs
          </a>
          <a href="#" flex column justify-center align-center mb0>
            <img src="~/assets/mesg-icon-incubators@3x.png" alt="Incubators">
            Incubators
          </a>
        </nav>
      </div>
      <div half>
        <h2 mb1>An ultra-efficient solution built for you</h2>
        <p>
          <strong>MESG is fueled by a single vision: to create a building platform powered by automation that is infinitely compatible and massively efficient.</strong>
          <br>
          <br>
          The MESG infrastructure is a combination of best processes that deliver power and efficiency: an open source infrastructure featuring event-driven architecture for building businesses and apps connecting technologies through a decentralized Core.
          <br>
          <br>
          It gives developers and entrepreneurs complete freedom to own their ideas, plus the flexibility to implement them when and how they want to, all while getting rewarded for their participation in the network.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  font-size: 24px;
  text-decoration: none;
  color: #9452ff;
  color: var(--lighter-purple);
  margin-bottom: 60px;
  width: 50%;
}

img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
}
</style>
