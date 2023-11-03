import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import { Suspense } from 'react'




const page = () => {
  return (

    <main>
      <Suspense>
        <Hero />
      <Gallery/>
      </Suspense>
      
    </main>
  )
}

export default page
