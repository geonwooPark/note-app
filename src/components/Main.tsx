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

  const onChange = (e: any) => {
    if (!currentNote) {
      return
    }
    const { value } = e.target
    const updatedNote = {
      id: currentNote.id,
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

  return (
    <div className="w-[80%] h-[100vh]">
      <Toolbar />
      <ReactQuill
        className="w-full h-full bg-gray-100"
        modules={modules}
        onChange={onChange}
      />
    </div>
    //   <textarea
    //   name="textarea"
    //   className="w-full h-full px-3 py-2 bg-gray-100 outline-none resize-none"
    //   value={currentContent}
    //   onChange={onChange}
    // ></textarea>
    // )
  )
}
