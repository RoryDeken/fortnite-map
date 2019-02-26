<template>
  <div id="app">
        <h1><a href="/">Fortnite Interactive Challenges Map</a></h1>
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/" class="menu-item-link">Map</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/seasons" class="menu-item-link">Past Seasons</router-link>
        </li>
        <li class="menu-item">
          <a class="donate" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=52U22VZKEQGCN&currency_code=USD&source=url" target="_blank">Donate</a>
        </li>
      </ul>
    </nav>
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
h1, h1 a, h2,h3,h4,h5,h6 {
font-family:FortniteMap,Arial,sans;
}
p,a,span {
font-family:Arial,sans;
}
#app {
display:flex;
flex-wrap:wrap;
justify-content:center;
background:#333;
}
h1 {
font-size:2.5em;
color:#FFF;
text-align:center;
}
h1 a {
color:#FFF;
text-decoration:none;
}
nav {
display:flex;
justify-content:center;
flex-basis:100%;
min-height:50px;
align-items:center;
background:#2A2A2A;

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
list-style:none;
}
nav ul li a {
color:#CCC;
text-decoration:none;
font-size:1.5em;
}
nav ul li a:hover, nav ul li a:focus {
color:#FFF;
}
.sr-only {
position:absolute;
left:-300%;
}

</style>
