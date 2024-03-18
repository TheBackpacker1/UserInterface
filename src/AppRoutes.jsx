import { Route, Routes } from 'react-router-dom'
import TrendingMarket from './pages/TrendingMarket';
import CryptoDetail from  './pages/CryptoDetail'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AuthDialog from './pages/AuthDialog'
import  {useState} from 'react'
const AppRoutes = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trendingMarket" element={<TrendingMarket />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/authDialog" element={<AuthDialog showDialog={showDialog} setShowDialog={setShowDialog} />}> </Route>

            <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        </Routes>
    )
}
export default AppRoutes