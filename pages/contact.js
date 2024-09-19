import Layout from '../components/Layout'
import '../styles/globals.css'
export default function Contact() {
  return (
    <Layout>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <form className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
