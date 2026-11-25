import { useState } from 'react'
import LibraryButton from './Components/LibraryButton'
import LibraryBooks from './Components/LibraryBooks'
import Libraryfooter from './Components/Libraryfooter'
import LibraryDecribe from './Components/LibraryDecribe'
import LibraryLogin from './Components/LibraryLogin'
import Office from './Components/Office'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <div>
        <header>
          <h1>Clinic management System</h1>
        </header>
        <p>This is my clinic management system that will help you manage the appointments.</p>
        <main>

          <Office/>
            
            {/*<LibraryLogin/>
            <LibraryBooks />
            <LibraryButton />
            <LibraryDecribe />*/}

            
          
        </main>
        <Libraryfooter />
      </div>
      
    </>
  )
}

export default App