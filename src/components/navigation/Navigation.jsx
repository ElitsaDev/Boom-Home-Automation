import { useState } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames";

import { Paper, Drawer, IconButton, ListItem, MenuList, MenuItem, ListItemIcon, Badge, ListItemText, Typography, Menu } from "@mui/material";

import User from "../user/User";
import { Toolbar } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const drawerWidth = 245;
const ITEM_HEIGHT = 44;

export default function Navigation() {
    const [invisible, setInvisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let roomsApartment = ['Living Room', 'Bedroom', 'Bathroom', 'Toilet', 'Patio'];
    let roomsHouse = ['Living Room', 'Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bathroom', 'Toilet', 'Patio'];

    return (

        <Drawer className={classNames(styles.container)}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Paper className={classNames(styles.paper)} sx={{ maxWidth: '100%', top: 0 }}>
               
                    <User />
                    {/* <IconButton onClick={handleBadgeVisibility}>
                        <MoreVertIcon className={classNames(styles.moreVertIcon)}  />
                        <Badge className={classNames(styles.badge)}   
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}

                                    invisible={invisible}
                                >           
                        <Menu onClick={handleClick}>
                            <MenuItem >Logout
                                    
                            </MenuItem>
                        </Menu>
                        </Badge>
                    </IconButton> */}
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon className={classNames(styles.moreVertIcon)} />
                    </IconButton>
               
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            {'Close'}
                        </MenuItem>
                    </Menu>
                <MenuList>
                    <MenuItem disablePadding className={classNames(styles.mainItems)} >
                        <ListItemIcon>
                            <HomeOutlinedIcon className={classNames(styles.homeIcon)} />
                        </ListItemIcon>
                        <ListItemText primary='Apartment' />
                        <div className={classNames(styles.numberRooms)}>
                            <Typography className={classNames(styles.typography)}>{roomsApartment.length}</Typography>
                        </div>

                    </MenuItem>
                    {roomsApartment.map((text, index) => (
                        <ListItem key={index} disablePadding className={classNames(styles.subItems)}>
                            <ListItemIcon>
                                <BedOutlinedIcon className={classNames(styles.subIcon)} />
                            </ListItemIcon>
                            <IconButton disableFocusRipple={true} disableRipple={true}>
                                <ListItemText primary={text} />
                            </IconButton>
                        </ListItem>
                    ))}
                    <MenuItem disablePadding className={classNames(styles.mainItems)} >
                        <ListItemIcon>
                            <HomeOutlinedIcon className={classNames(styles.homeIcon)} />
                        </ListItemIcon>
                        <ListItemText primary='House' />
                        <div className={classNames(styles.numberRooms)}>
                            <Typography className={classNames(styles.typography)}>{roomsHouse.length}</Typography>
                        </div>
                    </MenuItem>
                    {roomsHouse.map((text, index) => (
                        <ListItem key={index} disablePadding className={classNames(styles.subItems)}>
                            <ListItemIcon>
                                <BedOutlinedIcon className={classNames(styles.subIcon)} />
                            </ListItemIcon>
                            <IconButton disableFocusRipple={true} disableRipple={true}>
                                <ListItemText primary={text} />
                            </IconButton>
                        </ListItem>
                    ))}
                </MenuList>
            </Paper>
        </Drawer>
    );
}


