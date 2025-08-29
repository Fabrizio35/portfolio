import PokemonAppImage from '@/assets/images/projects/pokemon-app.webp'
import HenryGameZoneImage from '@/assets/images/projects/henry-game-zone.webp'
import AddFriendsImage from '@/assets/images/projects/add-friends.webp'
import FOShopImage from '@/assets/images/projects/fo-shop.webp'
import UserManagementImage from '@/assets/images/projects/user-management.webp'
import ConstructoraMexicanaValladolidImage from '@/assets/images/projects/constructora-mexicana-valladolid.webp'

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
    image: HenryGameZoneImage,
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
    image: PokemonAppImage,
    techs:
      'Javascript • React • HTML • CSS • Redux • Express.js • PostgreSQL • Sequelize',
    date: 'Febrero 2023 - Marzo 2023',
  },
]
