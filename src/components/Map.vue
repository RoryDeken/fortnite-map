<template>
  <div id="map">
    <div class="controls-wrapper">
    <h2>Season {{ currentSeason }} Challenges</h2>

    <section class="challenges" v-for="week in weeks">
      <div class="week"  v-on:click="week.show = !week.show"  v-bind:class="{active:week.active, show: week.show, locked: !week.active }">
      <p class="lock" v-if="!week.active">&#128274;</p>
      <h3>Week {{ week.weekNumber}} </h3>
        <div v-if="week.show && week.active" class="challenges">
          <span v-for="(challenge, index) in week.challenges" class="challenge" v-on:click.stop>
              <h4>{{challenge.name}}</h4>
              <p>{{challenge.description}}</p>
              <label v-if="challenge.hasLocation" :for="index">Show on map</label>
              <input v-if="challenge.hasLocation" v-on:click="setZoom(1)" type="checkbox" :id="index" v-model="challenge.mapDisplay" >
          </span>
        </div>
      </div>
    </section>
    </div>
    <l-map
       id="mapContainer"
       :zoom="zoom"
       :center="center"
       :maxZoom="maxZoom"
       @click="clickHandler($event)"
       :options="mapOptions"
       ref="map"
     >
     <l-tile-layer :url="url" :options="{noWrap: true}" />
     <div v-for="week in weeks">
         <span v-for="challenge in week.challenges">
           <span v-if="challenge.mapDisplay" v-for="location in challenge.latLngs">
            <l-marker :lat-lng="location.latLng"  >
            <l-tooltip :content="location.hint"/>
            </l-marker>
           </span>
         </span>
      </div>
   </l-map>
 </div>
</template>

<script>
  import {L, LMap, LTileLayer, LMarker, LTooltip, LPopup } from 'vue2-leaflet'
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
    LMarker,
    LTooltip,
    LPopup
  },
  methods: {
    clickHandler: function(e){
    // eslint-disable-next-line
      console.log(e.latlng)
    },
    addMarker: function(){},
    setZoom: function(num){
    this.$refs.map.mapObject.setZoom(num);
    }
  },
  data () {
    return {
      url: '/map/mapTiles/{z}/{x}{y}.jpg',
      zoom: 3,
      maxZoom:6,
      center: [0,0],
      mapOptions: {},
      currentSeason: 7,
      weeks: {}
    };
  },
  mounted () {
      ax
        .get('map/weeks.json')
        .then(response => (
          this.weeks = response.data
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
flex-basis:80%;
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
flex-wrap:wrap;
}
#map .controls-wrapper .challenges .week h3, #map .controls-wrapper .challenges .week span > * {
margin:auto;
}
#map .controls {
flex: 1 100%;
justify-content:center;
display:flex;
align-items:flex-start;
}
.week {
position:relative;
padding:10px 25px;
border-bottom:1px solid #333;
display:flex;
cursor:pointer;
}
.week h3 {
padding-bottom:5px;
}
.week:before {
font-size:42px;
position:absolute;
left:8px;
top:0px;
display:block;

}
.week.locked p {
position: absolute;
    top: -20px;
    left: 0;
    font-size: 26px;
}
.week.locked:before {
content:'';
}
.week.active:before {
content: '\203A';
}
.week.active.show:before {
transform:rotate(90deg);
}
.challenges {
    display: flex;
    flex-wrap: wrap;
}
.challenge {
margin:10px auto;
}
</style>
