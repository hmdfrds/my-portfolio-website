// src/app/contact/page.tsx

export default function ContactPage() {
  const formspreeEndpoint = "https://formspree.io/f/myzwyzkg";

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
        Get In Touch
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Have a question, a project proposal, or just want to connect? Feel free
        to send me a message using the form below.
      </p>

      <form
        action={formspreeEndpoint}
        method="POST"
        className="space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-200"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="johndoe@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            name="_subject"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="What's this regarding?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
