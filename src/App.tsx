import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="w-full h-[100vh] overflow-hidden flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
