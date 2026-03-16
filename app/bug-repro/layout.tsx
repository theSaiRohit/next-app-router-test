import React from 'react'

export default function BugLayout({ children }: { children: React.ReactNode }) {
  const script = `(function(){try{
    var preserve = location.search.indexOf('preserve=true') !== -1;
    console.log('[opt-sim] preState', window.history.state);
    // NOTE: replaceState disabled to isolate the early overwrite test
    // var stateToSet = preserve ? window.history.state : {};
    // window.history.replaceState(stateToSet, '', window.location.href);
    console.log('[opt-sim] replaceState skipped for isolation', { preserve: preserve, state: window.history.state });
    try{ if(!preserve) document.documentElement.style.border = '4px dashed #ffdede'; }catch(e){}
  }catch(e){console.error('[opt-sim] replaceState simulation error', e);} })();`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      {children}
    </>
  )
}
