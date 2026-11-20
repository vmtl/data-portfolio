
export default function Home() {
  return (

<main className="min-h-screen bg-white px-8 py-12 text-slate-900">

<nav className="mx-auto mb-24 flex max-w-5xl items-center justify-between border-b border-slate-200 pb-6">
  <span className="text-xl font-bold text-blue-900">
    Eric Williams
  </span>

  <div className="flex gap-6 text-sm font-medium text-slate-600">
    <a href="#about" className="hover:text-blue-700">
      About
    </a>
    <a href="#projects" className="hover:text-blue-700">
      Projects
    </a>
    <a href="#experience" className="hover:text-blue-700">
      Experience
    </a>
    <a href="#contact" className="hover:text-blue-700">
      Contact
    </a>
  </div>
</nav>

      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
          Data Analytics & Business Intelligence
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-slate-900">
          Transforming Complex Data Into
          <span className="text-blue-800"> Business Insights.</span>
        </h1>

        <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-700">
          Data analytics professional specializing in SQL, Python,
          business intelligence, reporting automation, and
          operational performance improvement.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          Turning Data Into Decisions
        </h2>

        <p className="max-w-2xl leading-relaxed text-slate-600">
          Explore my portfolio of analytics projects, automated
          reporting solutions, and data-driven operational improvements.
        </p>

<div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#projects"
    className="rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-900"
  >
    View My Projects
  </a>

  <a
    href="#experience"
    className="rounded-lg border border-blue-800 px-6 py-3 font-semibold text-blue-800 transition-colors hover:bg-blue-50"
  >
    Professional Experience
  </a>
</div>
      </div>

<section
  id="projects"
  className="mx-auto max-w-5xl py-24"
>
  <div className="mb-10">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
      Portfolio
    </p>

    <h2 className="mb-4 text-3xl font-bold text-slate-900">
      Featured Projects
    </h2>

    <p className="max-w-2xl text-slate-600">
      A selection of projects demonstrating my experience
      with data analysis, business intelligence, and
      operational performance improvement.
    </p>
  </div>

  <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
    <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
      Featured Project
    </span>

    <h3 className="mb-3 text-2xl font-bold text-slate-900">
      Fleet IQ
    </h3>

    <p className="mb-6 max-w-3xl leading-relaxed text-slate-600">
      A fleet analytics project focused on using data
      to evaluate operational performance, identify
      opportunities for improvement, and support
      data-driven decision-making.
    </p>

    <div className="flex flex-wrap gap-2">
      {["Data Analytics", "Operational Performance", "Business Intelligence"].map(
        (skill) => (
          <span
            key={skill}
            className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700"
          >
            {skill}
          </span>
        )
      )}
    </div>


<div className="mt-8 flex flex-wrap gap-4">
  <a
    href="https://fleetintel.streamlit.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-900"
  >
    View Live Project
  </a>

  <a
    href="https://github.com/vmtl/fleetiq"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-lg border border-blue-800 px-6 py-3 font-semibold text-blue-800 transition-colors hover:bg-blue-50"
  >
    View Source Code
  </a>
</div>


  </div>
</section>

<section
  id="experience"
  className="mx-auto max-w-5xl border-t border-slate-200 py-24"
>
  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
    Career Background
  </p>

  <h2 className="mb-6 text-3xl font-bold text-slate-900">
    Professional Experience
  </h2>

  <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
    <p className="mb-2 text-sm font-semibold text-blue-700">
      Amazon
    </p>

    <h3 className="mb-4 text-2xl font-bold text-slate-900">
      Data & Reporting Analyst
    </h3>

    <p className="mb-6 leading-relaxed text-slate-600">
      Developed automated reporting solutions, data pipelines,
      and operational analytics to support fulfillment center
      performance, inventory accuracy, and business decisions.
    </p>

    <div className="flex flex-wrap gap-2">
      {["SQL", "Python", "ETL", "Excel", "Reporting Automation", "Business Intelligence"].map(
        (skill) => (
          <span
            key={skill}
            className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800"
          >
            {skill}
          </span>
        )
      )}
    </div>
  </div>
</section>

<section
  id="skills"
  className="mx-auto max-w-5xl border-t border-slate-200 py-24"
>
  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
    Technical Expertise
  </p>

  <h2 className="mb-10 text-3xl font-bold text-slate-900">
    Technical Skills
  </h2>

  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        title: "Data Analysis",
        skills: ["SQL", "Python", "Pandas", "NumPy", "Excel"],
      },
      {
        title: "Business Intelligence",
        skills: [
          "Amazon Quick",
          "Data Visualization",
          "KPI Reporting",
          "Operational Analytics",
        ],
      },
      {
        title: "Data Engineering & Automation",
        skills: [
          "ETL Pipelines",
          "VBA",
          "PowerShell",
          "Reporting Automation",
        ],
      },
    ].map((category) => (
      <div
        key={category.title}
        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h3 className="mb-5 text-lg font-bold text-blue-900">
          {category.title}
        </h3>

        <ul className="space-y-3">
          {category.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-blue-700" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

<section
  id="about"
  className="mx-auto max-w-5xl border-t border-slate-200 py-24"
>
  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
    My Background
  </p>

  <h2 className="mb-6 text-3xl font-bold text-slate-900">
    About Me
  </h2>

  <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
    <p>
      I am a data analytics professional with experience
      developing reporting solutions, automating business
      processes, and analyzing operational performance
      in large-scale fulfillment environments.
    </p>

    <p>
      During my time at Amazon, I worked with SQL, Python,
      and business intelligence tools to improve reporting
      efficiency, support inventory accuracy, and provide
      actionable insights to operational teams.
    </p>

    <p>
      I am currently pursuing a Bachelor of Science in
      Data Science at the University of Phoenix and
      continuing to expand my expertise in analytics,
      data engineering, and business intelligence.
    </p>

    <p>
      My goal is to combine technical expertise with
      operational experience to help organizations
      solve complex problems and make better decisions
      through data.
    </p>
  </div>
</section>

<section
  id="contact"
  className="mx-auto max-w-5xl border-t border-slate-200 py-24"
>
  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
    Get In Touch
  </p>

  <h2 className="mb-6 text-3xl font-bold text-slate-900">
    Let's Connect
  </h2>

  <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
    I'm interested in opportunities involving data analytics,
    business intelligence, data engineering, and operational
    improvement. Feel free to connect with me to discuss
    professional opportunities or my portfolio projects.
  </p>

  <div className="flex flex-wrap gap-4">
    <a
      href="https://www.linkedin.com/in/plat-williams"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white hover:bg-blue-900"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/vmtl"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
    >
      GitHub
    </a>
    
<a
  href="mailto:platmaw@gmail.com"
  className="rounded-lg border border-blue-800 px-6 py-3 font-semibold text-blue-800 transition-colors hover:bg-blue-50"
>
  Email Me
</a>

  </div>
</section>

    </main>
  );
}
