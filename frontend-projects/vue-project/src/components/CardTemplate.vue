<script lang="ts" setup>
import Button_component from '@/components/ButtonTemplate.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="card_info_container">
    <div class="row_1">
      <h1 class="card_title">I'm looking for a Nursery</h1>
      <RouterLink to="/nursery" v-slot="{ navigate }">
        <Button_component
          title="Our Nursery"
          class="golden_button"
          className="card_btn"
          action="navigate"
        >
        </Button_component>
      </RouterLink>
    </div>

    <div class="row_2">
      <img
        src="https://www.kidsincnurseries.co.uk/wp-content/uploads/2023/02/graphic3.svg"
        alt="banner"
        width="150px"
      />
    </div>
  </div>
</template>

<style>
.card_info_container {
  background: lightblue;
  height: 300px;
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 20px;
}

.row_1 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  padding: 30px;
}

.card_btn {
  background-color: black;
  width: 120px;
  border-radius: 99px;
}

.row_2 {
  width: 50%;
}

.card_title {
  text-transform: capitalize;
  font-weight: 200;
}
</style>
