import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';

interface FormValues {
  bio: string;
  emails: { email: string }[];
  addresses: { address1: string; address2: string; address3: string; city: string; county: string; postCode: string }[];
  comments: { comment: string }[];
}

export function ContactsForm(): JSX.Element {
  const onSubmit = (data: FormValues) => console.log('data', data);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      bio: '',
      emails: [{ email: '' }],
      addresses: [{ address1: '', address2: '', address3: '', city: '', county: '', postCode: '' }],
      comments: [{ comment: '' }],
    },
  });

  const { fields: addressesFields, append: addressesAppend, remove: addressesRemove } = useFieldArray({ control, name: 'addresses' });

  const { fields: commentsFields, append: commentsAppend, remove: commentsRemove } = useFieldArray({ control, name: 'comments' });

  const { fields: emailsFields, append: emailsAppend, remove: emailsRemove } = useFieldArray({ control, name: 'emails' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="bio"
        render={({ field: { onChange, value } }) => (
          <TextField multiline fullWidth id="bio" name="bio" label="Bio" value={value} onChange={onChange} sx={{ mb: 3 }} />
        )}
        defaultValue=""
      />

      <Box>
        <Typography variant="h6" component="h3">
          Addresses
        </Typography>

        {addressesFields.map((item, index) => (
          <Box sx={{ position: 'relative' }}>
            <StyledFieldset key={item.id}>
              <legend>Address {index + 1}</legend>
              <Stack direction="column" spacing={2} useFlexGap>
                <Controller
                  render={({ field }) => <TextField label="Address 1" id={`addresses.${index}.address1`} {...field} fullWidth />}
                  name={`addresses.${index}.address1`}
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField label="Address 2" id={`addresses.${index}.address2`} {...field} fullWidth />}
                  name={`addresses.${index}.address2`}
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField label="Address 3" id={`addresses.${index}.address3`} {...field} fullWidth />}
                  name={`addresses.${index}.address3`}
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField label="City" id={`addresses.${index}.city`} {...field} fullWidth />}
                  name={`addresses.${index}.city`}
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField label="County" id={`addresses.${index}.county`} {...field} fullWidth />}
                  name={`addresses.${index}.county`}
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField label="Post Code" id={`addresses.${index}.postCode`} {...field} fullWidth />}
                  name={`addresses.${index}.postCode`}
                  control={control}
                />
              </Stack>

              <StyledIconButton type="button" onClick={() => addressesRemove(index)} sx={{}}>
                <RemoveIcon />
              </StyledIconButton>
            </StyledFieldset>
          </Box>
        ))}

        <StyledIconButton
          type="button"
          onClick={() => {
            addressesAppend({ address1: '', address2: '', address3: '', city: '', county: '', postCode: '' });
          }}
        >
          <AddIcon />
        </StyledIconButton>
      </Box>

      <Box>
        <Typography variant="h6" component="h3">
          Comments
        </Typography>

        {commentsFields.map((item, index) => (
          <Box component="fieldset" key={item.id}>
            <legend>Comment {index + 1}</legend>
            <Controller
              render={({ field }) => <TextField label="Comment" id={`comments.${index}.comment`} {...field} fullWidth />}
              name={`comments.${index}.comment`}
              control={control}
            />

            <Button
              type="button"
              onClick={() => {
                commentsRemove(index);
              }}
            >
              Delete Comment
            </Button>
          </Box>
        ))}

        <Button
          type="button"
          onClick={() => {
            commentsAppend({ comment: '' });
          }}
        >
          Add Comment
        </Button>
      </Box>

      <Box>
        <Typography variant="h6" component="h3">
          Emails
        </Typography>

        {emailsFields.map((item, index) => (
          <Box component="fieldset" key={item.id}>
            <legend>Emails {index + 1}</legend>
            <Controller
              render={({ field }) => <TextField label="Email" id={`emails.${index}.email`} {...field} fullWidth />}
              name={`emails.${index}.email`}
              control={control}
            />

            <Button
              type="button"
              onClick={() => {
                emailsRemove(index);
              }}
            >
              Delete Email
            </Button>
          </Box>
        ))}

        <Button
          type="button"
          onClick={() => {
            emailsAppend({ email: '' });
          }}
        >
          Add Comment
        </Button>
      </Box>
    </form>
  );
}

const StyledIconButton = styled(IconButton)`
  background-color: white;
  border: 1px solid #c4c4c4;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(42%, -50%);

  &:hover {
    background-color: hsl(0, 0%, 95%);
  }
`;

// sx={{ p: 2.5, pr: 4, borderRadius: 1, borderColor: 'grey.50' }}
const StyledFieldset = styled.fieldset`
  border: 1px solid #c4c4c4;
`;
