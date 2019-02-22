<template>
  <div id="app">
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

}
#app {
display:flex;
flex-wrap:wrap;
justify-content:center;

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
font-size:14px;
}
nav ul li a:hover, nav ul li a:focus {
color:#FFF;
}
</style>
