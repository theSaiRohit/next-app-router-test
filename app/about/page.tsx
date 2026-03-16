import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-4">About PulseMark</h1>
        <p className="text-gray-800 dark:text-gray-200 mb-6">
          PulseMark started as a small experiment to help teams run faster, friendlier marketing. We focus on simple, privacy-conscious analytics and automation that teams actually use.
        </p>

        <section className="space-y-4">
          <h2 className="font-semibold">Our Mission</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Make marketing tooling delightful and transparent, so teams can focus on delivering value to customers.</p>

          <h2 className="font-semibold mt-4">History</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Founded by a small group of product and growth folks, PulseMark has evolved into a compact suite of tools used by early-stage teams and agencies.</p>
        </section>

        <div className="mt-8">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop" alt="Office" className="w-full rounded-lg shadow-md max-h-64 object-cover" />
        </div>
      </main>
    </div>
  );
}
