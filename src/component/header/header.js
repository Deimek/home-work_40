import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import './style-header.scss'
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Stack, Container } from "@mui/material";



const Header = () => {




    return (

        // <div className="header-content">
        //     <h1>SPA — header</h1>

        //     <nav className="nav__header">
        //         <Link to='/main'>Main page</Link>
        //         <Link to='/about'>Todo</Link>
        //         <Link to='/contact'>SWAPI</Link>
        //     </nav>

        // </div>


        <AppBar position="static" color="primary">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div">
                        SPA — header
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button component={RouterLink} to="/main" color="inherit">
                            Main page
                        </Button>
                        <Button component={RouterLink} to="/about" color="inherit">
                            Todo
                        </Button>
                        <Button component={RouterLink} to="/contact" color="inherit">
                            SWAPI
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header;