export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-600">
        উপস! পেজটি খুঁজে পাওয়া যায়নি
      </p>
      <p className="mt-2 text-gray-500">
        আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে বা নেই।
      </p>
      <a
        href="/"
        className="px-2 lg:px-3 inline-block py-2 w-full shadow-xl lg:m-3 sm:w-100 rounded-full bg-violet-700 hover:bg-fuchsia-600 text-white mt-3 text-center transition-all duration-300 ursor-pointer hover:scale-105 active:scale-105 active:bg-fuchsia-600"
      >
        হোমে ফিরে যান
      </a>
    </div>
  );
}
