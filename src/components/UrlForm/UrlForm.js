import React, { useState } from 'react';

function UrlForm() {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  function postUrls(longUrl) {
    fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST', 
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify(longUrl)
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const longUrl = {
      title: title, 
      long_url: urlToShorten
    }
    postUrls(longUrl)
    clearInputs();
  }
  console.log('title:', title)
  console.log('urlToShorten:', urlToShorten)

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='urlToShorten'
        value={urlToShorten}
        onChange={event => setUrlToShorten(event.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
