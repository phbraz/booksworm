import './App.css'
import { NavBar } from "./Components/Core/Navbar";
import { InternalMenu } from "./Components/Core/InternalMenu";
import { BookSearch } from "./Components/BookSearch";

function App() {
  return (
      <>
          <div className="flex flex-row h-screen">
              <InternalMenu/>
              <NavBar title="Radical"/>
          </div>
      </>
  )
}

export default App
