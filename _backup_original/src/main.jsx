import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ImagePreview from './preview/ImagePreview.jsx'
import './styles.css'

// The preview page lives at /#/preview ; everything else shows the invitation.
function Root() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash === '#/preview' ? <ImagePreview /> : <App />
}

createRoot(document.getElementById('root')).render(<Root />)
