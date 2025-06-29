import React from "react";
import "./index.css";
import exp from "./data/experience.js";

function App() {
  return (
    <div className="bg-[#f9f9f9] text-[#333] font-sans leading-relaxed min-h-screen">
      <header className="bg-[#2c3e50] text-white text-center p-10 shadow">
        <h1 className="text-3xl font-bold mb-2">Fakhreza Akbar Susilo</h1>
        <p className="mb-4">QA Engineer | Manual & Automation Testing | WebdriverIO, Cucumber, Appium</p>
        <nav className="space-x-4 sticky top-0 bg-[#2c3e50] z-50 p-4">
          <a href="#about" className="text-[#ecf0f1] hover:underline">About</a>
          <a href="#skills" className="text-[#ecf0f1] hover:underline">Skills</a>
          <a href="#projects" className="text-[#ecf0f1] hover:underline">Projects</a>
          <a href="#resume" className="text-[#ecf0f1] hover:underline">Resume</a>
          <a href="#contact" className="text-[#ecf0f1] hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10 space-y-10">
        <section id="about" className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">About Me</h2>
          <p>
            I am a passionate Quality Assurance Engineer from Indonesia with experience in both manual and automation testing.
            I love ensuring software quality through clear communication, structured test planning, and clean automation code.
          </p>
        </section>

        <section id="experience" className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8 border-b border-gray-200 pb-2">Experience</h2>

          <div className="space-y-10">
            {exp.map((item, index) => (
              <div key={item.id} className="relative flex gap-4">
                {/* Left timeline and icon */}
                <div className="w-14 flex flex-col items-center relative">
                  {/* Vertical line */}
                  {index !== exp.length - 1 && (
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-full bg-gray-300 z-0" />
                  )}

                  {/* icon */}
                  <div className="relative z-10 w-12 h-12 bg-white border-2 border-[#2c3e50] shadow flex items-center justify-center">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={`${item.company} icon`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="w-3 h-3 bg-[#2c3e50]" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#2c3e50]">{item.role}</h3>
                  <p className="text-sm text-gray-600">{item.company} • {item.location}</p>
                  <p className="text-sm text-gray-500 italic mb-2">{item.startDate} - {item.endDate}</p>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-sm text-blue-700 italic mt-1">{item.techStack}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">Skills & Tools</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Manual Testing:</strong> Test case writing, exploratory testing, regression testing</li>
            <li><strong>Automation:</strong> WebdriverIO, Cucumber, Appium</li>
            <li><strong>API Testing:</strong> Postman, REST Assured</li>
            <li><strong>Tools:</strong> Jira, TestRail, Git, GitHub Actions</li>
          </ul>
        </section>

        <section id="projects" className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">Projects</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Ebay Test Automation</h3>
            <p className="mb-2">Ebay Automation using WebdriverIO with Cucumber. Created reusable page objects and integrated the tests with GitHub Actions for CI.
            </p>
            <p><a href="https://github.com/fakhrezasusilos/ebay" className="text-blue-600 underline">View on GitHub</a></p>
            <div className="mt-4">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/T4iPaD7iByw" title="Ebay Automation Tests" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Saucedemo Test Automation</h3>
            <p className="mb-2">Saucedemo Automation using WebdriverIO with Cucumber. Created reusable page objects and integrated the tests with GitHub Actions for CI.</p>
            <p><a href="https://github.com/fakhrezasusilos/saucedemo_webdriverIO" className="text-blue-600 underline">View on GitHub</a></p>
            <div className="mt-4">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/hKaHg6F4atE" title="Saucedemo Automation Tests" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Manual Test Case: DeckFlo</h3>
            <p className="mb-2">Created detailed manual test cases.</p>
            <p><a href="https://docs.google.com/spreadsheets/d/12Wr68-4rx0xC81W174gQsS3WhQOL2nFrQUny5ieAzOA/edit?usp=sharing" className="text-blue-600 underline">View Test Case (Google Drive)</a></p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Bug Report Samples</h3>
            <img src="/assets/Screenshot_2025-06-16_at_21.10.01.png" alt="Tokopedia Bug Report" className="rounded shadow mt-2" />
          </div>
        </section>

        <section id="resume" className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">Resume</h2>
          <p><a href="https://drive.google.com/file/d/1pTxn5tI_kfv-Z8hCPurRNRnZd3DBGOaN/view?usp=sharing" className="text-blue-600 underline">Download My CV (PDF)</a></p>
        </section>

        <section id="contact" className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">Contact</h2>
          <p>Email: <a href="mailto:fakhreza.susilo88@gmail.com" className="text-blue-600">fakhreza.susilo88@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/fakhreza-akbar-susilo/" className="text-blue-600">linkedin.com/in/fakhreza-akbar-susilo</a></p>
          <p>GitHub: <a href="https://github.com/fakhrezasusilos" className="text-blue-600">github.com/fakhrezasusilos</a></p>
        </section>
      </main>

      <footer className="text-center p-6 text-sm text-gray-500">
        &copy; 2025 Fakhreza Akbar Susilo | QA Engineer Portfolio

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#2c3e50] text-white p-3 rounded-full shadow-lg hover:bg-[#34495e] transition"
          aria-label="Back to Top"
        >
          ↑
        </button>
      </footer>

    </div>
  );
}

export default App;