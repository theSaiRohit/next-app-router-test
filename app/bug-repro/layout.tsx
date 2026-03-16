import React from 'react'

export default function BugLayout({ children }: { children: React.ReactNode }) {
  const script = `(function(){try{
    var preserve = location.search.indexOf('preserve=true') !== -1;
    console.log('[opt-sim] preState', window.history.state);
    var stateToSet = preserve ? window.history.state : {};
    window.history.replaceState(stateToSet, '', window.location.href);
    console.log('[opt-sim] after replaceState', { preserve: preserve, state: window.history.state });
    // color background briefly to make visual debugging obvious in case of overwrite
    try{
      if(!preserve) document.documentElement.style.backgroundColor = '#ffecec';
    }catch(e){}
  }catch(e){console.error('[opt-sim] replaceState simulation error', e);} })();`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      {children}
    </>
  )
}
