import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import { Link } from 'react-router-dom' 

const TrendingMarket = () => {

    const cryptoData = [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          change: '+55.98%',
          price: '$11,743.00',
          marketCap: '$245,39M',
        },
        {
          name: 'Ethereum',
          symbol: 'ETH',
          change: '-10.11%',
          price: '$8,857.00',
          marketCap: '$784,12M',
        },
        {
          name: 'LUNA',
          symbol: 'L',
          change: '+75.74%',
          price: '$9,828.00',
          marketCap: '$586,33M',
        },
        {
          name: 'BNB',
          symbol: 'BNB',
          change: '+28.14%',
          price: '$15,263.00',
          marketCap: '$110,94M',
        },
        {
          name: 'ADA',
          symbol: 'ADA',
          change: '-62.37%',
          price: '$7,214.00',
          marketCap: '$547,12M',
        },
      ]


  return (
    <div>
     <div className="p-grid">
      <div className="p-col-12">

        <h1>Trending Market </h1>
      </div>
      <div className="p-col-12" >
      <DataTable value={cryptoData}>
        <Column field='name' header='Name' />
        <Column field='symbol' header='Symbol'/>
        <Column field='change' header='24H Change' />
        <Column field='price' header='Last Price' />
        <Column field='marketCap' header='Market Cap' />
        <Column body={(rowData) => <Link to={`/crypto/${rowData.symbol}`}> Details </Link>} headerStyle={{ textAlign:'center',width:'10%'}} />
      </DataTable>

      </div>



     </div>

    </div>
  )
}

export default TrendingMarket