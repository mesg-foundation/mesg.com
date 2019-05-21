<template>
  <ul flex row wrap>
    <li>
      <img mr2 src="~/assets/partners/yuser.png" alt="yuser">
    </li>
    <li>
      <img mr2 src="~/assets/partners/beachhead.png" alt="beachhead">
    </li>
    <li>
      <img src="~/assets/partners/yellow.png" alt="yellow">
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
  img {
    margin-right: 0 !important;
  }
}
</style>
