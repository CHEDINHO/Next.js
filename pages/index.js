import Image from 'next/image'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto">
          <Image 
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="w-60 h-60 rounded-full mx-auto"
          />
          <h1 className="text-4xl font-bold mt-4">Hello, I&apos;m CHEDI</h1>
          <p className="text-lg mt-2">A passionate developer and football player.</p>
        </div>
      </section>
    </Layout>
  )
}
