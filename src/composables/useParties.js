import { ref, onMounted } from 'vue'
import { fetchParties } from '@/service/parties'

export function useParties() {
  const parties = ref([])
  const loading = ref(true)
  const error = ref(null)

  const loadParties = async () => {
    try {
      loading.value = true
      parties.value = await fetchParties()
    } catch (err) {
      error.value = 'Failed to fetch parties'
    } finally {
      loading.value = false
    }
  }

  onMounted(loadParties)

  return { parties, loading, error, loadParties }
}
