import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./Cameras.module.scss";
import CardComponent from "../card/Card";
import classNames from "classnames";

export default function Cameras({
    cameras = [
        { videoUrl: "/videos/front-door.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        { videoUrl: "/videos/balcony.mp4" },
        
    ],
    hasButton = true,
}) {

    const [selectedCamera, setSelectedCamera] = useState([]);

    useEffect(() => {
        if (cameras.length > 0)
            setSelectedCamera(cameras[0]);
    }, []);

    const onClick = (camera) => {
        setSelectedCamera(camera)
    }

    return (
        <div className={styles.container}>
            <Typography variant="h4" className={styles.title}>Cameras</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} >
                    <video autoPlay
                        controls
                        className={styles.box}
                        src={selectedCamera.videoUrl}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={styles['cameras-container']}>
                        {cameras.map((camera, index) => (
                            <video
                                key={index}
                                src={camera.videoUrl}
                                muted
                                onClick={() => onClick(camera)}
                                className={classNames(styles.item, (selectedCamera?.videoUrl === camera.videoUrl) && styles.border)}
                                paused
                            />
                        ))}
                        <div className={styles.button}>
                            {hasButton && <CardComponent iconUrl="/images/plus.svg" outlined/>}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

