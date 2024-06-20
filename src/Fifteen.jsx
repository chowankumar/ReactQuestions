import React from 'react'

const Fifteen = () => {
    let students = [];
  return (
    // <div>
    //     <p>{students.length && "studen not found"}</p>
    //     <p>num of student is : {students.length}</p>
    // </div>

    // method one
    // <div>
    // <p>{students.length === 0 && "studen not found"}</p>
    // <p>num of student is : {students.length}</p>
    // </div>

    //method  two
    <div>
    <p>{!students.length  && "studen not found"}</p>
    <p>num of student is : {students.length}</p>
    </div>

  )
}

export default Fifteen