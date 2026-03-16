import React from 'react'
import RevealClient from './RevealClient'

export default function Page() {
  return (
    <main style={{ padding: '4rem' }}>
      <section style={{ padding: '2rem', background: '#f0f0f0' }}>
        <h1>Bug reproduction: history.state overwrite</h1>
        <p>Below is the content that relies on client-side hydration to become visible.</p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <RevealClient />
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p>Try toggling the replacement behavior:</p>
        <ul>
          <li><a href="/bug-repro">Replace with empty state (break)</a></li>
          <li><a href="/bug-repro?preserve=true">Preserve state (should work)</a></li>
        </ul>
      </section>
    </main>
  )
}
