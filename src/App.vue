<template>
  <div id="app">
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <a href="/map" class="menu-item-link">Map</a>
        </li>
        <li class="menu-item">
          <a href="/seasons" class="menu-item-link">Past Seasons</a>
        </li>
        <li class="menu-item">
          <a class="donate" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=52U22VZKEQGCN&currency_code=USD&source=url">Donate</a>
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
nav {
width:25%;
right:0;
display:block;
position:fixed;
z-index:999;
background:#2a2a2a;
color:white;
}
nav li {
list-style:none;
display:inline-block;
margin-left:10px;
}
nav a {
color:white;

}
</style>
