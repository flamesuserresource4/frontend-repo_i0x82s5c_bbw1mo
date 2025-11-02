import { Users, Briefcase, FileText, CreditCard, MessageSquare, Star, Layers, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Client & Project Management',
    desc: 'Organize clients, briefs, and deadlines with views that feel familiar. Assign tasks, track status, and keep context in one place.',
  },
  {
    icon: FileText,
    title: 'Proposals & Contracts',
    desc: 'Send beautiful proposals and auto-generate contracts with e-sign support. Stay on-brand and close faster.',
  },
  {
    icon: CreditCard,
    title: 'Invoices & Payments',
    desc: 'Create invoices in seconds, accept secure payments, and sync statuses automatically. Fewer nudges, faster payouts.',
  },
  {
    icon: MessageSquare,
    title: 'Client Revisions',
    desc: 'Collect feedback with context — timestamps, annotations, and comment threads that are actually helpful.',
  },
  {
    icon: Star,
    title: 'Testimonials',
    desc: 'Request, approve, and showcase client quotes. Publish to your portfolio with one click.',
  },
  {
    icon: Layers,
    title: 'Version Tracking',
    desc: 'Never lose track of iterations. Compare versions side-by-side and roll back with ease.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Analytics',
    desc: 'See pipeline, revenue, and workload at a glance. Forecast confidently and plan your week.',
  },
  {
    icon: Briefcase,
    title: 'All-in-One Workflow',
    desc: 'From lead to invoice — keep your creative business running smoothly without switching tools.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#383838]">Workflows that feel natural</h2>
          <p className="mt-3 text-[#4a4a4a]">
            Built for designers, studios, and freelancers who want clarity without the clutter. Simple cards, visual icons, and soft gradients keep things calm and focused.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#f2fff8] via-white to-[#ecfff6] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#e7f6ef] text-[#006c36] flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#383838]">{title}</h3>
                  <p className="mt-1 text-sm text-[#4a4a4a]">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
