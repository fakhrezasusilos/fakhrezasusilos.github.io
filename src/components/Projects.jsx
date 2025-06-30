const Projects = () => {
  return (
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
  );
};

export default Projects;
