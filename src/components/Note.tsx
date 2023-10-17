import React from 'react'
import { timeForToday } from '../utils/timeForToday'
import { NoteType } from '../App'
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'
import Parser from 'html-react-parser'

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
      className={`relative flex flex-col justify-between h-[80px] p-2 cursor-pointer rounded-md transition duration-200 hover:bg-gray-100 ${
        currentNote?.id === note.id && 'bg-yellow-300 hover:bg-yellow-300'
      }`}
      onClick={() => {
        setCurrentNote(note)
      }}
    >
      <div key={note.id} className={`h-[24px]	overflow-y-hidden`}>
        <div className="truncate mb-3">
          <strong>
            {note.content !== '<p><br></p>'
              ? Parser(note.content)
              : '새로운 노트'}
          </strong>
        </div>
      </div>
      <div className="flex justify-between text-gray-500">
        <small>{timeForToday(note.modDate)}</small>
        {currentNote?.id === note.id && (
          <span onClick={onLock}>
            {!note.lock ? <AiOutlineUnlock /> : <AiOutlineLock />}
          </span>
        )}
      </div>
      <div
        className={`absolute bottom-0 w-[calc(100%-16px)] h-[2px] mx-auto bg-gray-100         
              ${currentNote?.id === note.id ? 'bg-yellow-300' : 'bg-gray-100'}`}
      ></div>
    </div>
  )
}
