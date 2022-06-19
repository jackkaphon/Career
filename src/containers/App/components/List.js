import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const style = {
  width: '100%',
  maxWidth: 1200,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Welnance" />
        <ArrowForwardIosIcon/>
      </ListItem>
      <Divider />
    </List>
  );
}
