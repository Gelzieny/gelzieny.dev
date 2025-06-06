export function BlobBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600 animate-blob-1" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600 animate-blob-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600 animate-blob-3" />
    </div>
  );
}
