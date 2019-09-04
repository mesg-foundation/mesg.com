<template>
  <ul flex row wrap>
    <li>
      <a href="https://omisego.co/" target="_blank" class="link-secondary">
        <img mr2 src="~/assets/partners/omisego.svg" alt="omisego" />
      </a>
    </li>
    <li>
      <a href="https://beachhead.com/" target="_blank" class="link-secondary">
        <img mr2 src="~/assets/partners/beachhead.svg" alt="beachhead" />
      </a>
    </li>
    <li>
      <a href="https://yellow.com/" target="_blank" class="link-secondary">
        <img src="~/assets/partners/yellow.svg" alt="yellow" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
img {
  height: 40px;
  width: auto;
}
ul {
  list-style: none;
  text-indent: 0;
}
li {
  text-align: center;
}
@media only screen and (max-width: $mobile-breakpoint) {
  img,
  li {
    margin-right: 0 !important;
  }
  li {
    padding: 10px;
  }
}
</style>
