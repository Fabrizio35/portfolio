import type { SelectedType } from '../types'

const sections: { id: number; label: SelectedType }[] = [
  { id: 1, label: 'Experiencia' },
  { id: 2, label: 'Proyectos' },
  { id: 3, label: 'Educación' },
  { id: 4, label: 'Sobre mi' },
]

interface NavbarProps {
  selected: SelectedType
  setSelected: (selected: SelectedType) => void
}

interface SectionProps {
  label: SelectedType
}

export default function Navbar({ selected, setSelected }: NavbarProps) {
  const Section = ({ label }: SectionProps) => {
    return (
      <div
        onClick={() => setSelected(label)}
        className="flex flex-col gap-1 cursor-pointer"
      >
        <span
          className={`text-sm sm:text-base ${
            selected === label ? 'text-white' : 'text-neutral-400'
          }`}
        >
          {label}
        </span>

        <div
          className={`w-full h-1 ${
            selected === label ? 'bg-blue-500' : 'bg-transparent'
          }`}
        />
      </div>
    )
  }

  return (
    <header className="w-full mt-10 px-5 md:px-0">
      <nav className="w-full flex items-center justify-between">
        {sections.map((section) => (
          <Section key={section.id} label={section.label} />
        ))}
      </nav>
    </header>
  )
}
