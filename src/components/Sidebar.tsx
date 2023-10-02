import React from 'react'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'

export default function Sidebar() {
  return (
    <div className="w-[30%] h-[100vh] border-r p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">노트</h1>
        <div className="flex items-center">
          <button>
            <AiOutlineDelete size={20} className="mr-2" />
          </button>
          <button>
            <AiOutlinePlus size={20} />
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-scroll">
        <div className="p-2 cursor-pointer transition duration-200 hover:bg-gray-100">
          <div>
            <strong>제목</strong>
          </div>
          <p>노트의 내용입니다.</p>
          <small>마지막 수정일</small>
        </div>
      </div>
    </div>
  )
}
