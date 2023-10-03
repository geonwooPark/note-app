import React from 'react'
import { timeForToday } from '../utils/timeForToday'
import { NoteType } from '../App'

interface NoteProps {
  note: NoteType
  currentNote: string | null
  setCurrentNote: React.Dispatch<React.SetStateAction<string | null>>
}

export default function Note({ note, currentNote, setCurrentNote }: NoteProps) {
  return (
    <div
      key={note.id}
      onClick={() => setCurrentNote(note.id)}
      className={`p-2 rounded-md
       cursor-pointer transition duration-200 hover:bg-gray-100 ${
         currentNote === note.id && 'bg-yellow-300 hover:bg-yellow-300'
       }`}
    >
      <div>
        <strong>{note.title}</strong>
      </div>
      <p className="text-sm">{note.content}</p>
      <small>{timeForToday(note.modDate)}</small>
    </div>
  )
}
