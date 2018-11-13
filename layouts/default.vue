<template>
  <div>
    <style>
    :root {
      --dark-purple: #251440;
      --purple: #491e8c;
      --lighter-purple: #9452ff;
      --lighter-purple-hover: #6F3DBF;
      --Orange-cta: #ffa744;
      --Orange-cta-hover: #ffa744;
      --dark-grey: #57577e;
      --lighter-grey: #d6d0e7;
      --pale-white: #fafafe;
      --white-content: #ffffff;
      --animation-speed: 1;
    }
    </style>
    <Menu/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
export default {
  components: {
    Menu,
    Footer
  }
}
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

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

<style>
/* Text styles */
h1, h2, h3, h4, a, button, label, input, textarea {
  font-family: Quicksand;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
}

.link {
  color: #9452ff;
  color: var(--lighter-purple);
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}

h1 {
  font-size: 2.4em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1.2em;
}

h2 {
  font-size: 2em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
  margin-bottom: 1.2em;
}

h3 {
  font-size: 1.6em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
  margin-bottom: 1.2em;
}
h4 {
  font-size: 1.2em;
  font-weight: bold;
  color: #491e8c;
  color: var(--purple);
}
p {
  font-family: Open Sans;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1em;
  color: #57577e;
  color: var(--dark-grey);
}
@media only screen and (max-width: 768px) {
  h1 { font-size: 2.2em;}
  h2 { font-size: 1.8em;}
  h3 {font-size: 1.4em;}
  p {font-size: 1em;}
}
@media only screen and (max-width: 414px) {
  h1 { font-size: 2em;}
  h2 { font-size: 1.6em;}
  h3 {font-size: 1.2em;}
  p {font-size: 1em;}
}
</style>

<style>
/* Design */
.dark {
  background-image: linear-gradient(135deg, #251440 35%, #491e8c 100%);
  background-image: linear-gradient(135deg, var(--dark-purple) 35%, var(--purple) 100%);
}

.dark h2,
.dark h3 {
  color: #ffffffff;
  color: var(--white-content);
}
.dark p {
  opacity: 0.65;
  color: #ffffffff;
  color: var(--white-content);
}

.white {
  background-color: #fafafe;
  background-color: var(--pale-white);
  box-shadow: 0 0 1.2em 1.2em rgba(0, 0, 0, 0.25);
  position: relative;
}

svg {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>

<style>
/* Structure */
[flex] { display: flex; }
[row] { flex-direction: row; flex-wrap: wrap; }
[column] { flex-direction: column; }
[justify-center] { justify-content: center; }
[align-center] { align-items: center; }
[align-left] { align-items: left; }
[space-between] { justify-content: space-between; }
[space-around] { justify-content: space-around; }

[half] { width: 600px; }
[p0] { padding: 0!important; }
[mt0] { margin-top: 0!important; }
[mt1] { margin-top: 1.2em!important; }
[mb0] { margin-bottom: 0!important; }
[mb05] { margin-bottom: 0.6em!important; }
[mb1] { margin-bottom: 1.2em!important; }
[mb2] { margin-bottom: 2.4em!important; }
[mb3] { margin-bottom: 4.8em!important; }
[mr05] { margin-right: 0.6em!important; }
[mr1] { margin-right: 1.2em!important; }
[mr2] { margin-right: 2.4em!important; }


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
  [half] { width: calc(50% - 2.4em); }
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
  [half] { width: 100%; }
  [mb1] { margin-bottom: 0.6em!important; }
  [mr1] { margin-right: 0.6em!important; }
  [mr2] { margin-right: 1.2em!important; }
  [hide-responsive] { display: none; }
  [row-reverse-responsive] { flex-direction: row-reverse; }
  [column-reverse-responsive] { flex-direction: column-reverse; }
  [column] > svg { width: 80%; max-width: 80%; object-fit: contain; margin-top: 4.8em;}
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
    margin-bottom:0.6em;
  }
  [mb2] { margin-bottom: 1.2em!important; }
  [column] > svg { width: 100%; max-width: 100%; object-fit: contain; margin-top: 2.4em;}
  [hide-mobile] { display: none; }
}
</style>
