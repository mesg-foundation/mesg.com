<template>
  <section>
    <div class="container-parent" flex row column-reverse-responsive justify-center align-center>
      <div class="container-content" half flex column justify-center align-center>
          <h2>Start to build now</h2>
          <p mb2>
            MESG is community-driven. Take the reigns: building is in your hands.<br>
            To get started, open your terminal and run:
          </p>
          <nav flex justify-center align-center>
            <Button href="https://docs.mesg.com/" target="_blank" primary><i class="fas fa-code"></i> Developers</Button>
          </nav>
        </div>
        <div class="fond-1" half flex column justify-center align-center>
        </div>
      </div>
    <div class="container-parent" flex row justify-center align-center>
      <div class="fond-2" half flex column justify-center align-center>
      </div>
      <div class="container-content" half flex column justify-center align-center>
          <h2>Start optimizing today</h2>
          <p mb2>
            Find out how you can start automating, streamlining and expanding your business today with MESG.
          </p>
          <nav flex>
            <Button href="https://goo.gl/forms/ifXyNfaQn8VC7pfu1" target="_blank" primary><i class="fas fa-chart-line"></i> Business</Button>
          </nav>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

p {
  text-align: center;
}

i {
  margin-right: 0.3em;
}

.fond-1 {
  background-image:linear-gradient(296deg, rgba(148, 82, 255, 0.75) 0%, rgba(191, 155, 249, 0.75) 100%), url("~/assets/moon.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  height: 350px;
  max-height: 100%;
  width: 50%;
  max-width: 720px;
  padding:0;
}
.fond-2 {
  background-image: linear-gradient(296deg, rgba(191, 155, 249, 0.75) 0%, rgba(148, 82, 255, 0.75) 100%), url("~/assets/building.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  height: 350px;
  max-height: 100%;
  width: 50%;
  max-width: 720px;
  padding:0;
}
.container-content {
  padding: 2.4em;
  width: 50%;
  height: 350px;
  max-height: 100%;
  max-width: 720px;
  background-color: #ffffff;
  background-color: var(--white-content);
}
.container-parent {
  padding:0;
  height: 100%;
  background-color: #57577e;
  background-color: var(--dark-grey);
}


@media only screen and (max-width: 768px) {
  .fond-1 {
    width:100%;
    max-width: 768px;
    height: 280px;
  }
  .fond-2 {
    width: 100%;
    max-width: 768px;
    height: 280px;
  }
  .container-content {
    width: 100%;
    max-width: 768px;
  }
}
@media only screen and (max-width: 414px) {
  .fond-1 {
    height: 200px;
  }
  .fond-2 {
    height: 200px;
  }
  .container-content {
    padding: 1.8em;
  }
}
</style>
