import React from "react";
//import "./footer-content.scss"
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {


    return (
        // <div className="footer-content">
        //     <h3>SPA — footer</h3>
        //     <contact>
        //         Contact us at:
        //         <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BtDvcpPj8SIqYiNWTEslsCw%3D%3D">LinkedIn</a><br />
        //         Khmelnytskyi, Ukraine<br />
        //     </contact>
        // </div>
        <Box
            component="footer"
            sx={{
                backgroundColor: "#f5f5f5",
                py: 3,
                mt: "auto",
                borderTop: "1px solid #ddd",
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h6" gutterBottom>
                    SPA — footer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Contact us at:{" "}
                    <Link
                        href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BtDvcpPj8SIqYiNWTEslsCw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    <br />
                    Khmelnytskyi, Ukraine
                </Typography>
            </Container>
        </Box>
    )


}

export default Footer;