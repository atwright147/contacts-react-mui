import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import {
  Avatar,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getInitials } from '../helpers/getInitials/getInitials';
import { useContacts } from '../queries/contacts.query';
import { Favourite } from './Favourite/Favourite';

export const ContactsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: contacts } = useContacts();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [search, setSearch] = useState('');

  const contactsToDisplay = useMemo(() => {
    if (search) {
      return contacts?.filter((contact) => `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase()));
    }
    return contacts;
  }, [search, contacts]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleContactClick = (id: number): void => {
    navigate(`/contacts/${id}`);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <TextField
          autoComplete="off"
          fullWidth
          id="search"
          name="search"
          label="Search"
          size="small"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />

        <IconButton aria-label="Filters" type="button" onClick={handleClick}>
          <TuneIcon />
        </IconButton>
      </Stack>

      <Popover
        id={popoverId}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: 1,
        }}
      >
        <Box sx={{ p: 2 }} component="section">
          <Typography component="h1" variant="h5">
            Filters
          </Typography>

          <Stack spacing={2}>
            <FormControl>
              <FormLabel id="view-label">View</FormLabel>
              <RadioGroup aria-labelledby="view-label" defaultValue="all" name="view-filter">
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="favouries" control={<Radio />} label="Favourites" />
                <FormControlLabel value="non-favourites" control={<Radio />} label="Non-favourites" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="view-label">Gender</FormLabel>
              <RadioGroup aria-labelledby="view-label" defaultValue="all" name="view-filter">
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
      </Popover>

      <List dense>
        {contactsToDisplay?.map((contact) => (
          <ListItem key={contact.id} id={`contact-${contact.id}`} sx={{ p: 0 }}>
            <ListItemButton
              alignItems="flex-start"
              selected={Number(id) === contact.id}
              component="button"
              onClick={() => handleContactClick(contact.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={getInitials(`${contact.firstName} ${contact.lastName}`)}
                  src={`http://localhost:3001/api/v1/avatar/${contact.id}`}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Stack direction="row" spacing={1} justifyContent="space-between">
                    <Typography>{`${contact.firstName} ${contact.lastName}`}</Typography>
                    <Favourite isFavourite={!!contact.isFavourite} />
                  </Stack>
                }
                secondary={<Typography variant="body2">{contact.jobTitle}</Typography>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
