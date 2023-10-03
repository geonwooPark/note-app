import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { NoteType } from '../App'
import Note from './Note'

interface SidebarProps {
  onAddNote: () => void
  onDeleteNote: (currentNote: string | null) => void
  notes: NoteType[]
}

export default function Sidebar({
  onAddNote,
  onDeleteNote,
  notes,
}: SidebarProps) {
  const [currentNote, setCurrentNote] = useState<string | null>(null)

  return (
    <div className="w-[30%] h-[100vh] border-r p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">노트</h1>
        <div className="flex items-center">
          <button onClick={() => onDeleteNote(currentNote)}>
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
