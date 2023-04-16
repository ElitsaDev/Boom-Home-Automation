
import { Card, CardActionArea, CardContent, CardMedia, Typography, Chip, Badge } from "@mui/material";
import classNames from "classnames";
import styles from "./Card.module.scss";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
export default function CardComponent({ iconUrl, outlined = false, onClick, title, variant }) {
    const variant = {
        on: 'on',
        off: 'off',
        offline: 'offline'
    };
    
    return (
        <Card className={classNames(styles.card, outlined == true && styles.border, variant == "offline" && styles.colored)} onClick={onClick}>
            <CardActionArea>
                {(variant == "offline") &&
                    <Chip className={classNames(styles.status)}
                    label={<PriorityHighIcon style={{color: "#EB675C"}}  />}
                    
                />}
                <CardContent>
                    {!!iconUrl &&
                        <CardMedia
                            sx={{ width: 120, height: 100, margin: 'auto' }}
                            image={iconUrl}
                            alt="card image"
                        />
                    }
                    {title &&
                        <Typography className={styles.text} sx={{ mb: 1.0 }} color="#7441F3" variant="h5" component="div">{title}</Typography>
                    }
                    
                </CardContent>
                
            </CardActionArea>
        </Card>
    );
}