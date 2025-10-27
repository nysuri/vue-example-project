import { ref, onMounted } from 'vue'
import { getPartyById } from '@/service/parties'

export function useParty(id) {
  const party = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const loadParty = async () => {
    try {
      loading.value = true
      party.value = await getPartyById(id)
      if (!party.value) error.value = 'Party not found!'
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  onMounted(loadParty)

  return { party, loading, error, loadParty }
}
