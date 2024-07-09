<script lang="ts" setup>
import '@/assets/weather-app.css'
import { ref, onMounted } from 'vue'

const temperature = ref('')
const country = ref('London')
const weatherDescription = ref('Few Clouds')
const inputR = ref('')
const linksrc = ref('')
const time = ref('')
const wind = ref('')
const humidity = ref('')
const realFeel = ref('')
const uvIndex = ref('')
const pressue = ref('')
const changeOfRain = ref('')
const TempHistory = ref('')
const sun = ref('')
const moon = ref('')
const list = ref([wind, humidity, realFeel, uvIndex, pressue, changeOfRain, TempHistory, sun, moon])
const itemsRefs = ref([])

onMounted(async () => {
  const url = `http://api.weatherapi.com/v1/current.json?key=a20853bae3f245e7815164956221207&q=london&aqi=no`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  temperature.value = data['current'].temp_c
  weatherDescription.value = data['current'].condition.text
  country.value = data['location']['name']
  linksrc.value = data['current'].condition.icon
  time.value = data['location']['localtime']
  wind.value = data.current.wind_mph
  humidity.value = data.current.humidity
  realFeel.value = data.current.feelslike_c
  uvIndex.value = data.current.uv
  pressue.value = data.current.pressure_in
  changeOfRain.value = data.current.windchill_c
})

async function searchData() {
  const url = `http://api.weatherapi.com/v1/current.json?key=a20853bae3f245e7815164956221207&q=${inputR.value}&aqi=no`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  temperature.value = data['current'].temp_c
  weatherDescription.value = data['current'].condition.text
  country.value = data['location']['name']
  linksrc.value = data['current'].condition.icon
  time.value = data['location']['localtime']
  wind.value = data.current.wind_mph
  humidity.value = data.current.humidity
  realFeel.value = data.current.feelslike_c
  uvIndex.value = data.current.uv
  pressue.value = data.current.pressure_in
  changeOfRain.value = data.current.windchill_c
  // TempHistory.value =data.current.
  // sun.value =data.current.
  // moon.value =data.current.
}
</script>
<template>
  <div class="wrapper_container">
    <div class="weather-app-container">
      <section class="weather-container-one">
        <div class="weather-search-input-container">
          <input
            name="weather-searching"
            id="weather-search"
            placeholder="Search the city?"
            v-model="inputR"
          />
          <button class="weather-btn" @click="searchData()">search</button>
        </div>
        <div class="weather-card-container">
          <img :src="linksrc" alt="icon images" />
          <div class="card-items-one">
            <h1>{{ temperature }}°C</h1>
            <p>{{ weatherDescription }}</p>
          </div>
          <span style="border: 1px solid lightgray; width: 100%"></span>
          <div class="card-items-two">
            <p>{{ time }}</p>
          </div>
        </div>
        <div>
          <h1>{{ country }}</h1>
        </div>
      </section>
      <section class="weather-container-two">
        <div class="link-container">
          <p class="link-one">
            <a href="http://">Today</a>
          </p>
          <p class="link-two"><a href="http://">Tomorrow</a></p>
        </div>
        <div class="weather-card-info">
          <div class="info-item" v-bind:key="item.value" v-for="item in list" ref="itemsRefs">
            <p class="h1-item">{{ item }}</p>
            <p class="h1-item">{{ item.value }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
