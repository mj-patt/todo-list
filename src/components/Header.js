import React from 'react'

export const Header = ({sortAsc, sortDesc}) => {
    return (
        <div>
            <button onClick={()=>sortAsc()}>sort Asc</button>
            <button onClick={()=>sortDesc()}>sort Desc</button>
        </div>
    )
}