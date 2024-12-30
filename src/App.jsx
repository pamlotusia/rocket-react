import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post author='Pamela Lima' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad neque! Tempora sint corporis ipsa fuga impedit sit alias accusamus, veritatis minus enim vitae maxime consectetur, natus saepe nihil rem?'/>
          <Post author='Alexandre Benício' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad neque! Tempora sint corporis ipsa fuga impedit sit alias accusamus, veritatis minus enim vitae maxime consectetur, natus saepe nihil rem?'/>
          
        </main>
      </div>
    </div>
  )
}

export default App
