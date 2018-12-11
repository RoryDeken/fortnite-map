<template>
  <div id="map">
    <l-map
       :zoom="zoom"
       :center="center"
       :maxZoom="maxZoom"
       @click="clickHandler($event)"
       :options="mapOptions"
     >
     <l-tile-layer :url="url" :options="{noWrap: true}" />
      <div v-for="marker in markers" v-bind:key="marker.id">
       <l-marker :lat-lng="marker.latLng" :draggable="false"/>
     </div>
   </l-map>
 </div>
</template>

<script>
  import {L, LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import ax from 'axios'
  import 'leaflet/dist/leaflet.css'
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
  export default {
  props: {
  markers: []
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    clickHandler: function(e){
    // eslint-disable-next-line
      console.log(e.latlng)
    }
  },
  data () {
    return {
      url: '/map/mapTiles/{z}/{x}{y}.jpg',
      zoom: 2,
      maxZoom:6,
      center: [0,0],
      mapOptions: {}
    };
  },
  mounted () {
    ax
      .get('map/markers/markers.json')
      .then(response => (
        this.markers = response.data
      ))

  }
}
</script>
<style scoped>
#map {
height:100%;
width:100%;
display:block;
}
</style>
