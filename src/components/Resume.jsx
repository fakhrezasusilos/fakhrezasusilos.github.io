const Resume = () => {
  return (
    <section id="resume" className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-[#2c3e50] mb-4 border-b border-gray-200 pb-2">Resume</h2>
      <p>
        <a
          href="https://drive.google.com/file/d/1ADLNQpEX2WBbz9WRj16U4z-86VCUcKBq/view?usp=sharing"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            gtag('event', 'resume_download', {
              event_category: 'Resume',
              event_label: 'PDF Download (Google Drive)'
            });
          }}
        >
          Download My CV (PDF)
        </a>
      </p>

    </section>
  );
}
export default Resume;
