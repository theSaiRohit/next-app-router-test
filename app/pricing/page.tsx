import React from "react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <main className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Pricing</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-3xl font-bold my-4">$0</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Basic features for hobby projects and experimentation.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-semibold">Growth</h3>
            <p className="text-3xl font-bold my-4">$49</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Most teams choose this — automation, A/B testing, and integrations.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-3xl font-bold my-4">Contact</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Custom plans and priority support for larger teams.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
