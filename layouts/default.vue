<template>
  <div>
    <style>
  :root {
    --purple: #491e8c;
    --light-purple: #bdafd6;
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

<style lang="scss">
$margin: 20px;

@function pow($base, $exponent) {
  $result: 1;
  @if $exponent == 0 {
    @return $result;
  }
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

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
@for $i from 1 through 4 {
  $val: $margin * pow(2, $i - 1);
  [m#{$i}] {
    margin: $val !important;
  }
  [mt#{$i}] {
    margin-top: $val !important;
  }
  [mb#{$i}] {
    margin-bottom: $val !important;
  }
  [mr#{$i}] {
    margin-right: $val !important;
  }
  [ml#{$i}] {
    margin-left: $val !important;
  }
  [p#{$i}] {
    padding: $val !important;
  }
  [pt#{$i}] {
    padding-top: $val !important;
  }
  [pb#{$i}] {
    padding-bottom: $val !important;
  }
  [pr#{$i}] {
    padding-right: $val !important;
  }
  [pl#{$i}] {
    padding-left: $val !important;
  }
}
</style>

<style>
.text-center {
  text-align: center;
}
</style>
