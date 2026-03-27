import { Suspense } from 'react'
import './App.css'
import Pricesection from './component/Pricesecton/Pricesection'
import StudentChart from './component/StudentChart/StudentChart'


function App() {

  const dataPromise = fetch('pricingdata.json').then(res => res.json())


  return (
    <>
      <header>

      </header>

      <main>
        <Suspense fallback={<div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>}>
          <Pricesection dataPromise={dataPromise}></Pricesection>
        </Suspense>

          <StudentChart/>

      </main>


    </>
  )
}

export default App
