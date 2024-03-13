import { Route, Routes } from 'react-router-dom'
import TrendingMarket from './pages/TrendingMarket';
import CryptoDetail from  './pages/CryptoDetail'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trendingMarket" element={<TrendingMarket />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/signUp" element={<SignUp />}> </Route>
            <Route path="/logIn" element={<LogIn />}> </Route>

            <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        </Routes>
    )
}
export default AppRoutes