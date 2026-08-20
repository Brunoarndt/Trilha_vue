const STORAGE_PREFIX = 'cinevue:'

export function readStorage(key, fallbackValue) {
  try {
    const value = localStorage.getItem(`${STORAGE_PREFIX}${key}`)
    return value ? JSON.parse(value) : fallbackValue
  } catch {
    return fallbackValue
  }
}

export function removeStorage(key) {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`)
  } catch {
    // O app continua funcionando sem persistência.
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value))
  } catch {
    // O app continua funcionando sem persistência.
  }
}
