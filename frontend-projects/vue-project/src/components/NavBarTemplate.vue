<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>
</template>
<header>
  <nav class="golden_nav_bar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About Golden Smile</RouterLink>
          <RouterLink to="/nursery">Our Nurser</RouterLink>
          <RouterLink to="/rooms">Our Rooms</RouterLink>
          <RouterLink to="/fees">Fees</RouterLink>
          <RouterLink to="/policies">Policies</RouterLink>
      </nav>
       <button class="golden_button" type="button">Contact Us</button>
</header>
      <RouterView />
</template>
