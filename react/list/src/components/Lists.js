import React from 'react'

function Lists({lists, isLoading, error }) {
  return (
    <div>
        {isLoading && <i>Loading...</i>}
        {error && <i>error fetching lists</i>}
        <ul>
            {lists.map((list) => (
            <li key={list.id}><h3>{list.title}</h3> - <i>{ list.body }</i></li>
        ))}
        </ul>  
        
    </div>
  )
}

export default Lists
