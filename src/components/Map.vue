<template>
  <div id="map">
    <l-map
       style="height: 100%; width: 100%"
       :zoom="zoom"
       :center="center"
       maxZoom="6"
     >
     <l-tile-layer :url="url" :options="{noWrap: true}"/>
     <l-marker :lat-lng="markerLatLng" />
   </l-map>
 </div>
</template>

<script>
  import {L, LMap, LTileLayer, LMarker } from 'vue2-leaflet';
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
    LMarker
  },
  data () {
    return {
      url: '/map/mapTiles/{z}/{x}{y}.jpg',
      zoom: 3,
      center: [0,0],
      markerLatLng: [0,0]
    };
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
