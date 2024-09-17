import { Route, Routes } from 'react-router-dom'
import TrendingMarket from './pages/TrendingMarket';
import CryptoDetail from  './pages/CryptoDetail'
import Profile from './pages/Profile';
import AuthDialog from './pages/AuthDialog'
import LandingPage from './pages/LandingPage/LandingPage'
import  {useState} from 'react'
import Layout from './components/Layout';
const AppRoutes = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <Routes>

            <Route path="/" element={<LandingPage />} />

            <Route element={<Layout />}>
                <Route path="/trendingMarket" element={<TrendingMarket />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/authDialog" element={<AuthDialog showDialog={showDialog} setShowDialog={setShowDialog} />} />
                <Route path="/crypto/:symbol" element={<CryptoDetail />} />
            </Route>
           
        </Routes>
    )
}
export default AppRoutes