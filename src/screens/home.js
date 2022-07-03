import React, { useState } from 'react'
import {
    Box,
    Center, Image
} from '@chakra-ui/react';
import { AirQualityResults } from '../components/airquality-results';
import { Input, InputGroup, Spinner, IconButton,  } from '@chakra-ui/react'
import { SearchIcon, ViewIcon } from '@chakra-ui/icons'

import axios from 'axios';
import Search from '../components/search';

export const Home = () => {
    const [inputData, setInputData] = useState('');
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleChange = (e) => {
        setInputData(e.target.value)
    };

    const handleClick = async (e) => {
        setLoading(true);
        e.preventDefault()
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const options = {
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": `application/json;charset=utf-8`
                }
            };
            const {data} = await axios.get(`https://api.ambeedata.com/latest/by-city?city=${inputData}`, options)
            
            if (data.err) {
                throw new Error(data.err)
            }
            setData(data.stations[0])
            console.log(data.stations[0])
            setLoading(false);
            setInputData('')
            localStorage.setItem("lng", data.stations[0].lng);
            localStorage.setItem("lat", data.stations[0].lat);
        } catch {
            console.warn("There's an error!!! Cannot fetch data!")
            setError('Oops, please try again!')
            setLoading(false);
        }
    }

    const fetchEmissions = () => {
        const apiKeyClim = process.env.REACT_APP_CLIMATIQ;
        return fetch('https://beta3.api.climatiq.io/estimate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKeyClim}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "emission_factor": "passenger_vehicle-vehicle_type_black_cab-fuel_source_na-distance_na-engine_size_na",
                "parameters": {
                    "passengers": 4,
                    "distance": 100,
                    "distance_unit": "mi"
                }
            })
        })
            .then(res => res.json())
    }


    return (
        <>
        <Search />
        <Box boxSize='sm' minW={'100%'} w={'100%'} h={'50%'}bgSize={'cover'} bgImage="url('/assets/hills.png')" bottom={0} bgRepeat="no-repeat" objectFit='fill' position={'fixed'} opacity='75%'>
        </Box>
            {/* <Box minH="100vh">
                <Box textAlign="center" fontSize="xl">
                    <Box spacing={8}>
                        <Center p={60}>
                            <form onSubmit={handleClick}>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        placeholder='Enter a location...'
                                        onChange={handleChange}
                                        value={inputData}
                                    />
                                    {loading ? <Spinner size='lg' colorScheme='teal' variant='solid'></Spinner> :
                                        <IconButton aria-label='Search database' colorScheme='teal' type='submit' icon={<SearchIcon />} />
                                        // <Button >search</Button>
                                    }
                                </InputGroup>
                            </form>
                            {data ? <IconButton onClick={fetchEmissions} aria-label='Search database' icon={<ViewIcon />} /> : ''}
                        </Center>
                    </Box>
                </Box>
                {data ? <AirQualityResults data={data} /> : ""}
                <Nav />
            </Box> */}
        </>
    );
}
