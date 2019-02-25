<template>
    <div id="map">
    <select v-model="selected">
      <option v-for="(season, index) in seasons" v-bind:value="index" v-bind:key="season">
        Season {{ index + 1}}
      </option>
    </select>
    <div  class="past-seasons-container">
      <span v-for="(season, index) in seasons" v-bind:value="index" v-bind:key="season">
        <img v-show="selected == index" v-bind:src="seasons[index]" :alt="'Fortnite map  during season ' + (index + 1)"/>
        </span>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        seasons: [
          '/map/seasons/small/szn1.jpg',
          '/map/seasons/small/szn2.jpg',
          '/map/seasons/small/szn3.jpg',
          '/map/seasons/small/szn4.jpg',
          '/map/seasons/small/szn5.jpg',
          '/map/seasons/small/szn6.jpg',
          '/map/seasons/small/szn7.jpg',
        ],
        selected: 6
        }
    }
  }
</script>
<style scoped>
#map {
display:flex;
align-items:flex-start;
align-content:flex-start;
flex-wrap:wrap;
justify-content:center;
}
#map select {
margin:50px auto;
border:none;
border-radius:0;
font-size:24px;
cursor:pointer;
}
#map div {
display:flex;
flex:1 100%;
flex-wrap:wrap;
justify-content:center;
align-items:flex-start;
align-content:space-around;
}


</style>
