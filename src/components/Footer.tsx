export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">About Me</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-blue-500">Twitter</a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-700">Facebook</a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
} 