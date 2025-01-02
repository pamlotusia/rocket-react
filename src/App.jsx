import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Luiz Faccini',
        avatarUrl: 'https://github.com/luiz.png',
        role: 'Backend Developer'
      },
      content: [
        {
          type: 'paragraphy',
          content: '🔥 Projeto Backend entregue com sucesso! '
        },
        {
          type: 'paragraphy',
          content:
            'Hoje finalizei a implementação de uma nova API RESTful escalável e segura, utilizando Node.js e Express. 🚀 A solução inclui autenticação JWT, integração com banco de dados PostgreSQL e testes automatizados para garantir a qualidade do código.A solução inclui autenticação JWT, integração com banco de dados PostgreSQL e testes automatizados para garantir a qualidade do código. Mais um desafio superado e pronto para rodar em produção!'
        },
        {
          type: 'link',
          content: 'jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2024-12-31 07:00:00')
    },
    {
      id: 2,
      author: {
        name: 'Julia Gonçalves',
        avatarUrl: 'https://github.com/julia.png',
        role: 'DEVOPS'
      },
      content: [
        {
          type: 'paragraphy',
          content: '🚀Deploy concluído com sucesso!'
        },
        {
          type: 'paragraphy',
          content:
            ' Hoje finalizei a automação de pipelines CI/CD para um projeto crítico, garantindo integrações contínuas e entregas mais rápidas e seguras.'
        },
        {
          type: 'link',
          content: 'jane.design/doctorcare'
        }
      ],
      publishedAt: new Date('2024-12-29 21:00:00')
    }
  ]

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>{
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
