import AsyncStorage from '@react-native-async-storage/async-storage'

const CACHE_PREFIX = 'stayfinder-conditions-'

export async function saveTravelCache(cityId, weather) {
  // TODO 6: Build the cache entry and save it
  const entry = {
    savedAt: Date.now(),
    weather: weather,
  }

  await AsyncStorage.setItem(`${CACHE_PREFIX}${cityId}`, JSON.stringify(entry))
}

export async function loadTravelCache(cityId) {
  // TODO 7: Read the entry, return null if missing
  const raw = await AsyncStorage.getItem(`${CACHE_PREFIX}${cityId}`)

  if (raw === null) {
    return null
  }

  return JSON.parse(raw)
}
