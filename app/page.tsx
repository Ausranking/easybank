import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import { Suspense } from 'react'
// import ArticleSection from './components/ArticleSection';




const page = () => {
  return (

    <main>
      <Suspense>
        <Hero />
        <Gallery />
        {/* <ArticleSection/> */}
      </Suspense>
      
    </main>
  )
}

export default page
