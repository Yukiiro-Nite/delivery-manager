export default function setupSocketAuth(socket) {
  socket.on('auth', handleAuth)
  socket.on('reauth', handleReAuth)
}

function handleAuth(token) {
  const storedToken = JSON.parse(localStorage.getItem('token'))
  if(storedToken) {
    this.emit('auth', storedToken)
  } else {
    localStorage.setItem('token', JSON.stringify(token))
    this.emit('auth', token)
  }
}

function handleReAuth(token) {
  localStorage.setItem('token', JSON.stringify(token))
  this.emit('auth', token)
}