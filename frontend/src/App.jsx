import './App.css'
import Charts from './components/Charts'
import Largecard from './components/Largecard'
import Navbar from './components/Navbar'
import SmallCard from './components/SmallCard'

function App() {
  const views = "views"
  const likes = "likes"

  


  return (
    <>
      <div className='flex'>
        <div className='navabr w-1/6 flex justify-start'>
       <div>
        <Navbar/>
       </div>

        </div>
        <div>
          <div className=' flex justify-center flex-wrap'>
            <Largecard views={views} likes={likes} />
            <Largecard views={views} likes={likes} />
            <Largecard views={views} likes={likes} />
            <Largecard views={views} likes={likes} />
          </div>
          <Charts />
          <SmallCard views={views} likes={likes} />
        </div>
      </div>
    </>
  )
}

export default App
