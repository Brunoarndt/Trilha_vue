<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = computed(() => movies.find((item) => item.id === Number(route.params.id)))
</script>
