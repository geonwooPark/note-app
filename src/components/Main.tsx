import React, { useEffect, useState } from 'react'
import { NoteType } from '../App'
import ReactQuill from 'react-quill'
import Toolbar from './Toolbar'

interface MainProps {
  currentNote: NoteType | null
  setCurrentNote: React.Dispatch<React.SetStateAction<NoteType | null>>
  notes: NoteType[]
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>
}

export default function Main({
  currentNote,
  setCurrentNote,
  notes,
  setNotes,
}: MainProps) {
  const modules = {
    toolbar: {
      container: '#toolbar',
      handlers: {},
    },
  }

  const [currentContent, setCurrentContent] = useState('')

  const onUpdateNotes = (updatedNote: NoteType) => {
    const updatedCurrentNote = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      } else {
        return note
      }
    })
    setNotes(updatedCurrentNote)
  }

  const onChange = (value: any) => {
    if (!currentNote) {
      return
    }
    const updatedNote = {
      ...currentNote,
      content: value,
      modDate: Date.now(),
    }
    onUpdateNotes(updatedNote)
    setCurrentNote(updatedNote)
    setCurrentContent(value)
  }

  useEffect(() => {
    if (currentNote) {
      setCurrentContent(currentNote.content)
    }
  }, [currentNote])

  return currentNote ? (
    <div className={`w-[80%] h-[100vh] ${currentNote.lock && 'cursor-lock'}`}>
      <Toolbar />
      <ReactQuill
        className="w-full h-full bg-gray-100"
        modules={modules}
        value={currentContent}
        readOnly={currentNote.lock}
        theme="snow"
        onChange={onChange}
      />
    </div>
  ) : (
    <div className="w-[80%] flex justify-center items-center text-2xl text-gray-400">
      {notes.length === 0
        ? '새로운 노트를 만들어보세요!'
        : '노트를 선택해주세요.'}
    </div>
  )
}
