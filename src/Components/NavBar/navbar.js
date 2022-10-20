import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link } from 'react-scroll'
import Logo from '../../Assets/Images/logo.png'
import './navbar.css'

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={3} sx={{ display: { md: 'none' } }}>
            <Grid item xs>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Link to="assistances" spy={true} smooth={true} duration={500}>
                  <MenuItem key={'services'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{'Services'}</Typography>
                  </MenuItem>
                </Link>
                <Link to="dentists" spy={true} smooth={true} duration={500}>
                  <MenuItem key={'accueil'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{'Dentistes'}</Typography>
                  </MenuItem>
                </Link>
                <Link to="team" spy={true} smooth={true} duration={500}>
                  <MenuItem key={'team'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{"L'équipe"}</Typography>
                  </MenuItem>
                </Link>
                <Link to="/" spy={true} smooth={true} duration={500}>
                  <MenuItem key={'clinic'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{'Clinique'}</Typography>
                  </MenuItem>
                </Link>
                <Link to="/" spy={true} smooth={true} duration={500}>
                  <MenuItem key={'contact-us'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{'Nous-Joindre'}</Typography>
                  </MenuItem>
                </Link>
                <Link to="/" spy={true} smooth={true} duration={500}>
                  <MenuItem key={'english'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{'English'}</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <img className="logo" src={Logo} alt="logo"></img>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
          <Box
            justifyContent={'center'}
            sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="assistances" spy={true} smooth={true} duration={500}>
              <Button
                key={'service'}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: 'white',
                  display: 'block',
                  textShadow: ' 1px 1px 2px black',
                  fontSize: '16px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                }}
              >
                SERVICES
              </Button>
            </Link>
            <Link to="dentists" spy={true} smooth={true} duration={500}>
              <Button
                key={'service'}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: 'white',
                  display: 'block',
                  textShadow: ' 1px 1px 2px black',
                  fontSize: '16px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                }}
              >
                DENTISTES
              </Button>
            </Link>
            <Link to="team" spy={true} smooth={true} duration={500}>
              <Button
                key={'service'}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: 'white',
                  display: 'block',
                  textShadow: ' 1px 1px 2px black',
                  fontSize: '16px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                }}
              >
                L'ÉQUIPE
              </Button>
            </Link>
            <img className="logo" src={Logo} alt="logo"></img>
            <Link to="main" spy={true} smooth={true} duration={500}>
              <Button
                key={'service'}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: 'white',
                  display: 'block',
                  textShadow: ' 1px 1px 2px black',
                  fontSize: '16px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                }}
              >
                CLINIQUE
              </Button>
            </Link>
            <Link to="main" spy={true} smooth={true} duration={500}>
              <Button
                key={'service'}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: 'white',
                  display: 'block',
                  textShadow: ' 1px 1px 2px black',
                  fontSize: '16px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                }}
              >
                NOUS-JOINDRE
              </Button>
            </Link>
            <Link to="main" spy={true} smooth={true} duration={500}>
              <Button
                key={'service'}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: 'white',
                  display: 'block',
                  textShadow: ' 1px 1px 2px black',
                  fontSize: '16px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                }}
              >
                ENGLISH
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
