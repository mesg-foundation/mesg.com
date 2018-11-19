<template>
  <section>
    <div class="container-parent" flex row space-between justify-center align-center>
      <div class="container-child-title" flex justify-center align-center>
          <h2>Our Amazing partners</h2>
      </div>
      <div class="container-child" flex row justify-center align-center>
        <div class="content" half flex row justify-center align-center>
            <div class="partners-logo" flex row justify-center>
              <img src="~/assets/Partners/Yellow-LOGO.png" alt="Yellow">
            </div>
            <div class="partners-desc" flex row justify-center>
              <p>
                Incubated by <a class="link" href="http://yellow.com/" target="_blank">Yellow.com</a>, a premier blockchain incubator and fund with a track record of success.
              </p>
            </div>
          </div>
        <div class="separator">
        </div>
        <div class="content" half flex row justify-center align-center>
          <div class="partners-logo" flex row justify-center>
            <img src="~/assets/Partners/GSR-1.png" alt="GSR">
          </div>
          <div class="partners-desc" flex row justify-center>
              <p>
                In collaboration with <a class="link" href="http://www.gsr.io/" target="_blank">GSR.io</a>, one of the largest cryptocurrency market makers.
              </p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 0;
}
p {
  padding-left:1.8em;
}

.separator {
  width: 0.5px;
  height:60px;
  max-height: 100%;
  margin-left: 1.8em;
  margin-right: 1.8em;
  border-right: 0.5px #d6d0e7 dotted;
}

.partners-logo {
  width: 20%;
}
img {
  width: 100%;
  height: 100%;
}
.partners-desc {
  width: 80%;
}

.white {
  border-top: solid 0.025em #d6d0e7;
  border-top: solid 0.025em var(--lighter-grey);
  box-shadow: none;
}


@media only screen and (max-width: 768px) {
  .partners {
    width: 20%;
    text-align: center;
  }
  .separator {
    width: 100%;
    height: 0.5px;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
    margin-left: 0;
    margin-right: 0;
    border-top: 0.5px #d6d0e7 dotted;
  }
}
@media only screen and (max-width: 414px) {
  .partners-logo {
    width: 40%;
    padding-bottom: 1.2em;
  }
  .partners-desc {
    width: 100%;
    max-width: 414px;
  }
  p {
    text-align:center;
    padding-left:0;
  }
}
</style>
