import Link from "next/link"


async function getNews() {
    // the delay
    await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4000/news', {
    next: {
      revalidate: 20 // 30 seconds to refresh data
    }
  })

  return res.json()
}

export default async function NewaList() {
  const news = await getNews()

  return (
    <>
      {news.map((newa) => (
        <div key={newa.id} className="card my-5">
          <Link href={`/news/${newa.id}`}>
           <h3>{newa.title}</h3>
           <p>{newa.body.slice(0, 200)}...</p>
           <div className={`pill ${newa.priority}`}>
            {newa.priority} priority
           </div>
          </Link>
        </div>
      ))}
      {news.length === 0 && (
        <p className="text-center">There are no open news, yay!</p>
      )}
    </>
  )
}