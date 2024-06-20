import React, { useEffect, useState } from 'react'

const Six = () => {
  
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((response)=> response.json())
        .then((json)=> setData(json))

    },[])

  return (
    <div>
        {
            data?(
                <div>
                    title : {data.title}
                    <br />
                    id : {data.id}
                    <br />
                    userId : {data.userId}
                    <br />
                    body : {data.body}
                </div>
            ):
            (
                <div>
                    <p>Loading.....</p>
                </div>
            )
        }
    </div>
  )
}

export default Six