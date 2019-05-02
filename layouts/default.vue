<template>
  <div>
    <style>
  :root {
    --dark-purple: #251440;
    --purple: #491e8c;
    --lighter-purple: #9452ff;
    --lighter-purple-hover: #854ae5;
    --Orange-cta: #ffa744;
    --Orange-cta-hover: #e5963d;
    --dark-grey: #57577e;
    --lighter-grey: #d6d0e7;
    --pale-white: #fafafe;
    --white: #ffffff;
    --title-color: #0e061c;
    --text-color: #3c3940;
  }
    </style>
    <Menu class="menu-bar"/>
    <nuxt/>
  </div>
</template>

<script>
import Menu from "~/components/Menu";
export default {
  components: {
    Menu
  }
};
</script>

<style>
/* Reset */
html {
  font-size: 1em;
  word-spacing: 0.1em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

<style>
/* Text styles */
h1,
h2,
h3,
h4,
h5,
a,
p,
ul,
li,
button,
label,
input,
textarea {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
}
h1 {
  font-size: 38px;
  font-weight: bold;
  color: var(--title-color);
}
h2 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: var(--title-color);
}
h3 {
  font-size: 26px;
  font-weight: 600;
  color: var(--title-color);
}
h4 {
  font-size: 20px;
  font-weight: 600;
  color: var(--title-color);
}
p {
  font-size: 17px;
  color: var(--text-color);
}
li {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-color);
}
</style>

<style>
/* Structure */
[flex] {
  display: flex;
}
[flex] > * {
  flex: 1;
}
[row] {
  flex-direction: row;
  flex-wrap: wrap;
}
[column] {
  flex-direction: column;
}
[justify-center] {
  justify-content: center;
}
[align-center] {
  align-items: center;
}
[align-left] {
  align-items: left;
}
[align-right] {
  align-items: right;
}
[space-between] {
  justify-content: space-between;
}
[space-around] {
  justify-content: space-around;
}

[half] {
  width: 50%;
}
[mt1] {
  margin-top: 20px !important;
}
[mt2] {
  margin-top: 40px !important;
}
[mb1] {
  margin-bottom: 20px !important;
}
[mb2] {
  margin-bottom: 40px !important;
}
[mr1] {
  margin-right: 20px !important;
}
[mr2] {
  margin-right: 40px !important;
}
[ml1] {
  margin-left: 20px !important;
}
[ml2] {
  margin-left: 40px !important;
}
[p1] {
  padding: 20px !important;
}
[p2] {
  padding: 40px !important;
}
</style>

<style>
.text-center {
  text-align: center;
}
</style>
