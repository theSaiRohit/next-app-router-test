import React from "react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <main className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Team</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop" alt="Member" className="mx-auto rounded-full w-24 h-24 object-cover" />
            <h4 className="mt-4 font-semibold">Ava Roberts</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Head of Product</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <img src="https://images.unsplash.com/photo-1545996124-73b6fb0d6d2a?w=400&q=80&auto=format&fit=crop" alt="Member" className="mx-auto rounded-full w-24 h-24 object-cover" />
            <h4 className="mt-4 font-semibold">Liam Chen</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Engineering Lead</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80&auto=format&fit=crop" alt="Member" className="mx-auto rounded-full w-24 h-24 object-cover" />
            <h4 className="mt-4 font-semibold">Maya Singh</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Growth Lead</p>
          </div>
        </div>
      </main>
    </div>
  );
}
