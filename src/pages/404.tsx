import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100vh] flex justify-center mx-2 sm:mx-4 md:mx-8">
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-center text-4xl">404 - Page Not Found</h1>
        <div className=" flex flex-col space-y-3">
          <Link
            href="/contact"
            className="bg-blue-900 p-2 text-yellow-200 rounded-lg text-center"
          >
            Get help ?
          </Link>
          <Link
            href="/"
            className="bg-blue-900 p-2 text-yellow-200 rounded-lg text-center"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
