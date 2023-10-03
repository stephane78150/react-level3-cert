import { Demo } from './Demo';
import { WithDialogsWrapper } from './smart-dialog';

function App() {  
    return (
      <div className="container-fluid p-5">      
        <div className='card'>
          <div className='card-header'>
            <h1>Dialog demo</h1>
          </div>
          <div className='card-body'>
            <p>This is a demo of a Dialog API, try to open a modal or modeless dialog and then use the <em>close button</em>, and check that this button can not be clicked for a modal dialog.</p>
            <p>Whether modal or modeless you can use the X button of the top right corner to close the dialog, though in a real app, you would probably also have other yes, no, ... buttons in the footer.</p>
          </div>
          <div className='card-footer'>
            <WithDialogsWrapper>
            <Demo />      
            </WithDialogsWrapper>    
          </div>
        </div>

    </div>);
}

export default App
