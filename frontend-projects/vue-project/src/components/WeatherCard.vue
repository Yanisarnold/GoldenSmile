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

// Loading information
// onMounted(async () => {
//   const url = `http://api.weatherapi.com/v1/current.json?key=a20853bae3f245e7815164956221207&q=london&aqi=no`
//   console.log(url)
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
//   temperature.value = data['current'].temp_c
//   weatherDescription.value = data['current'].condition.text
//   country.value = data['location']['name']
//   linksrc.value = data['current'].condition.icon
//   time.value = data['location']['localtime']
//   wind.value = data.current.wind_mph
//   humidity.value = data.current.humidity
//   realFeel.value = data.current.feelslike_c
//   uvIndex.value = data.current.uv
//   pressue.value = data.current.pressure_in
//   changeOfRain.value = data.current.windchill_c
// })

// api getting info
// async function searchData() {
//   const url = `http://api.weatherapi.com/v1/current.json?key=a20853bae3f245e7815164956221207&q=${inputR.value}&aqi=no`
//   console.log(url)
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
//   temperature.value = data['current'].temp_c
//   weatherDescription.value = data['current'].condition.text
//   country.value = data['location']['name']
//   linksrc.value = data['current'].condition.icon
//   time.value = data['location']['localtime']
//   wind.value = data.current.wind_mph
//   humidity.value = data.current.humidity
//   realFeel.value = data.current.feelslike_c
//   uvIndex.value = data.current.uv
//   pressue.value = data.current.pressure_in
//   changeOfRain.value = data.current.windchill_c
//   // TempHistory.value =data.current.
//   // sun.value =data.current.
//   // moon.value =data.current.
// }
</script>
<template>
  <div class="golden_container">
    <section class="golden_nav_bar">
      <nav>
        <ul>
          <li>Home</li>
          <li>About Golden Smile</li>
          <li>Our Nursery</li>
          <li>Our Rooms</li>
          <li>Fees</li>
          <li>Policies</li>
        </ul>
        <button type="button">Contact Us</button>
      </nav>
    </section>
  </div>
</template>
