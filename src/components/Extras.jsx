export default function Extras() {
  return (
    <div>
      <section id="tools" className="py-16 sm:py-20 bg-[#f7fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#383838]">Free tools for your toolkit</h2>
            <p className="mt-3 text-[#4a4a4a]">Handy utilities that make day-to-day work smoother — available to everyone, free.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand Palette Generator',
                desc: 'Create accessible color sets and export to your design tool.',
              },
              {
                title: 'Scope Builder',
                desc: 'Start projects with clear, client-friendly deliverables in minutes.',
              },
              {
                title: 'Invoice Template',
                desc: 'Professional, editable template you can send today.',
              },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-[#383838]">{t.title}</h3>
                <p className="mt-1 text-sm text-[#4a4a4a]">{t.desc}</p>
                <a href="#join" className="mt-4 inline-flex text-[#12875A] font-medium hover:underline">Get it free →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#383838]">Frequently asked questions</h2>
            <p className="mt-3 text-[#4a4a4a]">Quick answers about the waitlist, availability, and how Aprovly fits your workflow.</p>
          </div>

          <div className="mt-10 grid gap-4">
            {[
              {
                q: 'Who is Aprovly for?',
                a: 'Designers, studios, and creative teams who want a calm, all-in-one CRM to manage clients and projects without juggling multiple apps.',
              },
              {
                q: 'When can I try it?',
                a: 'We’re onboarding a small group from the waitlist to shape the experience. Join today to get early access updates.',
              },
              {
                q: 'Will there be a free plan?',
                a: 'We plan to offer a generous free tier for solo designers. Paid plans will unlock advanced automation and collaboration.',
              },
              {
                q: 'Can I import my data?',
                a: 'Yes. We’re building importers for popular tools and CSV to make switching painless.',
              },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium text-[#383838]">{item.q}</span>
                  <span className="ml-4 text-[#12875A]">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#4a4a4a]">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#join" className="inline-flex items-center justify-center rounded-full bg-[#12875A] text-white px-6 py-3 font-medium shadow hover:bg-[#0f6f49] transition-colors">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
