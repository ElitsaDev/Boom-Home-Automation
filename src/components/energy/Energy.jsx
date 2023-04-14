import { Grid, MenuItem, Select, Typography, InputLabel, FormControl } from "@mui/material";
import { Line, XAxis, YAxis, ComposedChart, Tooltip, CartesianGrid, Area } from "recharts";
import styles from "./Energy.module.scss";
import classNames from "classnames";

export default function Energy({ data }) {
    return (
        <div >
            <Grid container className={styles.container}>
                <Grid item xs={12}>
                    <Grid item xs={9} >
                        <Typography variant="h4" className={styles.title}>Energy</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl className={styles.cardSelect}  >
                            <InputLabel id="demo-simple-select-label">This week</InputLabel>
                            <Select className={styles.inputLabel}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="This week"
                            >
                                <MenuItem >This week </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <ComposedChart width={803} height={389} data={data} className={classNames(styles.chartContainer)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="energy" stroke="#DF54A7" className={styles.chartLine} />
                        <Area type="monotone" dataKey="energy" fill='#DF54A7' />
                        <XAxis dataKey="hour" dot />
                        <YAxis hide />
                        <Tooltip />
                    </ComposedChart>
                </Grid>
            </Grid>
        </div>
    );
}