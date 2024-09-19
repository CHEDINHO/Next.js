import Layout from '../components/Layout'
import '../styles/globals.css'
export default function About() {
  return (
    <Layout>
      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">I am a full-stack developer with a keen interest in modern web technologies...</p>
        </div>
      </section>
    </Layout>
  )
}
