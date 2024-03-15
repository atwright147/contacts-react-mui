import SearchIcon from '@mui/icons-material/Search';
import { FormControl, FormControlLabel, FormLabel, IconButton, Popover, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import { useContactsStore } from '../stores/contacts.store';

export interface FormValues {
  search: string;
  gender: string;
  view: string;
}

export const ContactListSearchBar: FC = (): JSX.Element => {
  const { control, reset, watch } = useForm<FormValues>({
    defaultValues: {
      search: '',
      gender: 'all',
      view: 'all',
    },
  });
  const [hasFilters, setHasFilters] = useState(false);
  const { setSearchForm } = useContactsStore((state) => ({ setSearchForm: state.setSearchForm }));
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect((): (() => void) => {
    const subscription = watch((value) => {
      setSearchForm(value as FormValues);
      setHasFilters(Object.values(value).some((val) => val !== 'all' && val !== ''));
    });
    return () => subscription.unsubscribe();
  }, [setSearchForm, watch]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClearFilters = (): void => {
    reset();
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  return (
    <form>
      <Stack direction="row" spacing={1}>
        <Controller
          control={control}
          name="search"
          render={({ field: { onChange, value } }) => (
            <TextField
              autoComplete="off"
              fullWidth
              id="search"
              name="search"
              label="Search"
              size="small"
              onChange={onChange}
              value={value}
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          )}
          defaultValue=""
        />

        <IconButton aria-label="Filters" type="button" onClick={handleClick}>
          {hasFilters ? <FilterAltIcon /> : <FilterAltOutlinedIcon />}
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
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
              <Typography component="h1" variant="h5">
                Filters
              </Typography>
              <IconButton aria-label="Clear Filters" type="button" onClick={handleClearFilters}>
                <FilterAltOffIcon />
              </IconButton>
            </Stack>

            <FormControl>
              <FormLabel id="view-label">View</FormLabel>
              <Controller
                control={control}
                name="view"
                render={({ field: { onChange, value } }) => (
                  <RadioGroup aria-labelledby="view-label" defaultValue="all" name="view" value={value} onChange={onChange}>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="favourites" control={<Radio />} label="Favourites" />
                    <FormControlLabel value="non-favourites" control={<Radio />} label="Non-favourites" />
                  </RadioGroup>
                )}
              />
            </FormControl>

            <FormControl>
              <FormLabel id="gender-label">Gender</FormLabel>
              <Controller
                control={control}
                name="gender"
                render={({ field: { onChange, value } }) => (
                  <RadioGroup aria-labelledby="gender-label" defaultValue="all" name="gender" value={value} onChange={onChange}>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Stack>
        </Box>
      </Popover>
    </form>
  );
};
