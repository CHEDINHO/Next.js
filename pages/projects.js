import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import '../styles/globals.css'
export default function Projects() {
  const projects = [
    { title: ' Football Player', description: 'In the past season, I scored 13 goals and provided 16 assists across 25 matches. My performance has been instrumental in the team’s success, showcasing my ability to both finish chances and create opportunities for my teammates.', image: '/images/project1.jpg' },
    { title: 'Devloper', description: 'I will soon be a developer, ready to take on new challenges and contribute to exciting projects. Im eager to apply my skills and knowledge in the field of development.', image: '/images/project2.jpg' },
  ]

  return (
    <Layout>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">My Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
