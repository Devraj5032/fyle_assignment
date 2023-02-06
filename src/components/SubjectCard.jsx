import React from 'react'

const SubjectCard = ({subject}) => {
  return (
    <div className='bg-slate-300 text-xl p-4 rounded-lg'>
        <p>{subject}</p>
    </div>
  )
}

export default SubjectCard