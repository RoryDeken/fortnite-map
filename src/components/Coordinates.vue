<template>
  <div id="map">
    <l-map
       id="mapContainer"
       :zoom="zoom"
       :center="center"
       :maxZoom="maxZoom"
       @click="clickHandler($event)"
       :options="mapOptions"
     >
     <l-tile-layer :url="url" :options="{noWrap: true}" />
   </l-map>
 </div>
</template>

<script>
  import {L, LMap, LTileLayer } from 'vue2-leaflet'
  import 'leaflet/dist/leaflet.css'
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
  export default {
  components: {
    LMap,
    LTileLayer,
  },
  methods: {
    clickHandler: function(e){
    // eslint-disable-next-line
      alert(e.latlng)
    }
  },
  data () {
    return {
      url: '/map/mapTiles/{z}/{x}{y}.jpg',
      zoom: 3,
      maxZoom:6,
      center: [0,0],
      mapOptions: {},
      markers: [],
      currentSeason: 7,
      weeks: {}
    };
  }
}
</script>
<style scoped>
#map {
height:100%;
width:100%;
display:flex;
justify-content:center;
flex-wrap:nowrap;

}
#map #mapContainer {
flex-basis:100%;
cursor:crosshair;
}
</style>
