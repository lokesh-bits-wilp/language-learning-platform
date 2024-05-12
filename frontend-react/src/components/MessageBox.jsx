import React from 'react'

function MessageBox(data) {
  return (
    <div className={`left-1/4 top-5 absolute w-8/12 h-10 bg-green-200 border-2 border-green-200 shadow-green-800 shadow-xl rounded-full`}>
    <h1 className="p-2 text-center font-bold">{data.message}</h1>
  </div>
  )
}

export default MessageBox