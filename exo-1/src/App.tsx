import './App.css'
import { ReadCard, WriteCard } from './components'

function App() {
  return (
    <>
      <div>
   
      </div>
      <h1>Local storage API demo</h1>
      <div className="row gx-3">
        <div className='col-6 p-2'>
          <WriteCard  className='text-white bg-primary' />
        </div>
        <div className='col-6 p-2'>
          <ReadCard className='text-black bg-warning' />
        </div>
      </div>
    </>
  )
}

export default App
