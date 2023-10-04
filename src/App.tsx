import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

export interface NoteType {
  id: string
  content: string
  modDate: number
}

function App() {
  const [notes, setNotes] = useState<NoteType[]>([])
  const [currentNote, setCurrentNote] = useState<NoteType | null>(null)

  return (
    <div className="w-full h-[100vh] overflow-hidden flex">
      <Sidebar
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        notes={notes}
        setNotes={setNotes}
      />
      <Main
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        notes={notes}
        setNotes={setNotes}
      />
    </div>
  )
}

export default App
