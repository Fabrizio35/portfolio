import { EXPERIENCIE } from '@/data/experience'
import Experience from './Experience'

export default function ExperienceList() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 my-10 mx-5 md:mx-0">
      {EXPERIENCIE.map((exp) => (
        <Experience key={exp.id} experience={exp} />
      ))}
    </ol>
  )
}
