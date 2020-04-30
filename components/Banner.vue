<template>
  <a href="https://mesg-ecosystem.devpost.com/" target="_blank">
    <div class="banner" flex row justify-center align-center>
      <div class="banner-content" flex row justify-center align-center>
        <p>Join us online for the MESG Ecosystem Hackathon running from March 1st to April 26th on Devpost. Win up to $9,000 in prizes!</p>
        <i class="fal fa-external-link-alt"></i>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables";

a {
  text-decoration: none;
  transition: 2s ease-in;
  &:hover {
    .banner {
      background: linear-gradient(
        to right,
        scale-color($blue, $lightness: -10%),
        scale-color($green, $lightness: -10%)
      );
    }
  }
  .banner {
    padding: 16px 60px;
    width: 100%;
    transition: 2s ease-in;
    background: linear-gradient(to right, $blue, $green);
    .banner-content {
      max-width: auto;
    }
    p {
      width: auto;
      text-align: center;
      margin-right: 0;
      color: $white;
      font-size: 15px;
      font-weight: bold;
    }
    .fa-external-link-alt {
      position: absolute;
      top: 20px;
      right: 20px;
      color: $white;
      max-width: 17px;
      margin-left: calc(#{$margin} / 2);
    }
  }
}
</style>