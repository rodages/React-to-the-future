import React from 'react';
import { Box, Center, Stack, Heading, Text } from '@chakra-ui/react';
import DescriptionModal from './DescriptionModal';

export const Results = ({ data }) => {

    const AQImeasures = {
        "0-50":"Good",
        "51-100":"Satisfactory",
        "101-200": "Moderate",
        "201-300":"Poor",
        "301-500":"Hazardous",
    }
    const CarbonMonoxide ={
        //https://www.euro.who.int/__data/assets/pdf_file/0020/123059/AQG2ndEd_5_5carbonmonoxide.PDF
    }

    const NO2={
        //https://www.gov.uk/government/statistics/air-quality-statistics/ntrogen-dioxide
        //The Air Quality Standards Regulations 2010 require that the annual mean concentration of NO2 must not exceed 40 µg/m3 and that there should be no more than 18 exceedances of the hourly mean limit value (concentrations above 200 µg/m3) in a single year.
    }

    const ozone={
        //https://www.irceline.be/en/documentation/faq/why-are-ozone-concentrations-higher-in-rural-areas-than-in-cities

    }

    const pm10={
        //https://www.gov.uk/government/statistics/air-quality-statistics/concentrations-of-particulate-matter-pm10-and-pm25
    }

    const SO2={
        //https://www.euro.who.int/__data/assets/pdf_file/0020/123086/AQG2ndEd_7_4Sulfurdioxide.pdf
    }

    const conditions = {
        'Good': '⭐️', 
        'Moderate': '🤨',
        'Unhealthy': '🤢'}

    function Feature({ title, desc, ...rest }) {
        return (
            <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
            </Box>
        )
        }

    return  (
        <>
        <Center flexDirection={'column'} textAlign="center">
            <Box fontSize={"20px"} p={10}>{data.placeName}, {data.state}, {data.countryCode}</Box>
            <Box>{data.aqiInfo.category}</Box>
            <Box style={{fontSize: "70px"}}>{data.AQI}{conditions[data.aqiInfo.category]}</Box>
            <Box style={{fontSize: "12px"}}>Air Quality Index (AQI)</Box>

            <Stack p={20} spacing={25} direction='row'>

                <DescriptionModal 
                    component={'CO'}
                    title='CO 🍃'
                    value={data.CO} 
                    />

                <DescriptionModal 
                    component={'NO2'}
                    title='NO2 🎈'
                    value={data.NO2} 
                    />
                
                <DescriptionModal 
                    component={'OZONE'}
                    title='OZONE 🌍'
                    value={data.OZONE} 
                    />

                <DescriptionModal 
                    component={'PM10'}
                    title='PM10 ⚛️'
                    value={data.PM10} 
                    />


                <Feature
                    title='PM25 🧪'
                    desc={data.PM25}
                />
                <Feature
                    title='SO2 💨'
                    desc={data.SO2}
                />
            </Stack>
        </Center>
        </>
    )   
};
