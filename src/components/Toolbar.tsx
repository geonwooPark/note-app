import React from 'react'

export default function Toolbar() {
  return (
    <div id="toolbar" className="h-[48px] flex items-center p-2">
      <select className="ql-header mr-2">
        <option value="1">Header 1</option>
        <option value="2">Header 2</option>
        <option value="3">Header 3</option>
        <option value="4">Header 4</option>
        <option value="5">Header 5</option>
        <option value="6">Header 6</option>
      </select>

      <button className="ql-bold mr-1"></button>
      <button className="ql-italic mr-1"></button>
      <button className="ql-underline mr-1"></button>
      <button className="ql-strike"></button>
      {/* <div className="ql-dropdown relative">
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
              <li value={1} className="py-2 border-b">
                <button type="button">제목</button>
              </li>
              <li value={2} className="py-2 border-b">
                <button type="button">머릿말</button>
              </li>
              <li value={3} className="py-2 border-b">
                <button type="button">부머릿말</button>
              </li>
              <li value={4} className="py-2 border-b">
                <button type="button">본문</button>
              </li>
              <li value={5} className="py-2">
                <button type="button">목록</button>
              </li>
            </ul>
          </Dropdown>
        </div>
      </div> */}
    </div>
  )
}
