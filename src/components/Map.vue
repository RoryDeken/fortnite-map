<template>
  <div id="map">
  <a href="#" class="toggle" @click="toggleControls">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 24 24">
    <g>
      <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z"/>
      <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z"/>
      <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z"/>
    </g>
  </svg></a>
    <div id="lastPoint" v-if="lastPoint">
      <span>{{lastPoint.lat}}</span>
      <span>{{lastPoint.lng}}</span>
    </div>
    <div v-if="controlsVisible" class="controls-wrapper">
    <a href="#" class="toggle close" @click="toggleControls">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
    <g>
    	<g id="close">
    		<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
    			214.2,178.5 		"/>
    	</g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg></a>
    <h2>Season {{ currentSeason }} Challenges</h2>
        <div v-if="weeks.length == 0" class="loading">Loading...</div>
        <p v-if="weeks.length" class="note">&star; Battle Pass challenge</p>
    <section class="challenges" v-for="week in sortedArray" v-bind:key="week.week_number">
      <div class="week"  v-on:click="week.acf.show = !week.acf.show"  v-bind:class="{active:week.acf.active, show: week.acf.show, locked: !week.acf.active }">
      <p class="lock" v-if="!week.acf.active">&#128274;</p>
      <h3>Week {{ week.acf.week_number}} </h3>
        <div v-if="week.acf.show && week.acf.active" class="challenges">
          <span v-for="(challenge, index) in week.acf.challenges" class="challenge" v-on:click.stop v-bind:key="challenge.challenge_name">
              <h4>
                <span v-if="challenge.battle_pass_challenge">&star;</span>
                {{challenge.challenge_name}}
              </h4>
              <p>{{challenge.challenge_description}}</p>
                <input v-if="challenge.has_location" v-on:click="setZoom(1)" type="checkbox" :id="index" v-model="challenge.map_display" >
              <label v-if="challenge.has_location" :for="index">Show on map</label>
              <a v-if="challenge.screenshot" v-bind:href="challenge.screenshot" target="_blank" class="screenshot">View screenshot</a>
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
       :bounds="bounds"
       :options="mapOptions"
       ref="map"
       @click="getCoords($event)"
     >
     <l-tile-layer :url="url" :options="{noWrap: true}"  />
     <div v-for="week in weeks" v-bind:key="week.week_number">
         <span v-for="challenge in week.acf.challenges" v-bind:key="challenge.challenge_name">
         <span v-if="challenge.map_display">
           <span  v-for="location in challenge.lat_lngs" v-bind:key="location.hint">
            <l-marker :lat-lng="location.lat_lng"  >
            <l-tooltip :content="location.hint"/>
            </l-marker>
           </span>
           </span>
         </span>
      </div>
   </l-map>
 </div>
</template>

<script>
  import {L, LMap, LTileLayer, LMarker, LTooltip/*, LPopup */ } from 'vue2-leaflet'
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
    LTooltip/*,
    LPopup*/
  },
  created: function(){
    if(window && window.innerWidth <= 1024){
      this.zoom = 1;
    }
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (parseInt(a.acf.week_number) < parseInt(b.acf.week_number))
          return -1;
        if (parseInt(a.acf.week_number) > parseInt(b.acf.week_number))
          return 1;
        return 0;
      }
      return this.weeks.slice().sort(compare);
    }
  },
  methods: {
    setZoom: function(num){
    this.$refs.map.mapObject.setZoom(num);
    },
    getCoords: function(e){
      if(window && window.location.href.indexOf('coordinates') > -1){
            this.lastPoint = e.latlng;
      }
    },
    toggleControls: function(e){
      if(this.controlsVisible){
        this.controlsVisible = false;
      }else{
        this.controlsVisible = true;
        }
    },
  },
  data () {
    return {
      url: '/assets/map/mapTiles/season8/{z}/{x}_{y}.jpg',
      zoom: 3,
      maxZoom:6,
      center: [0,0],
      bounds: [[85,-180],[-85,180]],
      mapOptions: {},
      currentSeason: 8,
      weeks: [],
      lastPoint:false,
      controlsVisible: false,
    };
  },
  mounted () {
      ax
        .get('https://api.fortnite-map.net/wp-json/wp/v2/fortnite_challenges')
        .then(response => (
          this.weeks = response.data
        ))
      if(window && window.innerWidth > 1024){
      this.controlsVisible = true;
      }else {
      this.controlsVisible = false;
      }

  },

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
flex-basis:70%;
}
#lastPoint {
    position: fixed;
    top: 0;
    height: 60px;
    left: 0;
    background: white;
    width: 300px;
    text-align: center;
    padding: 5px;
}
#lastPoint span{
display:block;
margin-top:10px;
}
.loading {
font-size:1.9em;
}
.note {
margin-top:0;
}
#map .controls-wrapper {
flex-grow:1;
flex-basis:30%;
display:flex;
align-items:flex-start;
align-content:flex-start;
justify-content:center;
flex-wrap:wrap;
color:#FFF;
overflow-y:scroll;
}

#map .controls-wrapper h2,  #map .controls-wrapper .challenges  {
display:flex;
flex-basis:100%;
justify-content:center;
align-items:flex-start;
}
#map .controls-wrapper h2 {
    font-size: 1.9em;
    margin-bottom:5px;
    text-align:center;
}
#map .controls-wrapper .challenges {
align-content:flex-start;
}
#map .controls-wrapper .challenges .week{
display:flex;
flex-basis:100%;
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
#map .controls-wrapper .challenges .week h3 {
    font-size: 1.75em;
}
#map .controls-wrapper .challenges .week h3, #map .controls-wrapper .challenges .week span > * {
margin-top:auto;
margin-bottom:0;
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
left:35px;
top:-8px;
display:block;

}
#map .controls-wrapper .challenges .week span h4 {
font-size:1.55em;
margin-bottom:10px;
cursor: default;
font-weight:normal;
flex-basis:100%;
text-align:center;
}
#map .controls-wrapper .challenges .week span h4 span {
display:inline;
}
#map .controls-wrapper .challenges .week span p {
font-size:1.1em;
margin-bottom:15px;
flex-basis:100%;
text-align:left;
}
#map .controls-wrapper .challenges .week span label,  #map .controls-wrapper .challenges .week span .screenshot {
margin:20px auto;
font-size:1em;
background: #FFF;
color:#333;
padding:0.7em;
cursor:pointer;
text-transform:uppercase;
text-decoration:none;
}
#map .controls-wrapper .challenges .week span input:checked + label:after {
  content: ' \2796';
  top: 2px;
  position: relative;
  left: 4px;
}

#map .controls-wrapper .challenges .week span label:hover,
#map .controls-wrapper .challenges .week span label:focus {
color:#FFF;
background:#333;
}
#map .controls-wrapper .challenges .week span input {
display:none;
}
.week.locked p {
  position: absolute;
  top: -14px;
  left: 35px;
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
top:-2px;
}
.challenges {
    display: flex;
    flex-wrap: wrap;
}

span.challenge {
    border-bottom: 2px solid white;
    margin: 15px auto;
    padding: 0px 15px;
}
.challenge label {
margin:15px auto;
font-size:
}
.toggle {
display:none;
}

@media(max-width:1024px){
html {
font-size:12px;
}
  #app {
  height:auto;
  }
  #map {
  flex-wrap:wrap;
  }

  #map .controls-wrapper {
    height: 50vh;
    overflow: scroll;
    flex-basis:100%;
    order:2;
    }
    #map #mapContainer {
    flex-basis:100%;
    order:1;
    height:75vh;

}
#map .controls-wrapper {
position:fixed;
top:0;
z-index:3;
background:#333;
height:100vh;
width:90vw;
left:0;
}
#map #mapContainer {
z-index:1;
}
.toggle {
display:block;
position:fixed;
left:10px;
top:10px;
}
.toggle.close {
z-index:4;
}
.toggle svg
{
fill: #FFF;
height: 25px;
width: auto;
}

}

</style>
