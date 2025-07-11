const Skills = () => {
  return (
    <section id="skills" className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">Skills & Tools</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Manual Testing:</strong> Test case writing, exploratory testing, regression testing</li>
        <li><strong>Automation:</strong> WebdriverIO, Cucumber, Appium , Playwright</li>
        <li><strong>API Testing:</strong> Postman, REST Assured</li>
        <li><strong>Tools:</strong> Jira, TestRail, Git, GitHub Actions</li>
      </ul>
    </section>
  );
};

export default Skills;
