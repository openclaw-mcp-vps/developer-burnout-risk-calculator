export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers & HR Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Burnout Risk from{" "}
          <span className="text-[#58a6ff]">Git Activity Patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repos. Our ML scoring engine analyzes commit patterns, late-night work hours, and code quality signals to surface developers at risk — before they quit.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $16/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Metrics strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">94%</div>
            <div className="text-xs text-[#8b949e] mt-1">Prediction accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">48h</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg early warning lead time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">3×</div>
            <div className="text-xs text-[#8b949e] mt-1">Reduction in surprise resignations</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per team</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Unlimited repos (GitHub &amp; GitLab)</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>ML burnout risk scores per developer</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Weekly email reports for managers</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Commit pattern &amp; after-hours analysis</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Code quality trend tracking</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>7-day free trial</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does the burnout risk score work?</h3>
            <p className="text-sm text-[#8b949e]">We analyze Git commit timestamps, frequency, message sentiment, code churn, and after-hours activity. Our ML model weights these signals to produce a 0–100 risk score, updated daily.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Is developer data kept private?</h3>
            <p className="text-sm text-[#8b949e]">Yes. We only read commit metadata — no source code is stored. All data is encrypted at rest and in transit. Reports are visible only to authorized managers in your organization.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Which Git platforms are supported?</h3>
            <p className="text-sm text-[#8b949e]">GitHub and GitLab are fully supported via OAuth. Bitbucket and Azure DevOps integrations are on the roadmap for Q3 2025.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Developer Burnout Risk Calculator. All rights reserved.
      </footer>
    </main>
  );
}
