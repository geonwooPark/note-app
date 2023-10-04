import React, { useEffect, useState } from 'react'
import {
  AiFillCaretDown,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
} from 'react-icons/ai'
import Dropdown from './Dropdown'
import { NoteType } from '../App'

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
  const [showDropDownList, setShowDropDownList] = useState(false)
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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <div className="h-[48px] border-b flex justify-between items-center p-2">
        <div className="relative">
          <div className="flex items-center text-sm relative z-10">
            <button
              type="button"
              className="text-left bg-white w-[100px] md:w-[200px] px-4 py-1 flex items-center justify-between border rounded-sm"
              onClick={() => {
                setShowDropDownList(!showDropDownList)
              }}
            >
              {showDropDownList ? '닫기' : '스타일'}
              <AiFillCaretDown
                className={`transition duration-200 ease-in-out ${
                  showDropDownList && 'rotate-180'
                }`}
              />
            </button>
          </div>

          <div className="absolute overflow-hidden">
            <Dropdown visibility={showDropDownList}>
              <ul className="bg-white w-[100px] md:w-[200px] px-4 text-left border shadow-md rounded-sm text-sm">
                <li className="py-2 border-b">
                  <button type="button">제목</button>
                </li>
                <li className="py-2 border-b">
                  <button type="button">머릿말</button>
                </li>
                <li className="py-2 border-b">
                  <button type="button">부머릿말</button>
                </li>
                <li className="py-2 border-b">
                  <button type="button">본문</button>
                </li>
                <li className="py-2">
                  <button type="button">목록</button>
                </li>
              </ul>
            </Dropdown>
          </div>
        </div>

        <div className="flex items-center">
          <button className="mr-1">
            <AiOutlineBold size={20} />
          </button>
          <button className="mr-1">
            <AiOutlineItalic size={20} />
          </button>
          <button className="mr-1">
            <AiOutlineUnderline size={20} />
          </button>
          <button>
            <AiOutlineStrikethrough size={20} />
          </button>
        </div>
      </div>
      <textarea
        name="textarea"
        className="w-full h-full px-3 py-2 bg-gray-100 outline-none resize-none"
        value={currentContent}
        onChange={onChange}
      ></textarea>
    </div>
  )
}
