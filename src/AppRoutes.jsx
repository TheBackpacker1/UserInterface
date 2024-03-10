import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import CryptoDetail from  './pages/CryptoDetail'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        </Routes>
    )
}
export default AppRoutes