import Profile from './components/profile/Profile'
import Navbar from './components/Navbar'
import PostList from './components/post/PostList'
import AboutMe from './components/AboutMe'
import { useState } from 'react'
import type { SelectedType } from './types'
import { PROJECTS, EXPERIENCIE, EDUCATION } from './data'
import './App.css'

function App() {
  const [selected, setSelected] = useState<SelectedType>('Experiencia')

  return (
    <div className="w-full md:w-[750px] mx-auto">
      <Profile />

      <Navbar selected={selected} setSelected={setSelected} />

      {selected === 'Experiencia' && <PostList posts={EXPERIENCIE} />}

      {selected === 'Proyectos' && <PostList posts={PROJECTS} />}

      {selected === 'Educación' && <PostList posts={EDUCATION} />}

      {selected === 'Sobre mi' && <AboutMe />}
    </div>
  )
}

export default App
