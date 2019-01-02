<template>
  <svg version="1.1" id="Line-More" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 53.7 36.8" style="enable-background:new 0 0 53.7 36.8;" xml:space="preserve">

  <g id="learn">
    <text transform="matrix(1 0 0 1 -0.3151 7.5264)" class="st2">Learn More</text>
  </g>
  <g id="arrow-anim">
  	<defs>
  		<rect id="mask-arrow" x="20.2" y="17.3" width="13.4" height="20.3"/>
  	</defs>
  	<clipPath id="mask-arrow-1">
  		<use xlink:href="#mask-arrow"  style="overflow:visible;"/>
  	</clipPath>
    <g id="arrow-1" class="st3">
  	   <g id="Arrow">
  		     <path class="st0" d="M26.9,36.1c-0.3,0-0.5-0.2-0.5-0.5v-15c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v15
  			      C27.4,35.8,27.1,36.1,26.9,36.1z"/>
  		     <polygon class="st0" points="22.8,32.3 23.5,31.6 26.9,35.2 30.2,31.6 30.9,32.3 26.9,36.7 		"/>
  	   </g>
    </g>
  </g>
  <g id="Circle">
    <path id="Circle-line" class="st0" d="M26.9,14.7c1.5,0,2.7,1.2,2.7,2.7S28.3,20,26.9,20c-1.5,0-2.7-1.2-2.7-2.7
  	 S25.4,14.7,26.9,14.7 M26.9,13.7c-2,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7s3.7-1.6,3.7-3.7S28.9,13.7,26.9,13.7L26.9,13.7z"/>
    <path class="st1" d="M26.9,14.7c1.5,0,2.7,1.2,2.7,2.7S28.3,20,26.9,20c-1.5,0-2.7-1.2-2.7-2.7S25.4,14.7,26.9,14.7"/>
  </g>
  </svg>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Quicksand');

.st0{fill:#9452FF;}
.st1{fill:#491E8C;}
.st2 {fill:#FFFFFF;font-family:'OpenSans', sans-serif;font-size:10px;}
.st3{clip-path:url(#mask-arrow-1);}



#Circle {
  opacity: 0;
  animation: show-move calc(var(--animation-speed) * 0.5s) calc(var(--animation-speed) *  1s) forwards 1 ease-out;
}
#Arrow {
  opacity:0;
  animation: show calc(var(--animation-speed) * 0.5s) calc(var(--animation-speed) * 1.8s) forwards 1 linear, show-move2 calc(var(--animation-speed) * 5s) forwards infinite ease-out;
}

#learn {
 opacity:0;
 animation: show-move3 calc(var(--animation-speed) * 0.5s) calc(var(--animation-speed) * 1s) forwards 1 ease-out;
 }

@keyframes show {
  to {
    opacity: 1;
    }
}
@keyframes show-move {
  from {
    opacity: 0;
    transform: translateY(30px);
    }
  to {
    opacity: 1;
    transform: translateY(0px);
    }
}
@keyframes show-move2 {
  25% {
    transform: translateY(-7px);
  }
  50% {
    transform: translateY(0px);
    }
  75% {
    transform: translateY(-7px);
    }
  100% {
    transform: translateY(0px);
    }
}
@keyframes show-move3 {
  from {
    opacity: 0;
    transform: translateY(15px);
    }
  to {
    opacity: 0.65;
    transform: translateY(0px);
    }
 }
</style>
