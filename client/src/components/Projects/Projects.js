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
        <div>

            {/* Diver Project */}

            <Card sx={{ maxWidth: 345 }} className="cards">
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

            
        </div>
    )
}

export default Projects