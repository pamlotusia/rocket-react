import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?q=50&w=500&auto=format&fit=crop&ixlib=rb-1.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/pamlotusia.png"
        />

        <strong>Pamela Lima</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          {' '}
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
