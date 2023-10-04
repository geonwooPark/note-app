import React from 'react'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { NoteType } from '../App'
import Note from './Note'
import uuid from 'react-uuid'

interface SidebarProps {
  currentNote: NoteType | null
  setCurrentNote: React.Dispatch<React.SetStateAction<NoteType | null>>
  notes: NoteType[]
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>
}

export default function Sidebar({
  currentNote,
  setCurrentNote,
  notes,
  setNotes,
}: SidebarProps) {
  const onAddNote = () => {
    const newNote: NoteType = {
      id: uuid(),
      content: '',
      modDate: Date.now(),
    }
    setNotes([newNote, ...notes])
    setCurrentNote(newNote)
  }

  const onDeleteNote = () => {
    if (!currentNote) return
    const result = notes.filter((note) => note.id !== currentNote.id)
    setNotes(result)
    setCurrentNote(null)
  }

  return (
    <div className="w-[20%] min-w-[160px] h-[100vh] border-r p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">노트</h1>
        <div className="flex items-center">
          <button onClick={() => onDeleteNote()}>
            <AiOutlineDelete size={20} className="mr-2" />
          </button>
          <button onClick={onAddNote}>
            <AiOutlinePlus size={20} />
          </button>
        </div>
      </div>
      <div className="h-[calc(100vh-72px)] overflow-y-scroll">
        <div>
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
