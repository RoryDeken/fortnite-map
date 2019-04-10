<template>
  <div id="app">
  <header>
        <h1><a href="/">Fortnite Interactive Challenges Map</a></h1>
        <ul class="social">
            <li>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//fortnite-map.net/" target="_blank" title="Share on Facebook">
                <img src="/assets/icons/facebook.png" class="icon"/>
                <span class="fade-text">Share on Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/home?status=Check%20out%20this%20interactive%20map%20of%20the%20weekly%20challenges%20on%20%40FortniteGame.%20%23fortnitemap%20%23fortnite%20%23season8%20https%3A//fortnite-map.net/" target="_blank" title="Share on Twitter">
                <img src="/assets/icons/twitter.png" class="icon" />
                <span class="fade-text">Share on Twitter</span>
              </a>
            </li>
        </ul>
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/" class="menu-item-link">Map</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/seasons" class="menu-item-link">Past Seasons</router-link>
        </li>
        <li class="menu-item">
          <a class="donate" href="https://twitter.com/thesquatingdog" target="_blank">Challenge locations by @thesquatingdog</a>
        </li>
      </ul>
    </nav>
    </header>
    <span class="sr-only">Use this interactive fortnite map to find all of the weekly challenges easily and without having to search through blog posts.</span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body, #app {
  height:100vh;
  width:100vw;
  padding:0;
  margin:0;
  background:#333;
}
#app {
display:flex;
flex-wrap:wrap;
justify-content:center;
background:#333;
}
header {
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
}
.social {
padding-left:0;
display:flex;
flex-basis:100%;
justify-content:center;
}
.social li:last-child {
margin-left:15px;
}
.social li a .fade-text {
position:absolute;
left:-300%;
}
.social li img.icon {
.width:32px;height:auto;max-width:100%;
}
h1, h1 a {
font-family:FortniteMap,Arial,sans;
}
h2,h3 {
font-family:FortniteMapRegular,Arial,sans;
}
h4,h5,h6,p,a,span {
font-family:FortniteMapSmall,Arial,sans;
}

h1 {
font-size:3.5em;
color:#FFF;
text-align:center;
margin-bottom:0;
}
h1 a {
color:#FFF;
text-decoration:none;
}
.social li {
list-style:none;
}
.social li a {
text-decoration:none;
}
.social li a .fade-text {
color:white;
display:inline;
opacity:0;
}


nav {
display:flex;
justify-content:center;
flex-basis:100%;
min-height:50px;
align-items:center;
background:#333;

}
nav ul {
display:flex;
flex-basis:50%;
padding-left:0;
margin:0;
justify-content:space-evenly;
flex:1;
}
nav ul li {
    list-style: none;
    flex-basis: 33%;
    justify-content: center;
    display: flex;
}
nav ul li a {
color:#CCC;
text-decoration:none;
font-size:1.5em;
}

nav ul li a:hover, nav ul li a:focus, nav ul li a.router-link-active {
color:#FFF;
}
.sr-only {
position:absolute;
left:-300%;
}
@media(max-width:1024px){
h1 {
font-size: 2em;
margin: 0.2em auto;
padding: 0.5em 5em;
}
nav {
min-height:25px;
}

nav ul li {
font-size:0.5em;
}
.social li img.icon {
 width:auto;
 height:1.5em;
}
}
@media(max-width:768px){
.social {
position: fixed;
    right: 25px;
    top: 0.5em;
    display:block;
}
.social li:last-child {
    margin-left: 0;
}
}
</style>
