import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <main className="max-w-5xl mx-auto py-20 px-6">
        <section className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">PulseMark — The Best Marketing Tool</h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
              PulseMark helps growth teams scale campaigns, automate personalization, and measure what matters. Built for speed and clarity — focus on the message, not the tooling.
            </p>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 mb-6">
              <li>• Automated campaign workflows</li>
              <li>• Real-time A/B testing</li>
              <li>• Privacy-first analytics</li>
            </ul>
            <div className="flex gap-3">
              <a href="#" className="inline-block rounded-md px-4 py-2 text-white bg-white">Start Free</a>
              <a href="#" className="inline-block rounded-md border border-gray-300 px-4 py-2 text-gray-900 dark:text-gray-100">Learn More</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&auto=format&fit=crop"
              alt="Marketing illustration"
              className="rounded-lg shadow-lg w-full object-cover max-h-72"
            />
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Drive Conversions</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Use smart segmentation and journeys to turn prospects into customers.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Measure Impact</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Privacy-friendly analytics that spotlight what’s working — not noise.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Scale Easily</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Templates, automations, and integrations that grow with your team.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
