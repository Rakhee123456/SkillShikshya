import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mb-8 mx-auto">
        <h3 className="text-3xl font-medium text-gray-700 pb-2 ">
          Your SkillShikshya Journey
        </h3>
        <h1 className="text-xl md:text-2xl font-bold text-black">
          Step In. <span className="text-green-600">Skill Up.</span> <span className="text-purple-800">Stand Out.</span> 🚀
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Start with Clarity */}
        <div className="bg-red-400 text-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Start with Clarity</h2>
          <p className="mb-4">Step into a better learning path.</p>
          <p className="text-sm">
            Overwhelmed by too many learning options? SkillShikshya provides a
            clear, curated roadmap from the start. Whether you're a beginner or
            upskilling, we have a path tailored to your growth.
          </p>
        </div>

        {/* Learn by Doing */}
        <div className="bg-sky-400 text-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Learn by Doing</h2>
          <p className="mb-4">Practical skills, real projects.</p>
          <p className="text-sm">
            Theory is great, but action is better. At SkillShikshya, you learn
            by doing. Hands-on projects and real-world scenarios help you build,
            break, and create—leading to true mastery.
          </p>
        </div>

        {/* Get Mentored & Supported */}
        <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Get Mentored & Supported</h2>
          <p className="mb-4">You're not learning alone.</p>
          <p className="text-sm">
            Stuck or need feedback? SkillShikshya's community of mentors and
            learners has your back with live support, interactive discussions,
            and expert insights. You’re never on your own.
          </p>
        </div>

        {/* Achieve & Showcase */}
        <div className="bg-yellow-600 text-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Achieve & Showcase</h2>
          <p className="mb-4">Build your portfolio, get job-ready.</p>
          <p className="text-sm">
            Your journey ends with achievement. Each completed project builds a
            portfolio showcasing your skills and job readiness, bringing you
            closer to that dream job, promotion, or your own venture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
