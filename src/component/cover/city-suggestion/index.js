import React from 'react'
import { ListGroup } from 'react-bootstrap'
import './index.css'

const CitySuggestion = ( props ) => {

    return (
        <ListGroup.Item 
            className='position-relative ' 
            action 
            onClick={ props.onClick }
        >
            { props.name }
        </ListGroup.Item>
    )
}

export default CitySuggestion
