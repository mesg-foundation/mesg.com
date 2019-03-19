<template>
  <section>
    <div class="container-parent" flex row column-reverse-responsive justify-center align-center>
      <div class="container-content" half flex column justify-center align-center>
          <h2>Start building now</h2>
          <p mb05>
            MESG is community-driven. Take the reigns: building is in your hands.
          </p>
          <p mb05>
            <strong>To get started, open your terminal and run:</strong>
          </p>
            <code flex column justify-center align-center mb2>
              bash &lt;(curl -fsSL https://mesg.com/install)
            </code>
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
  background-image: linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~assets/Build.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  overflow:hidden;
  height: 350px;
  max-height: 100%;
  width: 50%;
  max-width: 720px;
  padding:0;
}
.fond-2 {
  background-image: linear-gradient(155deg, rgba(73, 30, 140, 0.9) 0%, rgba(73, 30, 140, 0.9) 100%), url("~assets/Business.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  height: 350px;
  max-height: 100%;
  width: 50%;
  max-width: 720px;
  padding:0;
}

code {
  text-align:center;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1em;
  color: #57577e;
  color:var(--dark-grey);
  border: 1px solid #d6d0e7;
  background-color: #fafafe;
  background-color: var(--pale-white);
  border-radius: 0.5em;
  padding:1.2em;
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
  background-color: #ffffff;
  background-color: var(--white-content);
}


@media only screen and (max-width: 768px) {
  .fond-1 {
    width:100%;
    max-width: 768px;
    height: 280px;
    transform: none;
  }
  .image-1 {
    transform:none;
    width: 100%;
    height: 100%;
  }
  .fond-2 {
    width: 100%;
    max-width: 768px;
    height: 280px;
    transform:none;
  }
  .image-2 {
    transform: none;
    width: 100%;
    height: 100%;
  }
  .container-content {
    padding: 4.8em;
    width: 100%;
    max-width: 768px;
    height: auto;
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
    height: auto;
  }
  code {
    font-size: 0.8em;
  }
}
</style>
