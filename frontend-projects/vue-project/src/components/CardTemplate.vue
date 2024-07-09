<script lang="ts" setup>
import '@/assets/main.css'
interface propsTypes {
  id: number
  img: string
  name: string
  jobTitle: string
  website: string
  about: string
  interest: string
}

//   Equivalent type-based declaration:
// will be compiled into equivalent runtime declarations //  // "one": {
//   "op1": "2500 MAUs",
//   "op2": "3500 MAUs"

// },
const props = defineProps<propsTypes>()
</script>

<template>
  <div class="container">
    <div class="img-container">
      <img class="card-img" src="../Rectangle 90.png" alt="profile img" />
    </div>
    <section class="card-content">
      <div class="title-container">
        <h1 class="perso-title">{{ props.name }}</h1>
        <h3 id="perso-job">{{ props.jobTitle }}</h3>
        <h4 id="perso-site">{{ props.website }}</h4>
        <h4 id="perso-site">Experienced :</h4>
      </div>
      <div class="button-container">
        <button class="btn-mail btn">Email</button>
        <button class="btn-link btn">LinkedIn</button>
      </div>
    </section>
    <section class="content-container">
      <h4>About</h4>
      <p>
        {{ props.about }}
      </p>
      <h4>Interests</h4>
      <p>
        {{ props.interest }}
      </p>
    </section>
    <section class="footer-container">
      <img src="../Instagram Icon.png" alt="icon1" />
      <img src="../Facebook Icon.svg" alt="icon1" />
      <img src="../Twitter Icon.svg" alt="icon1" />
      <img src="../GitHub Icon.svg" alt="icon1" />
    </section>
  </div>
</template>
