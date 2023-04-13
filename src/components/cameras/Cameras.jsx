import { Grid, Paper, Box, CardActionArea, CardMedia } from "@mui/material";
import styles from "./Cameras.module.scss";
import classNames from "classnames";
import React, { useState } from "react";
import CardComponent from "../card/Card";
export default function Cameras({
    cameras = [
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
    ],
    hasButton = true,
}) {
    const [id, setId] = useState(0);
    const onClick = (item) => {
        setId(item.id)
    }

    return (
        <div className={classNames(styles["cameras-container"])}>
            <video>
            <Grid item xs={12} container>
                <Grid item xs container direction="column" spacing={3}>
                    <Grid item xs={9} >
                            <CardComponent
                                className={styles.box}
                                iconUrl={'/videos/balcony.mp4'}
                                allow="autoPlay"
                            />
                    </Grid>

                    <Grid item xs={3}>
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs={12}>
                                <Grid item xs container direction="row" spacing={1}>
                                    {cameras.map((camera, index) =>
                                    
                                    <Grid key={index} item xs={6}>  
                                    
                                        <CardComponent height="50px" width="50px" iconUrl={'/videos/balcony.mp4'} onClick={onClick} />    
                                    
                                   </Grid>)}

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            </video>
        </div>
    );
}

