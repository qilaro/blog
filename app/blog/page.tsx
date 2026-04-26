export default function BlogList() {
  const posts = [
    { id: 1, title: "Getting Started with Next.js", date: "2026-04-26" },
    { id: 2, title: "Building Layouts in App Router", date: "2026-04-25" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center p-8 bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 mb-8">Blog Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-800">
              <h2 className="text-xl font-medium text-black dark:text-zinc-50">{post.title}</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
