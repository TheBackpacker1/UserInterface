import { useParams } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const CryptoDetail = () => {
  const { symbol } = useParams();

  const cryptoData = {
    token: 'BTC',
    symbol: 'B',
    change: '+55.98%',
    price: '$11,743.00',
    marketCap: '$245,39M',
    supply: '19,123,123',
    volume: '$12,345,678',
    high: '$12,345.00',
    low: '$10,567.00',
  };

  return (
    <div className="p-grid">
      <div className="p-col-12">
        <h1> Crypto Detail - {symbol.toUpperCase()} </h1>
      </div>
      <div
        className="p-col-12 p"
        style={{
          backgroundColor: 'var(--highlight-bg)',
          color: 'var(--highlight-text-color)',
          borderRadius: 'var(--border-radius)',
          padding: '3rem',
        }}
      >
        <DataTable value={[cryptoData]}>
          <Column field="token" header="Token" />
          <Column field="symbol" header="Symbol" />
          <Column field="change" header="24H Change" />
          <Column field="price" header="Last Price" />
          <Column field="marketCap" header="Market Cap" />
          <Column field="supply" header="Circulating Supply" />
          <Column field="volume" header="Volume (24H)" />
          <Column field="high" header="24H High" />
          <Column field="low" header="24H Low" />
        </DataTable>
      </div>
    </div>
  );
};

export default CryptoDetail
