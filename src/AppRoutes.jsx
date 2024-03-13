import { Route, Routes } from 'react-router-dom'
import TrendingMarket from './pages/TrendingMarket';
import CryptoDetail from  './pages/CryptoDetail'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AuthDialog from './pages/AuthDialog'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trendingMarket" element={<TrendingMarket />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/authDialog" element={<AuthDialog />}> </Route>

            <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        </Routes>
    )
}
export default AppRoutes