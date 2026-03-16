"use client";

import { useEffect, useState } from "react";

export default function AnalyticsNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const val = localStorage.getItem("cookiesAccepted");
      setShow(val === "true");
    } catch (e) {
      setShow(false);
    }
  }, []);

  if (!show) return null;

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-5xl mx-auto px-6 text-sm text-gray-900 dark:text-gray-100">
        <strong>Analytics enabled:</strong> We collect anonymous analytics to understand how visitors use this site, improve performance, and deliver a better experience. This is a mock notice — no personal data is collected.
      </div>
    </section>
  );
}
