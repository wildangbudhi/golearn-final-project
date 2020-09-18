import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import RestoCard from './resto-card'

const Content = ( { restaurantList, doSearch } ) => {
    return (
        <Container className='pt-5'>
            <Row className='justify-content-md-left'>

                {
                    !doSearch && restaurantList.length !== 0 ?
                    <Col sm='12' className='mb-3'>
                        <h2>Feel free to choose you favorite meals</h2>
                    </Col> 
                    : ""
                }
                {
                    doSearch ? 
                    <Col sm='12' className='align-items-center text-center'>
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="danger" className='ml-3 mr-3' />
                        <Spinner animation="grow" variant="warning" />
                    </Col>
                    :
                    restaurantList.length === 0 ?
                    <Col sm='12' className='mt-5 align-items-center text-center'>
                        <h3>Opss... There is no restaurant...</h3>
                    </Col>
                    :
                    restaurantList.map( ( restaurant, idx ) => (
                        <Col sm='3' className='mb-5'>
                            <RestoCard
                                name={restaurant.name}
                                url={restaurant.url} 
                                price_range={restaurant.price_range} 
                                cuisines={restaurant.cuisines} 
                                thumb={restaurant.thumb} 
                                rating={restaurant.rating} />

                        </Col>
                    ) )
                }

            </Row>
        </Container>

    )
}

export default Content
