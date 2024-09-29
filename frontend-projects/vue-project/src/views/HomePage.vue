<script lang="ts" setup>
import HomeContent from '@/components/HomeContent.vue'
import data from '@/data/cardData.json'
import CardTemplate from '@/components/CardTemplate.vue'
</script>

<template>
  <HomeContent
    v-for="item in data"
    :key="item.id"
    :home_title="item.home_title"
    :home_paragraph="item.home_paragraph"
  ></HomeContent>
  <div
    class="home_content_card"
    style="padding: 30px; display: flex; justify-content: space-evenly"
  >
    <CardTemplate></CardTemplate>
    <CardTemplate></CardTemplate>
  </div>
  <div style="padding: 30px">
    <h3>Our mission for early learning & development</h3>
    <p>
      Our aim at Kids Inc Nurseries is to make the early years of your child’s life as enjoyable,
      rewarding and positive as possible. We believe that children should have fun at nursery by
      actively promoting learning through play. Our objective is to help children achieve their full
      potential. We provide an environment rich in active learning opportunities, supported by a
      qualified team trained to enhance the learning of your child. All activities are planned to
      meet each child’s individual needs, within the standards set by the Early Years Foundation
      Stage. This approach will help your child to develop to the best of their ability.
    </p>
  </div>
</template>
