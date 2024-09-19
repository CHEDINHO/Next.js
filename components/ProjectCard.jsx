import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={project.image} alt={project.title} width={624} height={418} />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2">{project.description}

</p>
      </div>
    </div>
  )
}
