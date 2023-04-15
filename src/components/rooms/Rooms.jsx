import { Grid, Typography, Box, Paper } from "@mui/material";
import CardComponent from "../card/Card";
import styles from "./Rooms.module.scss";

export default function Rooms({ rooms }) {

    return (
        <div className={styles["rooms-wrapper"]}>
            <Typography variant="h4">Rooms</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={{ xs: 12 }}>
                    {Array.from(rooms[0]).map((room) => (
                        <Grid item xs={2} key={room.id} columnGap={2}>
                            <CardComponent title={room.name} iconUrl={'images/bed.svg'}>
                            </CardComponent>
                        </Grid>
                    ))}
                    <CardComponent title="Add room" iconUrl={'images/plus.svg'} outlined >
                    </CardComponent>
                </Grid>
            </Box>
        </div>
    );
}