import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const RestoCard = ( { name, url, price_range, cuisines, thumb, rating } ) => {

    rating = Math.round(rating);
    const price = [];
    const ratings = [];

    for (let i = 0; i < 5; i++) {
        price.push( <span style={ { color:  i < price_range ? 'black' : '#dedede'  } }><b>$</b></span>);
        ratings.push( <span style={ { color:  i < rating ? 'gold' : '#dedede'  } }>&#9733;</span> );
    }

    return (
        <Card style={{ width: '100%', height: '100%' }}>
            <a href={url} style={ { textDecoration: 'none', color: 'black' } }>
                <Card.Img variant="top" src={thumb ? thumb : 'https://via.placeholder.com/150'} />
                <Card.Body className='container'>
                    <Row className='align-items-center'>
                        <Col sm='12'> 
                            <Card.Title>{name}</Card.Title> 
                        </Col>
                    </Row>

                    <Row className='align-items-center'>
                        <Col sm='7'> 
                            <Card.Text>{cuisines}</Card.Text>
                        </Col>
                        <Col sm='5'> 
                            <Card.Text>
                                • {price}
                            </Card.Text>
                        </Col>
                        
                    </Row>

                    <Row className='align-items-center'>
                        <Col sm='12'> 
                            <Card.Title>{ratings}</Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </a>
        </Card>
    )
}

export default RestoCard
