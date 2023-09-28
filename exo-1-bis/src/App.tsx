import { useCallback, useRef } from 'react'
import './App.css'

function clearAll() {
  window.localStorage.clear();
  alert("Local storage was cleared completely !")
}

function App() {
  const keyRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const onSave = useCallback(() => {
    const key = keyRef.current?.value;
    const value = valueRef.current?.value;
    if (key && value) {
      window.localStorage.setItem(key, value);
      alert(`Saved into local storage: ${key}=${value} !`);
    }

  }, []);

  return (
    <>
      <h1>Other local storage editor</h1>
      <h5 className='text-secondary'>To test synchronization with first app</h5>
      <div className="card">
        <div className='card-body'>
          <h5 className='cart-title mb-5'>Save to local storage</h5>
          <form>
            <div className="row">
              <label className='col-2' htmlFor='tbx_key'>Key</label>
              <input className='col-3' type="text" id='tbx_key' ref={keyRef} />
              <label className='col-2' htmlFor='tbx_value'>Value</label>
              <input className='col-3' type="text" id='tbx_value' ref={valueRef} />
              <div className='col-2'>
                <button className="btn btn-primary" type="submit" onClick={onSave}>Save</button>
              </div>
            </div>
            <div className="row mt-5 justify-content-end">            
              <button className="btn btn-secondary col-4" type="button" onClick={clearAll}>Clear all local storage</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
