import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

export interface NoteType {
  id: string
  title: string
  content: string
  modDate: number
}

function App() {
  const [notes, setNotes] = useState<NoteType[]>([])

  const onAddNote = () => {
    const newNote: NoteType = {
      id: uuid(),
      title: '새로운 노트',
      content: '내용을 입력하세요.',
      modDate: Date.now(),
    }
    setNotes([newNote, ...notes])
  }

  const onDeleteNote = (currentNote: string | null) => {
    if (!currentNote) return
    const result = notes.filter((note) => note.id !== currentNote)
    setNotes(result)
  }

  return (
    <div className="w-full h-[100vh] overflow-hidden flex">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
      />
      <Main />
    </div>
  )
}

export default App
