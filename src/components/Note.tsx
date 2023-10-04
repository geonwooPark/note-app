import React from 'react'
import { timeForToday } from '../utils/timeForToday'
import { NoteType } from '../App'

interface NoteProps {
  note: NoteType
  currentNote: NoteType | null
  setCurrentNote: React.Dispatch<React.SetStateAction<NoteType | null>>
}

export default function Note({ note, currentNote, setCurrentNote }: NoteProps) {
  return (
    <div
      key={note.id}
      onClick={() => {
        setCurrentNote(note)
      }}
      className={`p-2 rounded-md
       cursor-pointer transition duration-200 hover:bg-gray-100 ${
         currentNote?.id === note.id && 'bg-yellow-300 hover:bg-yellow-300'
       }`}
    >
      <div className="truncate">
        <strong>{note.content ? note.content : '새로운 노트'}</strong>
      </div>
      <small>{timeForToday(note.modDate)}</small>
    </div>
  )
}
