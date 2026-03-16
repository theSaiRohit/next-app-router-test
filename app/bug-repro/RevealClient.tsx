'use client'

import React, { useEffect, useState } from 'react'

export default function RevealClient() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'opacity 300ms ease, transform 300ms ease' }}>
      <h2>Revealed content</h2>
      <p>This content is shown by a client-side effect. If hydration fails, it stays hidden.</p>
    </div>
  )
}
