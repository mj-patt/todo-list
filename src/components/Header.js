import React from 'react'

export const Header = ({sortAsc, sortDesc, sortOri, cleanUp}) => {
    return (
        <div>
            <button onClick={()=>cleanUp()}>Delete Completed Tasks</button>
            <button onClick={()=>sortAsc()}>sort Asc</button>
            <button onClick={()=>sortDesc()}>sort Desc</button>
            <button onClick={()=>sortOri()}>Show Original</button>

        </div>
    )
}