export default function Portfolio() {
  const skills = {
    Backend: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'Spring MVC',
      'Servlet',
      'Struts',
      'REST APIs',
      'JWT Authentication'
    ],
    Frontend: ['JSP', 'JavaScript', 'HTML5', 'CSS3'],
    Database: ['MySQL'],
    DevOps: ['Docker', 'CI/CD', 'Git', 'GitHub', 'Maven', 'Postman'],
    'AI Tools': ['ChatGPT', 'GitHub Copilot', 'AI-assisted Development']
  };

  const projects = [
    {
      title: 'Human Resource Management System (HRMS)',
      description:
        'Enterprise-level HRMS application designed to manage employee operations efficiently with role-based access and workflow automation.',
      features: [
        'Authentication & Authorization',
        'Employee CRUD Management',
        'Attendance Management ',
        'Leave Management',
        'Payroll Module',
        'Dashboard Analytics',
        'Reporting System',
        'Responsive Admin Panel'
      ],
      tech: ['Java', 'JSP', 'Servlet', 'Hibernate', 'MySQL', 'JavaScript'],
      github: 'https://github.com/prem9034/Human-Resourse-Management-System-HRMS-'
    },
    {
      title: 'Employee Management System',
      description:
        'REST-based employee lifecycle management application built using Spring Boot and layered architecture.',
      features: [
        'REST API Development',
        'CRUD Operations',
        'DTO Optimization',
        'Relational Entity Mapping',
        'Layered Architecture',
        'MySQL Integration'
      ],
      tech: ['Spring Boot', 'Hibernate', 'MySQL', 'REST API'],
      github: 'https://github.com/prem9034/employee-management-system'
    },
    {
      title: 'ERP Purchase & Inventory Module',
      description:
        'Enterprise ERP showcase module focused on inventory management, warehouse tracking, and procurement workflows.',
      features: [
        'Warehouse Tracking',
        'Purchase Workflow',
        'Inventory Reports',
        'Stock Analytics',
        'Vendor Management'
      ],
      tech: ['Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/prem9034'
    },
    {
      title: 'Payroll & Smart Approval Workflow',
      description:
        'Workflow-based payroll and approval management module with enterprise-level processing logic.',
      features: [
        'Payroll Processing',
        'Role-based Approval Flow',
        'Attendance Sync',
        'Salary Reports',
        'Department Management'
      ],
      tech: ['Java', 'Hibernate', 'MySQL'],
      github: 'https://github.com/prem9034'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Prem <span className="text-blue-400">Sharma</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-4">
                Java Full Stack Developer
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Enterprise Applications
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-8 mb-8 max-w-2xl">
                Java Backend Developer with 1+ years of experience building scalable enterprise applications using Spring Boot,
                Hibernate, JSP, REST APIs, and modern backend architecture.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/prem9034"
                  target="_blank"
                  className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/prem-sharma-6740a1301"
                  target="_blank"
                  className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:premsharma90091@gmail.com"
                  className="px-6 py-3 rounded-2xl border border-blue-500/40 hover:bg-blue-500/10 transition font-semibold"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-[340px] h-[340px] rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                <div className="text-center px-8">
                  <div className="text-7xl mb-4">💻</div>
                  <h2 className="text-3xl font-bold mb-3">Prem Sharma</h2>
                  <p className="text-gray-300">
                    Java Full Stack Developer
                  </p>
                  <div className="mt-6 flex justify-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Spring Boot</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Hibernate</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm">JSP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">About Me</p>
            <h2 className="text-4xl font-black mb-8 leading-tight">
              Passionate About Building
              <span className="block text-blue-400">Scalable Systems</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-300 leading-8 text-lg">
            <p>
              I am a Java Full Stack Developer currently working at Techlene Software Solution Pvt Ltd with hands-on
              experience in enterprise application development, REST APIs, authentication systems, and database integration.
            </p>

            <p>
              My expertise includes Spring Boot, Hibernate, JSP, Struts, MySQL, and scalable MVC architecture. I enjoy
              solving real-world business problems and building systems that are efficient, secure, and maintainable.
            </p>

            <p>
              I have worked on HRMS and ERP-based modules involving payroll, attendance, leave management, dashboard
              analytics, employee workflows, and reporting systems while directly interacting with clients and managing
              project responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Technical Skills</p>
            <h2 className="text-5xl font-black">Tech Stack & Tools</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:border-blue-500/40 transition"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-blue-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Experience</p>
          <h2 className="text-5xl font-black">Professional Journey</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-bold">Java Developer</h3>
              <p className="text-blue-400 text-lg mt-2">Techlene Software Solution Pvt Ltd</p>
            </div>

            <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 w-fit">
              Jan 2025 - Present
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="space-y-4">
              <p>• Developed and maintained enterprise applications using Struts and Spring MVC frameworks.</p>
              <p>• Built scalable backend modules using layered MVC architecture.</p>
              <p>• Developed and optimized REST APIs using Spring Boot and Hibernate.</p>
              <p>• Implemented CRUD operations and business logic integration with MySQL.</p>
            </div>

            <div className="space-y-4">
              <p>• Integrated JWT-based authentication and authorization systems.</p>
              <p>• Improved SQL query performance and request processing workflows.</p>
              <p>• Handled client communication and project responsibilities.</p>
              <p>• Worked on payroll, attendance, ERP, and reporting modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Projects</p>
            <h2 className="text-5xl font-black">Featured Work</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 hover:border-blue-500/40 transition duration-300"
              >
                <h3 className="text-3xl font-bold mb-5">{project.title}</h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-blue-400 mb-3">Modules & Features</h4>

                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
                >
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 text-center backdrop-blur-xl">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">Contact</p>

          <h2 className="text-5xl font-black mb-6">
            Let's Build Something Great
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8 mb-10">
            I’m open to collaborating on enterprise applications, backend systems, Java full stack projects, and modern web development opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:premsharma90091@gmail.com"
              className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              premsharma90091@gmail.com
            </a>

            <a
              href="tel:+919770665322"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold"
            >
              +91 9770665322
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-10 text-gray-400">
            <a
              href="https://github.com/prem9034"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prem-sharma-6740a1301"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Prem Sharma • Java Full Stack Developer • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
