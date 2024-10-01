
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "primereact/card"
import { Sparklines, SparklinesLine } from "react-sparklines";

import './MarketTrend.css'
const MarketTrend = () => {
    const [coinData, setCoinData] = useState([])

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await axios.get(

                    'https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 4,
                        page: 1,
                        sparkline: true


                    }


                })
                console.log(response.data);

                setCoinData(response.data)


            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchCoinData()
    }, [])


    return (
        <div className="market-trend-section">
            <h2>Market Trend</h2>
            <div className="coin-card-container">
                {coinData.map((coin) => (
                    <Card
                        key={coin.id}
                        style={{ width: '250px', margin: '20px' }}
                        className="coin-card"
                    >
                        <div className="coin-card-header">
                            <img src={coin.image} alt={`${coin.name} icon`} className="coin-icon" />
                            <div className="coin-info">
                                <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                                <span className="coin-name">{coin.name}</span>
                            </div>
                        </div>

                        <div className="coin-price">${coin.current_price.toLocaleString()}</div>

                        <div className={`coin-percentage ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'} `}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>

                        <div className="coin-trend-line">
                        <Sparklines data={coin.sparkline_in_7d.price} limit={20}>
                                <SparklinesLine color={coin.price_change_percentage_24h >= 0 ? "#26a69a" : "#e57373"} />
                            </Sparklines>
                        </div>




                    </Card>

                )




                )}


            </div>
        </div>
    )
}

export default MarketTrend