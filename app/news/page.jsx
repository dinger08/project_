import { Suspense } from "react";
import NewaList from "./NewaList";
import Loading from "../loading";

export default function News() {
    return (
      <main>
        <nav>
          <div>
          <h2>News Page</h2>
          <p><small>Currently opens news</small></p>
          </div>
        </nav>
        <Suspense fallback={<Loading />}>
          <NewaList />
        </Suspense>
      </main>
    )
  }