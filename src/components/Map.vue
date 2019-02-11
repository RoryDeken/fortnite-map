<template>
  <div id="map">
    <div class="controls-wrapper">
    <h2>Season {{ currentSeason }} Challenges</h2>
    <section class="challenges" v-for="week in weeks">
      <div class="week" v-bind:class="{active:week.active }">
      <h3>{{ week.weekNumber}} </h3>
      <span v-for="challenge in week.challenges">
          {{challenge.name}}
      </span>
      </div>
    </section>
    <div class="controls">
      <button v-on:click="addMarker">Add Marker</button>
      </div>
    </div>
    <l-map
       id="mapContainer"
       :zoom="zoom"
       :center="center"
       :maxZoom="maxZoom"
       @click="clickHandler($event)"
       :options="mapOptions"
     >
     <l-tile-layer :url="url" :options="{noWrap: true}" />
      <div v-for="marker in markers" v-bind:key="marker.id">
       <l-marker :lat-lng="marker.latLng" :draggable="marker.draggable" />
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
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    clickHandler: function(e){
    // eslint-disable-next-line
      console.log(e.latlng)
    },
    addMarker: function(){
      console.log('added');
      this.markers.push({
    "id":3,
    "type": "treasure",
    "label": "First Marker",
    "hint": "Marker description here",
    "draggable":true,
    "latLng":
      {
        "lat":10,
        "lng":0
      }
  },)
    }
  },
  data () {
    return {
      url: '/map/mapTiles/{z}/{x}{y}.jpg',
      zoom: 2,
      maxZoom:6,
      center: [0,0],
      mapOptions: {},
      markers: [],
      currentSeason: 7,
      weeks: [
        {
        weekNumber: 1,
        active: false,
        challenges:[
          {name: 'challenge',
          location:'location'
          },
          {name: 'challenge 2',
          location:'location 2'
          },
        ]},
        {
        weekNumber: 2,
        active: true,
        challenges:[
          {name: 'challenge',
          location:'location'
          },
          {name: 'challenge 2',
          location:'location 2'
          },
        ]},
      ]
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
<style>
#map {
height:100%;
width:100%;
display:flex;
justify-content:center;
flex-wrap:nowrap;
}
#map #mapContainer {
flex-grow:4;
flex-basis:20%;
}
#map .controls-wrapper {
flex-grow:1;
flex-basis:20%;
display:flex;
align-items:flex-start;
align-content:flex-start;
justify-content:center;
flex-wrap:wrap;
}

#map .controls-wrapper h2,  #map .controls-wrapper .challenges  {
display:flex;
flex-basis:100%;
justify-content:center;
align-items:flex-start;
}
#map .controls-wrapper .challenges {
align-content:flex-start;
}
#map .controls-wrapper .challenges .week{
display:flex;
flex-basis:50%;
justify-content:center;
align-content:space-around;
flex-wrap:wrap;
}
#map .controls-wrapper .challenges .week h3, #map .controls-wrapper .challenges .week span {
display:flex;
flex:1 100%;
justify-content:center;
}
#map .controls {
flex: 1 100%;
justify-content:center;
display:flex;
align-items:flex-start;
}
</style>
