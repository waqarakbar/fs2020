import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const CountryList = ({countries}) => {
	
	if(countries.length === 1){
		return (
			<div>
				{ countries.map(country => <CountryDetails key={country.alpha3Code} country={country} />) }
			</div>
		)
	}else if(countries.length > 1 && countries.length <= 10){
		return (
			<div>
				{ countries.map(country => <Country key={country.alpha3Code} country={country} />) }
			</div>
		)
	}else if(countries.length < 1){
		return (
			<div>
				<p>No matching country found</p>
			</div>
		)
	}else{
		return (
			<div>
				<p>Too many matches, specifiy another filter</p>
			</div>
		)
	}
}

export default CountryList