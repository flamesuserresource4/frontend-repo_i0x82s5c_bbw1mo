export default function Hero() {
  return (
    <section id="sneak-peak" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f3fbf7] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e7f6ef] text-[#006c36] px-3 py-1 text-xs font-medium mb-4">
              <span className="h-2 w-2 rounded-full bg-[#12875A]" />
              Designed for creative teams
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#383838]">
              Aprovly — CRM for Designers
            </h1>
            <p className="mt-4 text-lg text-[#4a4a4a]">
              Keep clients, projects, proposals, and revisions in one friendly workspace. Simple to use, powerful when you need it — inspired by the clarity of Figma and the flow of Notion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3" id="waitlist">
              <a href="#join" className="inline-flex items-center justify-center rounded-full bg-[#12875A] text-white px-6 py-3 font-medium shadow hover:bg-[#0f6f49] transition-colors">
                Join Waitlist
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-[#cfe9dc] text-[#006c36] px-6 py-3 font-medium hover:bg-[#f1fbf6] transition-colors">
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#e9fff3] via-white to-[#f0fff8] rounded-3xl blur-xl pointer-events-none" />
            <div className="relative rounded-2xl border border-gray-100 shadow-lg overflow-hidden bg-white">
              <img
                src="/SneakPeak.webp"
                alt="Aprovly app sneak peak"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <p className="mt-3 text-xs text-center text-gray-500">Sneak peek of the interface</p>
          </div>
        </div>
      </div>
    </section>
  );
}
