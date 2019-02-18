<template>
    <div id="map">
      <select v-model="selected">
        <option v-for="(season, index) in seasons" v-bind:value="index" v-bind:key="season">
          Season {{ index + 1}}
        </option>
      </select>
     <div v-for="(season, index) in seasons" v-bind:value="index" v-bind:key="season">
         <img v-show="selected == index" v-bind:src="seasons[index]"/>
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
</style>
