<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

</script>
</template>
<nav class="golden_nav_bar">
        <ul>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About Golden Smile</RouterLink>
          <RouterLink to="/">Our Nurser</RouterLink>
          <RouterLink to="/">Our Rooms</RouterLink>
          <RouterLink to="/">Fees</RouterLink>
          <RouterLink to="/">Policies</RouterLink>
        </ul>
        <button class="golden_button" type="button">Contact Us</button>
      </nav>
      <RouterView />
</template>
