import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './index.css'

import { ListGroup } from 'react-bootstrap'
import CitySuggestion from './city-suggestion'

import { fetchCity } from '../../repository/zomato'

const Cover = ( props ) => {

    const {
        cityQuery, 
        setCityQuery,
        setCityQueryId,
        setDoSearch
    } = props;
    
    const [ isCityInputFocused, setIsCityInputFocused ] = useState( false );
    const [ cityList, setCityList ] = useState( [] );

    const onChangeCityInputText = ( e ) => {

        setCityQuery( e.target.value );
        setCityQueryId( undefined );

    };

    const onClickChangeCityButton = ( e ) => {
        setDoSearch( true );
    };

    const onClickCitySuggestion = ( e, name, id ) => {
        setCityQuery( name );
        setCityQueryId( id );
        setIsCityInputFocused( false );
    }

    const onFocusCityInputText = () => {
        setIsCityInputFocused( true );
    };


    useEffect( (  ) => {

        let citySuggestion = fetchCity( cityQuery );
        citySuggestion.then( ( { data: { location_suggestions } } ) => {

            let res = Object.values( location_suggestions );
            res = res.map( ( data ) => ( { id: data.id, name: data.name } ) );
            setCityList( res );

        } );
        
    }, [ cityQuery ]);

    return (
        <header className='content d-flex align-items-center'>
            
            <div className='container'>

                <div className='row justify-content-md-center'>
                    <div className='col-sm-5'><h1 className='title'>GOZOMATO</h1></div>
                </div>

                <div className='row justify-content-md-center'>
                    <div className='col-sm-6'>
                        <InputGroup>
                            <FormControl
                                placeholder="Choose City"
                                value={cityQuery}
                                onChange={ e => onChangeCityInputText(e) }
                                onFocus={onFocusCityInputText}
                            />
                            <InputGroup.Append>
                                <Button 
                                    variant="primary" 
                                    onClick={ e => onClickChangeCityButton(e) }
                                >Change City</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        
                    </div>
                </div>

                <div className='row position-relative d-flex justify-content-md-center'>

                    <div className='container' id='suggestion'>

                        <div className='row d-flex justify-content-md-center'>
                            <div className='col-sm-6 position-absolute'>
                                {
                                    isCityInputFocused && cityList.length !== 0 ? 
                                        <ListGroup className=''>
                                        {
                                            cityList.map( ( city, idx ) => (
                                                <CitySuggestion 
                                                    name={city.name} 
                                                    onClick={ e => onClickCitySuggestion( e, city.name, city.id )}
                                                />
                                            ) )
                                        }
                                        
                                    </ListGroup>
                                    :
                                    ""
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            
        </header>
    );

};

export default Cover;
