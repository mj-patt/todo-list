import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
export const Header = ({sortAsc, sortDesc, sortOri, cleanUp}) => {
    return (
        <div className="d-flex justify-content-between BtnCluster">
            <div className='d-flex justify-content-between SortBtns'>
                <p className='SortText'>Sort</p>
                <button className="Sort" onClick={()=>sortAsc()}><FontAwesomeIcon icon={faChevronUp} className="SortIcon"/></button>
                <button className="Sort" onClick={()=>sortDesc()}><FontAwesomeIcon icon={faChevronDown} className="SortIcon"/></button>
                <button className="Sort" onClick={()=>sortOri()}><FontAwesomeIcon icon={faXmark} className="SortIcon"/></button>
            </div>

            <button className="CleanUpBtn" onClick={()=>cleanUp()}>Clear Completed Tasks</button>
        </div>
        
    )
}