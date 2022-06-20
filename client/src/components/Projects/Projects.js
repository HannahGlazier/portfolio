import React from 'react'
import './Projects.scss';

// Material UI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Projects() {
    return (
        <div className="cards">

            {/* Diver Project */}

            <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image="https://github.com/HannahGlazier/diver/raw/main/client/public/images/signin.png"
                    alt="Diver App"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Diver
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A social activity tracker for SCUBA diving! Diver offers a space to safely create and store your dive logs and follow along with yours friends' dive activity. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/HannahGlazier/diver';
                            }}
                    >GitHub</Button>
                    <Button 
                        size="small"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://diverr.herokuapp.com/';
                            }}
                    >Deployed Link</Button>
                </CardActions>
            </Card> 

            {/* Citinerary Project */}

            <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image="https://github.com/opomeroy26/Citinerary/raw/main/client/public/Images/Home.png"
                    alt="Citinerary App"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Citinerary
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Citinerary is an application that allows users to view various activities in different cities in order to plan out trips or fun activities in their hometown. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/opomeroy26/Citinerary';
                            }}
                    >GitHub</Button>
                    <Button 
                        size="small"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://powerful-harbor-52595.herokuapp.com/';
                            }}
                    >Deployed Link</Button>
                </CardActions>
            </Card> 

        </div>
    )
}

export default Projects