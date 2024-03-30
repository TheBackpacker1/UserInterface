import { useParams } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios' 
import { useEffect, useState } from 'react';




const CryptoDetail = () => {
  const { symbol } = useParams();
 const [cryptoData,setCryptoData]=useState(null)
 const[isLoading, setIsLoading]=useState(true)
 const[token,setToken]=useState(null)

 const retrieveToken=()=> { 
try { 

     const storedToken = localStorage.getItem('auth_token')
     if(storedToken){
      setToken(storedToken)

}
}
catch (error) { 
  console.error('Error retrieving token:',error)
}

 
}


useEffect(() =>  {
retrieveToken()
const fetchData =async()=> {

try {
const response = await axios.get('/ma')



}




}


})

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
