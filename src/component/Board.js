import React from 'react'

export default function Board() {
    function onSubmit(e) {
        e.preventDefault();
    }

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    

  return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>제목</label>
            <input type="text" placeholder="" />
        </div>
        <div className="input_area">
            <label>내용</label>
            <input type="text" placeholder="" />
        </div>
        <button>저장</button>
    </form>
  )
}
