import React from 'react'
import { timeForToday } from '../utils/timeForToday'
import { NoteType } from '../App'
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'

interface NoteProps {
  note: NoteType
  onLock: () => void
  currentNote: NoteType | null
  setCurrentNote: React.Dispatch<React.SetStateAction<NoteType | null>>
}

export default function Note({
  note,
  onLock,
  currentNote,
  setCurrentNote,
}: NoteProps) {
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
      <div className="truncate mb-3">
        <strong>{note.content ? note.content : '새로운 노트'}</strong>
      </div>
      <div className="flex justify-between text-gray-500">
        <small>{timeForToday(note.modDate)}</small>
        {currentNote?.id === note.id && (
          <span onClick={onLock}>
            {!note.lock ? <AiOutlineUnlock /> : <AiOutlineLock />}
          </span>
        )}
      </div>
    </div>
  )
}
