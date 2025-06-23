import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-[#f9f9f9] text-[#333] font-sans leading-relaxed">
      <header className="bg-[#2c3e50] text-white text-center p-10">
        <h1 className="text-3xl font-bold mb-2">Fakhreza Akbar Susilo</h1>
        <p className="mb-4">QA Engineer | Manual & Automation Testing | WebdriverIO, Cucumber, Appium</p>
        <nav className="space-x-4">
          <a href="#about" className="text-[#ecf0f1]">About</a>
          <a href="#skills" className="text-[#ecf0f1]">Skills</a>
          <a href="#projects" className="text-[#ecf0f1]">Projects</a>
          <a href="#resume" className="text-[#ecf0f1]">Resume</a>
          <a href="#contact" className="text-[#ecf0f1]">Contact</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-5">
        <section id="about" className="py-10">
          <h2 className="text-2xl text-[#2c3e50] border-b-2 border-gray-200 pb-2 mb-4">About Me</h2>
          <p>
            I am a passionate Quality Assurance Engineer from Indonesia with experience in both manual and automation
            testing. I love ensuring software quality through clear communication, structured test planning, and clean
            automation code.
          </p>
        </section>

        <section id="skills" className="py-10">
          <h2 className="text-2xl text-[#2c3e50] border-b-2 border-gray-200 pb-2 mb-4">Skills & Tools</h2>
          <ul className="list-disc ml-6">
            <li><strong>Manual Testing:</strong> Test case writing, exploratory testing, regression testing</li>
            <li><strong>Automation:</strong> WebdriverIO, Cucumber, Appium</li>
            <li><strong>API Testing:</strong> Postman, REST Assured</li>
            <li><strong>Tools:</strong> Jira, TestRail, Git, GitHub Actions</li>
          </ul>
        </section>

        <section id="projects" className="py-10">
          <h2 className="text-2xl text-[#2c3e50] border-b-2 border-gray-200 pb-2 mb-4">Projects</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Ebay Test Automation</h3>
            <p className="mb-2">Ebay Automation using WebdriverIO with Cucumber. Created reusable page objects and integrated the tests with GitHub Actions for CI.</p>
            <p><a href="https://github.com/fakhrezasusilos/ebay" className="text-blue-600 underline">View on GitHub</a></p>
            <div className="mt-4">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/rdwmSrEXbH8" title="Cucumber report HTML" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Manual Test Case: DeckFlo</h3>
            <p className="mb-2">Created detailed manual test cases.</p>
            <p><a href="https://docs.google.com/spreadsheets/d/12Wr68-4rx0xC81W174gQsS3WhQOL2nFrQUny5ieAzOA/edit?usp=sharing" className="text-blue-600 underline">View Test Case (Google Drive)</a></p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Bug Report Samples</h3>
            <img src="assets/Screenshot 2025-06-16 at 21.11.31.png" alt="Tokopedia Bug Report" className="rounded shadow mt-2" />
          </div>
        </section>

        <section id="resume" className="py-10">
          <h2 className="text-2xl text-[#2c3e50] border-b-2 border-gray-200 pb-2 mb-4">Resume</h2>
          <p><a href="https://drive.google.com/file/d/1pTxn5tI_kfv-Z8hCPurRNRnZd3DBGOaN/view?usp=sharing" className="text-blue-600 underline">Download My CV (PDF)</a></p>
        </section>

        <section id="contact" className="py-10">
          <h2 className="text-2xl text-[#2c3e50] border-b-2 border-gray-200 pb-2 mb-4">Contact</h2>
          <p>Email: <a href="mailto:fakhreza.susilo88@gmail.com" className="text-blue-600">fakhreza.susilo88@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/fakhreza-akbar-susilo/" className="text-blue-600">linkedin.com/in/fakhreza-akbar-susilo</a></p>
          <p>GitHub: <a href="https://github.com/fakhrezasusilos" className="text-blue-600">github.com/fakhrezasusilos</a></p>
        </section>
      </main>

      <footer className="text-center p-6 text-sm text-gray-500">
        &copy; 2025 Fakhreza Akbar Susilo | QA Engineer Portfolio
      </footer>
    </div>
  );
}

export default App;