import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu, MenuItem,
    useMediaQuery,
    useTheme,
    Typography,
    createTheme,
    ThemeProvider
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';



const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#111111',
        color: '#ffffff',
    },
    appBarTitle: { flexGrow: 1, },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: theme.spacing(2),
    },
    navMenuIcon: {
        marginLeft: theme.spacing(2),
        marginRight: -theme.spacing(2),
        color: '#ffffff',
    },
    navMenu: {
    },
}))
const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const handelMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handelMenuClose = () => {
        setAnchorEl(null)
    }
    return (
        <ThemeProvider theme={theme}>

        <AppBar position='static' className={classes.appBar}>
            <Toolbar>
                <Typography variant='h6' component='div'
                    className={classes.appBarTitle}>
                    CryptoInvest
                </Typography>
                {isMobile ? (
                    <IconButton aria-label='account of current user'
                        aria-controls='account-menu' aria-haspopup='true'
                        onClick={handelMenuOpen} className={classes.navMenuIcon}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li> <a href="#" className={classes.navLink}>
                            Home
                        </a></li>
                        <li><a href="#" className={classes.navLink}>
                            Businesses </a></li>
                        <li> <a href="#" className={classes.navLink}>
                            Trade
                        </a></li>
                        <li> <a href="#" className={classes.navLink}>
                            Market
                        </a></li>
                        <li> <a href="#" className={classes.navLink}>
                            Learn
                        </a></li>
                    </ul>
                )}
                <Menu id='account-menu' anchorEl={anchorEl} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }} transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} open={Boolean(anchorEl)} onClose={handelMenuClose}
                    className={classes.navMenu}>
                    <MenuItem onClick={handelMenuClose}>
                        <a href="#" className={classes.navLink}> Login</a>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        </ThemeProvider>

    )
}
export default NavBar;