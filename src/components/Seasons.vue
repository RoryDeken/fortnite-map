<template>
<div id="map">
  <select v-model="selected">
    <option v-for="(season, index) in seasons" v-bind:value="index" v-bind:key="season">
      Season {{ index + 1}}
    </option>
  </select>
  <div class="past-seasons-container">
    <span v-for="(season, index) in seasons" v-bind:value="index" v-bind:key="season">
      <img v-show="selected == index" v-bind:src="seasons[index]" :alt="'Fortnite map  during season ' + (index + 1)" />
    </span>
  </div>


</div>
</template>
<script>
export default {
  data() {
    return {
      seasons: [
        '/assets/map/seasons/small/szn1.jpg',
        '/assets/map/seasons/small/szn2.jpg',
        '/assets/map/seasons/small/szn3.jpg',
        '/assets/map/seasons/small/szn4.jpg',
        '/assets/map/seasons/small/szn5.jpg',
        '/assets/map/seasons/small/szn6.jpg',
        '/assets/map/seasons/small/szn7.jpg',
        '/assets/map/seasons/small/szn8.jpg',
      ],
      selected: 7
    }
  }
}
</script>
<style scoped>
#map {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 4px solid #CCC;
}

#map select {
  margin: 50px auto;
  border: none;
  border-radius: 0;
  font-size: 24px;
  cursor: pointer;
}

#map div {
  display: flex;
  flex: 1 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: space-around;
}
</style>
