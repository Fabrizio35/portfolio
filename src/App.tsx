import type { SelectedType } from './types'
import { useState } from 'react'
import { EDUCATION } from './data/education'
import { PROJECTS } from './data/projects'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar'
import PostList from './components/Post/PostList'
import AboutMe from './components/AboutMe'
import ExperienceList from './components/Experience/ExperienceList'

export default function App() {
  const [selected, setSelected] = useState<SelectedType>('Experiencia')

  return (
    <div className="w-full md:w-[750px] mx-auto">
      <Profile />

      <Navbar selected={selected} setSelected={setSelected} />

      {selected === 'Experiencia' && <ExperienceList />}

      {selected === 'Proyectos' && <PostList posts={PROJECTS} />}

      {selected === 'Educación' && <PostList posts={EDUCATION} />}

      {selected === 'Sobre mi' && <AboutMe />}
    </div>
  )
}
