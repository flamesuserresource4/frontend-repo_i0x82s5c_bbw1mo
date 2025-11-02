import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#006c36]" />
            <span className="font-semibold text-[#383838]">Aprovly</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#383838]">
            <a href="#features" className="hover:text-[#006c36]">Features</a>
            <a href="#sneak-peak" className="hover:text-[#006c36]">Sneak Peak</a>
            <a href="#faq" className="hover:text-[#006c36]">FAQ</a>
            <a href="#tools" className="hover:text-[#006c36]">Free Tools</a>
            <a href="#waitlist" className="ml-2 inline-flex items-center rounded-full bg-[#12875A] text-white px-4 py-2 font-medium shadow hover:bg-[#0f6f49] transition-colors">Join Waitlist</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#383838] hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-[#383838]">
              <a href="#features" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>Features</a>
              <a href="#sneak-peak" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>Sneak Peak</a>
              <a href="#faq" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>FAQ</a>
              <a href="#tools" className="px-2 py-2 rounded hover:bg-gray-100" onClick={() => setOpen(false)}>Free Tools</a>
              <a href="#waitlist" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#12875A] text-white px-4 py-2 font-medium shadow hover:bg-[#0f6f49] transition-colors" onClick={() => setOpen(false)}>Join Waitlist</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
