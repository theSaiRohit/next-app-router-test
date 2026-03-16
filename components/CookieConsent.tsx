"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    try {
      const val = localStorage.getItem("cookiesAccepted");
      setConsent(val);
    } catch (e) {
      setConsent("false");
    }
  }, []);

  if (consent !== null) return null;

  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setConsent("true");
  };

  const decline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setConsent("false");
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[min(96%,48rem)] -translate-x-1/2 transform rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 shadow-lg flex items-center gap-4">
      <div className="text-sm text-gray-900 dark:text-gray-100">
        We use cookies to improve your experience. Accept cookies to enable analytics and performance tracking.
      </div>
      <div className="ml-auto flex gap-2">
        <button
          onClick={decline}
          className="rounded-md px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="rounded-md px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
