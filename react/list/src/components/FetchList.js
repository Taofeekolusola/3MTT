import React from 'react'
import { useEffect, useState } from 'react'
import Lists from './Lists'

function FetchList() {
    const [lists, setLists] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(data => {
                setLists(data)
                setIsLoading(false)
                console.log(data)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }, [])
  return (
      <div>
          <Lists error={error} isLoading={isLoading} lists={lists} />
    </div>
  )
}

export default FetchList
