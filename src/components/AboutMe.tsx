import { METHS, TECHS, TOOLS } from '@/data/techs'
import PostAbout from './Post/PostAbout'

const POSTS_ABOUT = [
  {
    id: 1,
    text: (
      <p>
        Me llamo Fabrizio Ossola, soy de Salta, Argentina y{' '}
        <strong>soy Desarrollador FullStack</strong>, enfocado y especializado
        en el Frontend,{' '}
        <strong>
          con +3 años de experiencia en el mundo del desarrollo y la
          programación
        </strong>
        .
      </p>
    ),
  },
  {
    id: 2,
    text: (
      <p>
        Actualmente estoy estudiando la{' '}
        <strong>
          Tecnicatura Universitaria en Programación en la Universidad Nacional
          de Salta
        </strong>{' '}
        para expandir mis conocimientos y entender mas a fondo el funcionamiento
        del software.
      </p>
    ),
  },
  {
    id: 3,
    text: (
      <p>
        Me considero una persona <strong>proactiva</strong>, capaz de adaptarme
        a espacios de desarrollo tanto individual como grupal teniendo la
        facultad de tomar el control en situaciones que lo requieran,{' '}
        <strong>con participación y escucha activa</strong>, enfocado en los
        trabajos que se demanden y dispuesto a aceptar todo tipo de consejos,
        saberes y nuevas ideas.
      </p>
    ),
  },
  {
    id: 4,
    text: (
      <p>
        Algunos de mis logros incluyen llevar adelante el{' '}
        <strong>
          liderazgo de un pequeño equipo para desarrollar la base de una red
          social
        </strong>{' '}
        desde el lado del Frontend. <br />
        Además, estuve a cargo de desarrollar robustas{' '}
        <strong>landings, componentes y hooks</strong> para proyectos grandes e
        importantes.
      </p>
    ),
  },
]

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-8 my-10 text-gray-300 text-pretty [&>p>strong]:text-blue-500 [&>p>strong]:font-normal px-5 md:px-0">
      {POSTS_ABOUT.map((post) => (
        <PostAbout key={post.id} text={post.text} />
      ))}
      <PostAbout techs={TECHS} techTitle="Stack Tecnológico" />
      <PostAbout techs={TOOLS} techTitle="Herramientas" />
      <PostAbout techs={METHS} techTitle="Metodologías" />
    </section>
  )
}
