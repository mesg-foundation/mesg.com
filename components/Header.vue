<template>
  <header class="container">
    <h1>Technology-Interoperable DApps</h1>
    <p>
      MESG is an open-source decentralized infrastructure that makes all technologies, including blockchains, interoperable.
    </p>
    <p class="extra">
      It’s a building platform for developers.
    </p>
    <nav>
      <a href="https://docs.mesg.tech" target="_blank" class="button button--success">Documentation</a>
      <a href="https://github.com/mesg-foundation/core" target="_blank" class="button">
      <svg stroke="none" fill="#000" viewBox="2 -2 30 29">
        <path d="M2.5,12.9c0,6.4,4.2,11.8,9.9,13.7c0.7,0.1,1-0.3,1-0.7c0-0.3,0-1.3,0-2.5c-4,0.9-4.9-1.9-4.9-1.9
          c-0.7-1.7-1.6-2.1-1.6-2.1C5.6,18.5,7,18.5,7,18.5C8.4,18.6,9.2,20,9.2,20c1.3,2.2,3.4,1.6,4.2,1.2c0.1-0.9,0.5-1.6,0.9-1.9
          c-3.2-0.4-6.6-1.6-6.6-7.1c0-1.6,0.6-2.9,1.5-3.9C9.1,7.9,8.6,6.4,9.4,4.4c0,0,1.2-0.4,4,1.5c1.2-0.3,2.4-0.5,3.6-0.5
          c1.2,0,2.5,0.2,3.6,0.5c2.8-1.9,4-1.5,4-1.5c0.8,2,0.3,3.5,0.1,3.8c0.9,1,1.5,2.3,1.5,3.9c0,5.5-3.4,6.8-6.6,7.1
          c0.5,0.4,1,1.3,1,2.7c0,1.9,0,3.5,0,4c0,0.4,0.3,0.8,1,0.7c5.8-1.9,9.9-7.3,9.9-13.7c0-8-6.5-14.4-14.5-14.4C9-1.6,2.5,4.9,2.5,12.9
          z"></path>
        </svg>
        GitHub
        
      </a>
    </nav>
    <code></code>
  </header>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
  header {
    margin-top: 120px;
    margin-bottom: 75px;
    text-align: center;
  }
  h1 {
    font-size: 40px;
  }
  p {
    max-width: 800px;
    font-size: 1.25em;
    margin: auto;
    margin-bottom: 80px;
  }
  .extra {
    font-weight: bold;
  }
  a {
    font-weight: bold;
    letter-spacing: 2.5px;
    color: black;
    background: white;
    margin: 15px;
  }
  svg {
    height: .9em;
    transform: scale(1.5) translateY(1px);
    margin-right: .5em;
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    header {
      margin-top: 0;
    }
    a {
      display: block;
    }
    .extra {
      display: none;
    }
  }
</style>
