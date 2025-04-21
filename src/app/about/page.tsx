export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        About Me
      </h1>
      <section className="mb-8 space-y-4 text-lg text-gray-700 leading-relaxed">
        <p>
          Hi there! I&apos;m Firdaus, a passionate Software Engineer. I
          specialize in building stuff. My journey into technology started with
          games, and I&apos;ve been hooked ever since.
        </p>
        <p>
          Beyond coding, I&apos;m interested in reading.I believe that Learning
          doesn&apos;t stop at graduation—it&apos;s a forever thing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Technical Skills
        </h2>
        <div className="grid grid-cols1 sm:grid-cols-2 md: grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2 text-gray-700">
              Languages
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 text-gray-700">
              {" "}
              Frameworks/Library
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2 text-gray-700">
              Tools & Platforms
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>MySql / MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Find Me Online
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/hmdfrds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
