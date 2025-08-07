import AddFriendsImage from '@/assets/projects/add-friends-cap.webp'
import FOShopImage from '@/assets/projects/fo-shop-cap.webp'
import UserManagementImage from '@/assets/projects/user-management-cap.webp'
import ConstructoraMexicanaValladolidImage from '@/assets/projects/constructora-mexicana-valladolid-cap.webp'
import HenryGameZomeImage from '@/assets/projects/henry-game-zone-cap.webp'
import PokemonApp from '@/assets/projects/pokemon-app-cap.webp'
import {
  BrandTypescript,
  BrandJavascript,
  BrandReact,
  BrandNextjs,
  BrandRedux,
  BrandAstro,
  BrandTailwind,
  BrandMaterialUI,
  BrandZustand,
  BrandCSS,
  BrandHTML,
  BrandNodejs,
  BrandExpress,
  BrandSQL,
  BrandPrisma,
  BrandGit,
  Github,
  BrandGitlab,
  BrandGitea,
  BrandFigma,
  BrandTrello,
  BrandClickUp,
  BrandSlack,
  BrandDiscord,
  BrandScrum,
  BrandLeanSixSigma,
} from '@/icons'

export const EXPERIENCIE = [
  {
    id: 1,
    date: 'Diciembre 2023 - Febrero 2025',
    title: 'Frontend Developer',
    company: 'Dazlabs',
    description:
      'Software Factory. Desarrollar pantallas y componentes 100% personalizados. Optimizar y mantener interfaces, elementos Frontend y sitios web. Adaptar aplicaciones web a dispositivos móviles. Consumir la API desarrollada por el equipo backend. Seguir el diseño desarrollado por el equipo UX/UI. Liderar un equipo para desarrollar una red social desde 0.',
    techs: 'Typescript • React • Tailwind • Material UI • Zustand • Moralis',
    link: 'https://www.linkedin.com/company/day-zero-labs/',
  },
]

export const PROJECTS = [
  {
    id: 6,
    title: 'Constructora Mexicana Valladolid',
    description:
      'Diseñé y desarrollé desde cero el sitio web de una constructora en México, con el objetivo de transmitir solidez, profesionalismo y facilitar la navegación por sus servicios.',
    link: 'https://constructoramexicanavalladolid.com.mx/',
    image: ConstructoraMexicanaValladolidImage,
    techs: 'Typescript • React • Tailwind',
    date: 'Mayo 2025',
  },
  {
    id: 5,
    title: 'User Management - Sistema de gestión de usuarios',
    description:
      'Sistema de gestión de usuarios. Filtros por edad y género. Ordenación alfabética. Búsqueda por nombre. Detalle del usuario. Eliminación de la lista.',
    source: 'https://github.com/Fabrizio35/user-management',
    link: 'https://user-management-fo.vercel.app/',
    image: UserManagementImage,
    techs: 'Typescript • Next.js • Tailwind',
    date: 'Octubre 2023',
  },
  {
    id: 4,
    title: 'FO Shop - Ecommerce',
    description:
      'Ecommerce de productos. Filtros por categoría y precio. Ordenación alfabética. Paginado. Búsqueda por nombre. Detalle del producto. Carrito de compra.',
    source: 'https://github.com/Fabrizio35/fo-shop',
    link: 'https://foshop.vercel.app/',
    image: FOShopImage,
    techs: 'Typescript • Next.js • Tailwind • Zustand',
    date: 'Septiembre 2023',
  },
  {
    id: 3,
    title: 'Add Friends - Sistema de gestión de amistades',
    description:
      'Sistema de gestión de solicitudes de amistades. Visualización de foto de perfil. Agregar y eliminar amigos/as. Detalle de la amistad. Editar nombre del amigo/a.',
    source: 'https://github.com/Fabrizio35/add-friends',
    link: 'https://add-friends.vercel.app/',
    image: AddFriendsImage,
    techs: 'Typescript • Next.js • Tailwind • Redux',
    date: 'Agosto 2023',
  },
  {
    id: 2,
    title: 'Henry Game Zone',
    description:
      'Ecommerce de videojuegos desarrollado en equipo, con funcionalidades completas tanto de frontend como backend.',
    source: 'https://github.com/Fabrizio35/PF-Henry-GameZone',
    image: HenryGameZomeImage,
    techs:
      'Javascript • React • CSS • HTML • Redux • Cloudinary • Express.js • PostgreSQL • Sequelize • Auth0 • SCRUM',
    date: 'Marzo 2023 - Abril 2023',
  },
  {
    id: 1,
    title: 'Pokemon App',
    description:
      'Aplicación web interactiva que permite explorar, filtrar y crear Pokémon, combinando información de una API externa con una base de datos propia.',
    source: 'https://github.com/Fabrizio35/pokemon-pi',
    image: PokemonApp,
    techs:
      'Javascript • React • HTML • CSS • Redux • Express.js • PostgreSQL • Sequelize',
    date: 'Febrero 2023 - Marzo 2023',
  },
]

export const EDUCATION = [
  {
    id: 1,
    date: 'Marzo 2024',
    title: 'Curso de Programación en Java',
    company:
      'Universidad Provincial de Administración, Tecnología y Oficios (UPATecO)',
    description:
      'Curso de introducción a la programación con Java, en el que fuimos resolviendo trabajos prácticos con distintas actividades en dicho lenguaje.',
  },
  {
    id: 2,
    date: 'Agosto 2022 - Abril 2023',
    title: 'Desarrollo Web Fullstack',
    company: 'SoyHenry',
    description:
      'Bootcamp de Desarrollo Web FullStack, en donde aprendí desarrollo Frontend con Javascript, React, Redux, HTML, CSS, desarrollo Backend con Node, Express, y bases de datos con PostgresSQL y Sequelize. Además, desarrollé un proyecto individual y un proyecto grupal junto a un equipo de 5 personas.',
  },
  {
    id: 3,
    date: 'Diciembre 2021',
    title: 'Introducción a la programación en Python',
    company: '1000 programadores salteños',
    description:
      'Curso de introducción a la programación con Python, en el que aprendí las bases del lenguaje, realizabamos trabajos prácticos y desarrollamos un proyecto final.',
  },
  {
    id: 4,
    date: 'Marzo 2016 - Diciembre 2020',
    title: 'Educación Secundaria',
    company: 'Colegio Américo Vespucio',
    description:
      'Cursé y finalicé la educación secundaria con orientación en Ciencias Naturales en Salta, Capital, Argentina.',
  },
]

export const TECHS = [
  {
    id: 1,
    name: 'Javascript',
    icon: BrandTypescript,
  },
  {
    id: 2,
    name: 'Typescript',
    icon: BrandJavascript,
  },
  {
    id: 3,
    name: 'HTML',
    icon: BrandHTML,
  },
  {
    id: 4,
    name: 'CSS',
    icon: BrandCSS,
  },
  {
    id: 5,
    name: 'React',
    icon: BrandReact,
  },
  {
    id: 6,
    name: 'Next.js',
    icon: BrandNextjs,
  },
  {
    id: 7,
    name: 'Astro',
    icon: BrandAstro,
  },
  {
    id: 8,
    name: 'Redux',
    icon: BrandRedux,
  },
  {
    id: 9,
    name: 'Zustand',
    icon: BrandZustand,
  },
  {
    id: 10,
    name: 'Tailwind',
    icon: BrandTailwind,
  },
  {
    id: 11,
    name: 'Material UI',
    icon: BrandMaterialUI,
  },
  {
    id: 12,
    name: 'Node.js',
    icon: BrandNodejs,
  },
  {
    id: 13,
    name: 'Express.js',
    icon: BrandExpress,
  },
  {
    id: 14,
    name: 'PostgresSQL',
    icon: BrandSQL,
  },
  {
    id: 15,
    name: 'Sequelize',
    icon: BrandSQL,
  },
  {
    id: 16,
    name: 'Prisma',
    icon: BrandPrisma,
  },
]

export const TOOLS = [
  {
    id: 1,
    name: 'Git',
    icon: BrandGit,
  },
  {
    id: 2,
    name: 'Github',
    icon: Github,
  },
  {
    id: 3,
    name: 'Gitlab',
    icon: BrandGitlab,
  },
  {
    id: 4,
    name: 'Gitea',
    icon: BrandGitea,
  },
  {
    id: 5,
    name: 'Figma',
    icon: BrandFigma,
  },
  {
    id: 6,
    name: 'Trello',
    icon: BrandTrello,
  },
  {
    id: 7,
    name: 'ClickUp',
    icon: BrandClickUp,
  },
  {
    id: 8,
    name: 'Slack',
    icon: BrandSlack,
  },
  {
    id: 9,
    name: 'Discord',
    icon: BrandDiscord,
  },
]

export const METHS = [
  { id: 1, name: 'SCRUM', icon: BrandScrum },
  { id: 2, name: 'Lean Six Sigma', icon: BrandLeanSixSigma },
]
