export default function AIAgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            AI Agents
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Intelligent AI Agents
            <br />
            Built for Your Business
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We build custom AI agents that automate repetitive workflows,
            interact with customers, process information, and help businesses
            operate more efficiently.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
            >
              Build an AI Agent
            </a>

            <a
              href="/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Back to Home
            </a>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-medium">AI Automation</h2>
            <p className="mt-4 leading-7 text-white/50">
              Automate repetitive business processes with intelligent AI
              workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-medium">Custom AI Agents</h2>
            <p className="mt-4 leading-7 text-white/50">
              Purpose-built agents designed around your business requirements
              and workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-medium">AI Integrations</h2>
            <p className="mt-4 leading-7 text-white/50">
              Connect AI systems with your existing applications, APIs, and
              business tools.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}