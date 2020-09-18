import React, { useState, useEffect } from 'react';
import Cover from './component/cover';
import Content from './component/content';
import { fetchRestaurant } from './repository/zomato'

function App() {

	const [ cityQuery, setCityQuery ] = useState( "Jakarta" );
	const [ cityQueryId, setCityQueryId ] = useState( 74 );
	const [ doSearch, setDoSearch ] = useState( true );
	const [ restaurantList, setRestaurantList ] = useState( [ ] );
	
	useEffect( () => {

		if( doSearch ){

			if( cityQueryId !== undefined ) {

				let restaurant = fetchRestaurant( cityQueryId );
				restaurant.then( ( { data: { restaurants } } ) => {

					let res = Object.values( restaurants );
					res = res.map( ( { restaurant } ) => ( { 
						name: restaurant.name, 
						url: restaurant.url, 
						price_range: restaurant.price_range, 
						cuisines: restaurant.cuisines, 
						thumb: restaurant.thumb, 
						rating: restaurant.user_rating.aggregate_rating, 
					} ) );

					setRestaurantList( res );
					setDoSearch( false );

				} );

			}
			else {
				setRestaurantList( [ ] );
				setDoSearch( false );
			}

		}
		
	}, [ doSearch ] );

    return (
		<div className="App">
			<Cover 
				cityQuery={cityQuery}
				setCityQuery={setCityQuery}
				setCityQueryId={setCityQueryId}
				setDoSearch={setDoSearch}
			/>
			<Content
				doSearch={doSearch}
				restaurantList={restaurantList}
			/>
		</div>
    );
}

export default App;
