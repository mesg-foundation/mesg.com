<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex column justify-center align-center>
        <h2>MESG documents</h2>
        <div class="separator-orange"></div>
      </div>
      <div class="container-child" flex row justify-center spacebetween>
        <nav flex row justify-center align-center>
          <a 
            href="/documents/decentralized-network-of-services.pdf" download="Decentralized Network of Services"
            target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/Decentralized-Network-of-Services.jpg" alt="MESG - Whitepaper"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Whitepaper</h3>
            </div>
          </a>
          <a 
            href="/documents/MESG-application-of-the-decentralized-network-of-services.pdf" download="MESG's Application of the Decentralized Network of Services" 
            target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/MESG-Application-of-the-Decentralized-Network-of-Services.jpg" alt="MESG - Technical Implementation"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Technical Implementation</h3>
            </div>
          </a>
          <a 
            href="/documents/MESG-2-pager.pdf" download="MESG 2 pager" 
            target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/MESG-2pager-1.jpg" alt="MESG - Two pager"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Two pager</h3>
            </div>
          </a>
          <a 
            href="/documents/MESG-business-plan-summary.pdf" download="MESG Business Plan Summary" 
            target="blank" class="card" flex column justify-center align-center>
            <div class="picture" flex column justify-center align-center>
              <img src="~/assets/documents/MESG-Business-Plan-Summary.jpg" alt="MESG - Business Plan"/>
            </div>
            <div class="title" flex column justify-center align-center>
              <h3>Business Plan</h3>
            </div>
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>


<style scoped>

.container-parent {
  padding-bottom:0;
}
.container-child {
  padding-bottom:0;
}

h2 {
  text-align: center;
}

h3 {
  text-align:center;
  margin-bottom:0;
  text-decoration: none;
}

img {
  width: 50%;
  max-width: 145px;
  margin-bottom:1.5em;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.07);
}

.picture {
  width: 100%;
  height: 60%;
  border-top-left-radius:0.3em;
  border-top-right-radius:0.3em;
  padding:0;
  background-color: #491e8c;
  background-color: var(--purple);
}

.title {
  position: relative;
  height: 40%;
  padding:1.2em;
  background-color: #ffffff;
  background-color: var(--white-content);
}

.card {
  text-decoration: none;
  width: 300px;
  height: 300px;
  border-radius:0.3em;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07);
  margin:1.2em;
}
.card:hover {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.07);
  cursor: pointer;
}

.card:hover .picture {
  transition: calc(var(--animation-speed) * 0.1s) ease;
  border-bottom: solid 16px #9452ff;
  background-color: #5D28B2;
  background-color: var(--lighter-purple-hover);
}

@media only screen and (max-width: 1024px) {
  .card {
    margin: 2.4em;
  }
  img {
    margin-bottom:1.4em;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
@media only screen and (max-width: 414px) {
  .card {
    margin: 1.8em;
  }
  img {
    width: 55%;
  }
}


</style>
