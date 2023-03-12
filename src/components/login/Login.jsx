
import * as React from 'react';
import { Box, Container, Paper, FormControl, TextField, InputAdornment, Button } from "@mui/material";

import styles from "./Login.module.scss";
import classNames from "classnames";

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box component="form" className={classNames(styles["login-form"])}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <Paper className={classNames(styles.paper)}>
                    <FormControl className={classNames(styles.formConrtol)}
                        sx={{ m: 1, width: '25ch' }}
                        variant="outlined">
                        <TextField type="email"
                            className={classNames(styles.textField)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" className={classNames(styles.input)}>
                                        <EmailIcon className={classNames(styles.icon)} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField type={showPassword ? 'text' : 'password'}
                            className={classNames(styles.textField)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" className={classNames(styles.input)} >
                                        <LockIcon className={classNames(styles.icon)}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </LockIcon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button className={styles.loginButton} variant={"contained"}>LOGIN</Button>
                    </FormControl>
                </Paper>
            </Container>
        </Box>
    );
}

