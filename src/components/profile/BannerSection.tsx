import PhotoProfile from '@/assets/fabrizio.jpg'
import Banner from '@/assets/banner.jpg'
import { FileCV } from '@/icons'

const BannerSection: React.FC = () => {
  return (
    <div className="relative">
      <img src={Banner} alt="banner" className="w-full h-64 object-cover" />

      <div className="py-5 w-full flex justify-end">
        <a
          href="/Fabrizio Ossola CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Fabrizio Ossola CV.pdf"
          className="rounded-full py-1 px-1 sm:px-5 mr-2 sm:mr-10 cursor-pointer flex items-center gap-1 bg-blue-500 text-white hover:bg-blue-400"
        >
          <span className="hidden sm:inline">Descargar CV</span>
          <FileCV className="size-8 sm:size-5" />
        </a>
      </div>

      <img
        src={PhotoProfile}
        alt="profile-photo"
        className="rounded-full border-4 border-white size-44 object-cover absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-16 sm:translate-x-0"
      />
    </div>
  )
}

export default BannerSection
