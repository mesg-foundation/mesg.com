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
a,
p,
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
</style>

<style>
/* Structure */
[flex] {
  display: flex;
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
  width: 600px;
}
[third] {
  width: 400px;
}
[thirdtwo] {
  width: 800px;
}
[p0] {
  padding: 0 !important;
}
[mt0] {
  margin-top: 0 !important;
}
[mt05] {
  margin-top: 0.6em !important;
}
[mt1] {
  margin-top: 1.2em !important;
}
[mt2] {
  margin-top: 2.4em !important;
}
[mb0] {
  margin-bottom: 0 !important;
}
[mb05] {
  margin-bottom: 0.6em !important;
}
[mb1] {
  margin-bottom: 1.2em !important;
}
[mb2] {
  margin-bottom: 2.4em !important;
}
[mb3] {
  margin-bottom: 4.8em !important;
}
[mr05] {
  margin-right: 0.6em !important;
}
[mr1] {
  margin-right: 1.2em !important;
}
[mr2] {
  margin-right: 2.4em !important;
}
[ml05] {
  margin-left: 0.6em !important;
}
[ml1] {
  margin-left: 1.2em !important;
}
[ml2] {
  margin-left: 2.4em !important;
}

.container-parent {
  width: 100%;
  padding: 2.4em;
  margin: auto;
}
.container-child {
  width: 100%;
  max-width: 1440px;
  padding: 2.4em;
  margin: auto;
}
.container-child-title {
  width: 100%;
  padding: 2.4em;
}

@media only screen and (max-width: 1440px) {
  .container-parent {
    width: 100%;
    padding: 2.4em;
  }
  .container-child {
    width: 100%;
    padding: 2.4em;
  }
  [half] {
    width: calc(50% - 2.4em);
  }
  [third] {
    width: calc(33% - 2.4em);
  }
  [thirdtwo] {
    width: calc(66% - 2.4em);
  }
}

@media only screen and (max-width: 1024px) {
  [third] {
    width: calc(50% - 2.4em);
  }
  [thirdtwo] {
    width: calc(50% - 2.4em);
  }
}
@media only screen and (max-width: 1023px) {
  [hide-responsive] {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .container-parent {
    width: 100%;
    padding: 2.4em;
  }
  .container-child {
    width: 100%;
    padding: 2.4em;
  }
  [half] {
    width: 100%;
  }
  [third] {
    width: 100%;
  }
  [thirdtwo] {
    width: 100%;
  }
  [mb1] {
    margin-bottom: 0.6em !important;
  }
  [mr1] {
    margin-right: 0.6em !important;
  }
  [mr2] {
    margin-right: 1.2em !important;
  }
  [row-reverse-responsive] {
    flex-direction: row-reverse;
  }
  [column-reverse-responsive] {
    flex-direction: column-reverse;
  }
  [column] > svg {
    width: 75%;
    max-width: 75%;
    object-fit: contain;
    margin-top: 4.8em;
  }
}
@media only screen and (max-width: 414px) {
  .container-parent {
    width: 100%;
    padding: 0;
  }
  .container-child {
    width: 100%;
    padding: 1.8em;
  }
  .container-child-title {
    width: 100%;
    padding: 1.8em;
    padding-bottom: 0;
  }
  h1 {
    margin-bottom: 0.6em;
  }
  [mb2] {
    margin-bottom: 1.2em !important;
  }
  [column] > svg {
    width: 100%;
    max-width: 100%;
    object-fit: contain;
    margin-top: 2.4em;
  }
  [hide-mobile] {
    display: none;
  }
}
</style>
