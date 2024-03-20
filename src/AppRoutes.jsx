import { Route, Routes } from 'react-router-dom'
import TrendingMarket from './pages/TrendingMarket';
import CryptoDetail from  './pages/CryptoDetail'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import LoginDialog from './pages/LoginDialog'
import SignupDialog from './pages/SignupDialog';
import  {useState} from 'react'

const AppRoutes = () => {
    const [showDialog, setShowDialog] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [activeDialog, setActiveDialog] = useState(null);
    
    const handleShowDialog = (isOpen, dialogComponent = null) => {
        setShowDialog(isOpen);
        setActiveDialog(dialogComponent);
      };
    
    return (

        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trendingMarket" element={<TrendingMarket />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/loginDialog" element={<LoginDialog showDialog={showDialog} setShowDialog={handleShowDialog} />}> </Route>
            <Route path="/signupDialog" element={<SignupDialog showDialog={showDialog} setShowDialog={handleShowDialog} />}> </Route>
            <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        </Routes>
    )
}

export default AppRoutes