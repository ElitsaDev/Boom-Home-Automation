import { Grid, Paper, Box, CardActionArea, CardMedia } from "@mui/material";
import styles from "./Cameras.module.scss";
import classNames from "classnames";
import React, { useState } from "react";
import CardComponent from "../card/Card";
export default function Cameras({
    cameras = [
        { videoUrl: "/balcony.mp4" },
        { videoUrl: "./video/bathroom.mp4" },
        { videoUrl: "/video/front-door.mp4" },
        { videoUrl: "/video/garden.mp4" },
        { videoUrl: "/video/kitchen.mp4" },
        { videoUrl: "/video/living room 2.mp4" },
        { videoUrl: "/video/living room 2.mp4" },
    ],
    hasButton = true,
}) {
    const [id, setId] = useState(0);
    const onClick = (item) => {
        setId(item.id)
    }

    return (
        <div className={classNames(styles["cameras-container"])}>
            <Grid item xs={12} container>
                <Grid item xs container direction="column" spacing={3}>
                    <Grid item xs={9} >
                        <video>
                            <CardComponent
                                className={styles.box}
                                iconUrl={cameras[id].videoUrl}
                                allow="autoPlay"
                            />
                        </video>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs={12}>
                                <Grid item xs container direction="row" spacing={1}>
                                    <Grid item xs={6}>
                                        {cameras.map(camera =>
                                            <video key={camera.id}>
                                                <CardComponent height="50px" width="50px" iconUrl={camera.videoUrl} onClick={onClick} />
                                            </video>)}
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}

