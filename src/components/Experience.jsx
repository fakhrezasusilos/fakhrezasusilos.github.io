import exp from "../data/experience.js"; 

const Experience = () => {
  return (
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
  );
}

export default Experience;
