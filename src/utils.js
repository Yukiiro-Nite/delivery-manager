let last = 0

export function uniqueId() {
  const now = Date.now()
  if(now > last) {
    last = now
  } else {
    last++
  }
  return last.toString(36)
}

export function getFormData(event) {
  return Array.from(event.target.elements).reduce((acc, el) => {
    if(el.name) {
      acc[el.name] = getValue(el)
    }
    return acc
  }, {})
}

export function getValue(el) {
  switch (el.type) {
    case 'checkbox': return el.checked
    default: return el.value
  }
}