import { ReactNode, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ky from 'ky';
import { useMutation } from '@tanstack/react-query';
import { useModalsStore } from '../../stores/modals.store';
import { useContactsStore } from '../../stores/contacts.store';

interface Props {
  children?: ReactNode;
}

export function ButtonMenu({ children }: Props): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const selected = useContactsStore((store) => store.selected);
  const open = !!anchorEl;
  const setContactEdit = useModalsStore((store) => store.setContactsEdit);

  const patchFavourite = useMutation({
    mutationFn: (): Promise<void> => {
      const action = selected?.isFavourite ? 'unfavourite' : 'favourite';
      return ky.patch(`http://localhost:3001/api/v1/contacts/${selected?.id}/${action}`).json();
    },
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const close = (): void => {
    setAnchorEl(null);
  };

  const handleEdit = (): void => {
    setContactEdit(true);
    close();
  };

  const handleDelete = (): void => {
    close();
  };

  const handleToggleFavourites = (): void => {
    patchFavourite.mutate();
    close();
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleToggleFavourites}>Toggle Favourite</MenuItem>
      </Menu>
    </>
  );
}
