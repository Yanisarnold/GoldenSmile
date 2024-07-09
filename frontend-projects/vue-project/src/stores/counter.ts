import { ref, computed, nextTick } from 'vue'

export const useCounterStore = () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  async function increment() {
    count.value++
    await nextTick()
  }

  function restAll() {
    count.value = 0
  }

  return { count, doubleCount, increment, restAll }
}
