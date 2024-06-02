import {notFound} from "next/navigation"

//404 error page
export const dynamicParams = true

//loads all id value when homepage opens
export async function generateStaticParams(){
  const res =await fetch('http://localhost:4000/news')

  const news = await res.json()

  return news.map((newa) => ({
    id: newa.id
  }))
}

async function getNewa(id) {
  // the delay
  await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4000/news/' + id, {
    next: {
      revalidate: 20 // 20 seconds to refresh data
    }
  })
  
  if (!res.ok) {
    notFound()
  }
  
  return res.json()
}

export default async function NewaDetails({params}) {
  const newa = await getNewa(params.id)

    return (
      <main>
        <nav>
          <h2>Newa Details</h2>
        </nav>
          <div className="card">
            <h3>{newa.title}</h3>
            <small>Created by {newa.user_email}</small>
            <p>{newa.body}</p>
            <div className={`pill ${newa.priority}`}>
            {newa.priority} priority
          </div>
          </div>
      </main>
    )
  } 