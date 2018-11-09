<template>
  <section>
    <div class="container-parent" flex row space-between justify-center align-center>
      <div class="container-child" flex justify-center align-center>
          <h2>Our Amazing partners</h2>
      </div>
      <div class="container-child" flex row justify-center align-center>
        <div class="content" half flex row justify-center align-center>
            <div flex column justify-center align-center>
              <img src="~/assets/Partners/Yellow-LOGO.png" alt="Yellow">
            </div>
            <div class="content-partners" flex column justify-center align-center>
              <p>
                Incubated by <a class="link" href="http://yellow.com/" target="_blank">Yellow.com</a>, a premier blockchain incubator and fund with a track record of success.
              </p>
            </div>
          </div>
        <div class="separator" flex justify-center align-center>
        </div>
        <div half flex row justify-center align-center>
            <div flex column justify-center align-center>
              <img src="~/assets/Partners/GSR-1.png" alt="GSR">
            </div>
            <div class="content-partners" flex column justify-center align-center>
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
img {
  padding:2.4em;
}

.separator {
  width: 0.05em;
  height:80px;
  border: solid 0.025em #d6d0e7;
  border: solid 0.025em var(--lighter-grey);
  margin:1.2em;
}
.content-partners {
  width: 50%;
  max-width: 600px;
}
.container-child {
  padding: 1.2em;
}

.white {
  border-top: solid 0.025em #d6d0e7;
  border-top: solid 0.025em var(--lighter-grey);
  box-shadow: none;
}

@media only screen and (max-width: 1024px) {
  .separator {
    width: 100%;
    height:0.05em;
    border: solid 0.025em #d6d0e7;
    border: solid 0.025em var(--lighter-grey);
    margin:0;
  }
  .content {
    padding-bottom: 1.8em;
  }
}
@media only screen and (max-width: 768px) {
  .content-partners {
    width: 100%;
  }
}
@media only screen and (max-width: 414px) {
  img {
    padding:1.8em;
  }
}
</style>
