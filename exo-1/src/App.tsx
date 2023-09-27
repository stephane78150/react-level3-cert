import './App.css'
import { ReadCard, WriteCard } from './components'

const allKeys: string[] = ['someKey', 'anotherKey', 'oneMoreKey', 'theLastKey']

function App() {
  return (
    <>
      <div>
   
      </div>
      <h1>Local storage API demo</h1>
      <div className="row gx-3">
        <div className='col-6 p-2'>
          <WriteCard keyNames={allKeys} className='text-white bg-primary' />
        </div>
        <div className='col-6 p-2'>
          <ReadCard keyNames={allKeys} className='text-black bg-warning' />
        </div>
      </div>
    </>
  )
}

export default App
