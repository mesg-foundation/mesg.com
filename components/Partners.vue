<template>
  <ul flex row wrap>
    <li>
      <img mr2 src="~/assets/partners/omisego.svg" alt="omisego" />
    </li>
    <li>
      <img mr2 src="~/assets/partners/beachhead.svg" alt="beachhead" />
    </li>
    <li>
      <img src="~/assets/partners/yellow.svg" alt="yellow" />
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
