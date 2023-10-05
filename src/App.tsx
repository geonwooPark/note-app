import { useEffect, useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

export interface NoteType {
  id: string
  content: string
  modDate: number
  lock: boolean
}

function App() {
  const [notes, setNotes] = useState<NoteType[]>(
    JSON.parse(localStorage.getItem('notes') as string) || [],
  )
  const [currentNote, setCurrentNote] = useState<NoteType | null>(null)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

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
