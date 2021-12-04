import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services.js/cryptoAPI'
import { Cryptocurrencies, News } from '../components';


export default function HomePage() {

    const { data, isFetching} = useGetCryptosQuery(20);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading Information...'
    return (
    <>
    <Typography.Title level={2} className='heading'>
        Global Crypto Statistics
    </Typography.Title>
    <Row>
        <Col span={6}><Statistic title='Total Cryptocurrencies' value={globalStats.total}></Statistic></Col>
        <Col span={6}><Statistic title='Total Exchanges' value={globalStats.totalExchanges}></Statistic></Col>
        <Col span={6}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={6}><Statistic title='Total 24h Volume' value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={6}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}></Statistic></Col>
 
    </Row>
    <div className='home-heading-container'>
        <Typography.Title level={2} className="home-title" >Top 10 Cryptocurrencties in the world</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
        </div>
        <Cryptocurrencies simplified />

        <div className='home-heading-container'>
        <Typography.Title level={2} className="home-title" >Latest Crypto news around you</Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
        </div>
        <News simplified />

    </>
    )
}
