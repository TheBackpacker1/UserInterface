import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = 'http://localhost:8080/CoinMarketData/all';  

const TrendingMarket = () => {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await axios.get(API_URL  , { 
          withCredentials: true  } );
        

        if (response.status === 200) { 
          setCoins(response.data);

        }else { 
          throw new Error(`API request failed with status${response.status}`)
        }
       
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-grid">
        <div className="p-col-12">
          <h1>Trending Market </h1>
        </div>
        <div className="p-col-12" >
          {isLoading && <p> Loading data...</p>}
          {error && <p> Error fetching data : {error.message}</p>}
          {!isLoading && !error && coins.length > 0 && (
            <DataTable value={coins}>
              <Column field="name" header="Name" />
              <Column field="symbol" header="Symbol" />
              <Column field="change" header="24H Change" />
              <Column field="price" header="Last Price" />
              <Column field="marketCap" header="Market Cap" />
              <Column
                body={(rowData) => (
                  <Link to={`/crypto/${rowData.symbol}`}>
                    Details
                  </Link>
                )}
                headerStyle={{ textAlign: 'center', width: '10%' }} />
            </DataTable>
          )}
        </div>

      </div>

    </div>
  )

}
export default TrendingMarket