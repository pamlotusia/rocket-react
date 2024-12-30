import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luiz.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Faccini</strong>
              <time
                dateTime="2024-12-30 08:25:12"
                title="30 de dezembro às 8:25h"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
