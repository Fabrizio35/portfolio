export type SelectedType =
  | 'Experiencia'
  | 'Proyectos'
  | 'Educación'
  | 'Sobre mi'

export type PostType = {
  id: number
  title: string
  description?: string
  source?: string
  link?: string
  image?: string
  techs?: string
  date: string
  company?: string
}

export type TechType = {
  id: number
  name: string
  icon: (props: { className?: string }) => React.JSX.Element
}
