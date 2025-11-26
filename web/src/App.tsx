// CSS is imported in entry-client.tsx for client-side, not here for SSR

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-2.5 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
              Available for opportunities
            </span>
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-linear-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Luciano Barletta
          </h1>
          <p className="text-2xl text-slate-400 mb-8 max-w-3xl">
            Software Engineer specializing in high-performance systems, full-stack development, and
            compiler construction.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a
              href="mailto:lushobarlett@gmail.com"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group">
              <span className="text-2xl">✉</span>
              <span className="group-hover:underline">lushobarlett@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luciano-barletta-a8a42519a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group">
              <span className="text-2xl">🔗</span>
              <span className="group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-emerald-400">{'<'}</span>
            Experience
            <span className="text-emerald-400">{'/>'}</span>
          </h2>

          <div className="space-y-12">
            {[
              {
                title: 'Software Engineer',
                company: 'STC',
                period: 'Jan 2025 – Present',
                highlights: [
                  "Designed and implemented a high-performance FIX messaging client for Argentina's main exchange",
                  'Delivered production-grade reliability under tight latency requirements',
                  'Coordinated with stakeholders and local exchange for deployment',
                ],
                tech: ['Python', 'FIX Protocol', 'Low Latency'],
              },
              {
                title: 'Tooling Engineer',
                company: 'Province of Santa Fe',
                period: 'Jan 2025 – Jul 2025',
                highlights: [
                  'Architected automated Android device provisioning pipeline for regional elections',
                  'Rewrote critical automation in Python, replaced legacy cryptographic routines',
                  'Reduced failed PDF generation by 50%',
                ],
                tech: ['Python', 'Android', 'Cryptography', 'PDF Processing'],
              },
              {
                title: 'Full Stack Developer',
                company: 'Province of Buenos Aires',
                period: 'Feb 2024 – Dec 2024',
                highlights: [
                  'Led performance redesign of analytics platform with millions of records',
                  'Built query builder reducing worst-case times from minutes to 1-3 seconds',
                  'Improved backend throughput >10× with indexes, partitions, and caching',
                ],
                tech: ['PostgreSQL', 'Query Optimization', 'React', 'Performance Engineering'],
              },
              {
                title: 'Full Stack Developer',
                company: 'IPS (UNR)',
                period: 'Apr 2021 – Present',
                highlights: [
                  'Built production platform for ~5,000 concurrent users (≈30 KLOC)',
                  'Implemented grades, attendance, planning, and multi-role access control',
                  'Migrated legacy workflows to modern cloud-ready architecture',
                ],
                tech: ['React', 'TypeScript', 'Tailwind', 'Express', 'Prisma', 'PostgreSQL'],
              },
              {
                title: 'Lecturer / Course Designer',
                company: 'Austral University',
                period: 'Mar 2024 – Present',
                highlights: [
                  'Designed curriculum: Python, Angular, Haskell, Prolog, Erlang',
                  'Created teaching material for 100+ students/year',
                  'Covered functional, declarative, OO, and concurrent paradigms',
                ],
                tech: ['Python', 'Haskell', 'Prolog', 'Erlang', 'Angular'],
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xl text-slate-400">{job.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 font-mono bg-slate-800/50 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-emerald-400">{'{'}</span>
            Technical Arsenal
            <span className="text-emerald-400">{'}'}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: 'Languages',
                items: ['C/C++', 'Python', 'TypeScript', 'SQL', 'Haskell'],
                icon: '💻',
              },
              {
                category: 'Frameworks',
                items: ['React', 'Angular', 'Express', 'Tailwind'],
                icon: '⚡',
              },
              {
                category: 'Systems & Tools',
                items: ['Linux', 'Docker', 'PostgreSQL', 'Git', 'Android'],
                icon: '🛠️',
              },
              {
                category: 'Specializations',
                items: ['Performance Engineering', 'Query Optimization', 'Compiler Construction'],
                icon: '🎯',
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-slate-900/80 to-slate-900/40 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-slate-100">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm text-slate-300 bg-slate-800/50 px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-100">Education</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-2">
                  Master in Computer Science
                </h3>
                <p className="text-slate-300 mb-1">FCEIA - UNR</p>
                <p className="text-sm text-slate-500 mb-2">Mar 2020 – Nov 2025</p>
                <p className="text-sm text-slate-400">GPA: 9.11/10 (9.29/10 without fails)</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Technical Degree in IT</h3>
                <p className="text-slate-300 mb-1">IPS - UNR</p>
                <p className="text-sm text-slate-500">Mar 2014 – Nov 2019</p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-100">Achievements</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'ICPC South America',
                  detail: '28th, 36th, 42nd place (2020, 2024, 2025)',
                },
                { title: 'Tecnomate Competition', detail: '1st place (2017, 2018, 2019)' },
                { title: 'Argentina Informatics Olympiads', detail: '12th, 30th place' },
              ].map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-4 hover:border-emerald-400/30 transition-colors">
                  <h3 className="font-bold text-slate-100 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-slate-400">{achievement.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-emerald-400">⚙</span>
            Notable Projects
          </h2>
          <div className="bg-linear-to-br from-slate-900/80 to-slate-900/40 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-emerald-400 mb-3">
              Jasper Programming Language
            </h3>
            <p className="text-slate-300 mb-4">
              Imperative programming language with strong typing, records, first-class functions,
              and type inference. Implemented in C++ (≈8 KLOC).
            </p>
            <a
              href="https://github.com/SebastianMestre/Jasper"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-sm group">
              <span>View on GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-100">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { lang: 'Spanish', level: 'Native', flag: '🇪🇸' },
              { lang: 'English', level: 'Fluent', flag: '🇬🇧' },
              { lang: 'Japanese', level: 'Basic', flag: '🇯🇵' },
              { lang: 'French', level: 'Basic', flag: '🇫🇷' },
            ].map((language, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-4 text-center hover:border-emerald-400/30 transition-colors">
                <div className="text-3xl mb-2">{language.flag}</div>
                <h3 className="font-bold text-slate-100">{language.lang}</h3>
                <p className="text-sm text-slate-400">{language.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
