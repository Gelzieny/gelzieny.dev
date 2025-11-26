export function BubblesBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">

      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600" />

      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-72 h-72  bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600" />

      <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600" />

    </div>
  );
}
