import axios from 'axios'
import React, { useState } from 'react'

const ViewTkRw = ({id}) => {
    const [tFn, setTfn] = useState('')
    const [tLn, setTLn] = useState('')

    axios.get(`http://127.0.0.1:3001/api/emp/${id}`)
    .then(res => {
      setTfn(res.data.firstName)
      setTLn(res.data.lastName)
    })
    .catch(err => console.log(err))

  return (
    <td className="text-capitalize">{tFn} {tLn}</td>
  )
}

export default ViewTkRw
