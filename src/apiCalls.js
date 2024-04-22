export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export function postUrls(longUrl) {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST', 
    headers: {
      "Content-type": "application/json"
    }, 
    body: JSON.stringify(longUrl)
  })
}     