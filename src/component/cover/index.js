import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './index.css'

import { fetchCity } from '../../repository/zomato'

const Cover = () => {

    const [ cityQuery, setCityQuery ] = useState( "Jakarta" );
    const [ cityList, setCityList ] = useState( [ { id: 74, name: 'Jakarta'} ] );

    const getCitySuggestion = async ( cityQuery ) => {

        const res = fetchCity( cityQuery );
        let result = undefined;

        res.then( ( { data: { location_suggestions } } ) => {
            result = location_suggestions.map( ( { id, name} ) => ( { id : id, name : name } ) );
        } );

        return result;

    };

    const onChangeCityInputText = ( e ) => {

        let citySuggestion = getCitySuggestion( e.target.value );
        setCityList( citySuggestion );

    };

    const onClickChangeCityButton = ( e ) => {

        console.log( "Change City" );

    };

    return (
        <header className='content d-flex align-items-center'>
            
            <div className='container'>

                <div className='row justify-content-md-center'>
                    <div className='col-5'><h1 className='title'>GOZOMATO</h1></div>
                </div>

                <div className='row justify-content-md-center'>
                    <div className='col-6'>
                        <InputGroup>
                            <FormControl
                                placeholder="Choose City"
                                value={cityQuery}
                                onChange={ e => onChangeCityInputText(e) }
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

            </div>
            
        </header>
    );
    
};

export default Cover;
