import { Verified, Cake, Linkedin, Github, Mail, MapPin } from '@/icons'
import BannerSection from './BannerSection'
import LinkComponent from './LinkComponent'

const Profile: React.FC = () => {
  return (
    <>
      <BannerSection />

      <div className="flex flex-col gap-2 mx-5 md:mx-auto">
        <div className="flex items-center gap-2 mt-4">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold">
            Fabrizio Ossola
          </h1>
          <Verified className="text-blue-500 size-7" />
        </div>

        <div className="flex flex-col gap-1 text-gray-300 text-sm sm:text-base">
          <span>Transformo tu idea en un producto digital ✨💻</span>

          <span>
            Desarrollador FullStack. Enfoque en el Frontend. Programador. +3
            años de experiencia.
          </span>
        </div>

        <div className="flex items-center justify-between">
          <LinkComponent
            icon={<Cake className="size-4" />}
            text="03/02/2003"
            size="small"
          />
          <LinkComponent
            icon={<MapPin className="size-4" />}
            text="Salta, Argentina"
            size="small"
          />
        </div>

        <div className="flex items-center justify-between">
          <LinkComponent
            icon={<Linkedin className="size-5 text-blue-500" />}
            text="Linkedin"
            size="big"
            href="https://www.linkedin.com/in/fabrizio-ossola/"
          />
          <LinkComponent
            icon={<Github className="size-5 text-white" />}
            text="Github"
            size="big"
            href="https://github.com/Fabrizio35"
          />
          <LinkComponent
            icon={<Mail className="size-5 text-red-800" />}
            text="Contáctame"
            size="big"
            href="mailto:ossolafabrizio@gmail.com"
          />
        </div>
      </div>
    </>
  )
}

export default Profile
