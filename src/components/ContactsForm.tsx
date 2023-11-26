import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    }
  });

  const {
    fields: addressesFields,
    append: addressesAppend,
    remove: addressesRemove
  } = useFieldArray({ control, name: "addresses" });

  const {
    fields: commentsFields,
    append: commentsAppend,
    remove: commentsRemove
  } = useFieldArray({ control, name: "comments" });

  const {
    fields: emailsFields,
    append: emailsAppend,
    remove: emailsRemove
  } = useFieldArray({ control, name: "emails" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="bio"
        render={({ field: { onChange, value } }) => (
          <TextField
            id="bio"
            name="bio"
            label="Bio"
            value={value}
            onChange={onChange}
          />
        )}
        defaultValue=""
      />

      <Box>
        <Typography variant="h6" component="h3">Addresses</Typography>

        {addressesFields.map((item, index) => (
          <Box component="fieldset" key={item.id}>
            <legend>Address {index + 1}</legend>
            <Controller
              render={({ field }) => <TextField label="Address 1" id={`addresses.${index}.address1`} {...field} />}
              name={`addresses.${index}.address1`}
              control={control}
            />
            <Controller
              render={({ field }) => <TextField label="Address 2" id={`addresses.${index}.address2`} {...field} />}
              name={`addresses.${index}.address2`}
              control={control}
            />
            <Controller
              render={({ field }) => <TextField label="Address 3" id={`addresses.${index}.address3`} {...field} />}
              name={`addresses.${index}.address3`}
              control={control}
            />
            <Controller
              render={({ field }) => <TextField label="City" id={`addresses.${index}.city`} {...field} />}
              name={`addresses.${index}.city`}
              control={control}
            />
            <Controller
              render={({ field }) => <TextField label="County" id={`addresses.${index}.county`} {...field} />}
              name={`addresses.${index}.county`}
              control={control}
            />
            <Controller
              render={({ field }) => <TextField label="Post Code" id={`addresses.${index}.postCode`} {...field} />}
              name={`addresses.${index}.postCode`}
              control={control}
            />

            <Button type="button" onClick={() => {
              addressesRemove(index);
            }}>Delete Address</Button>
          </Box>
        ))}

        <Button
          type="button"
          onClick={() => {
            addressesAppend({ address1: '', address2: '', address3: '', city: '', county: '', postCode: '' });
          }}
        >Add Address</Button>
      </Box>

      <Box>
        <Typography variant="h6" component="h3">Comments</Typography>

        {commentsFields.map((item, index) => (
          <Box component="fieldset" key={item.id}>
            <legend>Comment {index + 1}</legend>
            <Controller
              render={({ field }) => <TextField label="Comment" id={`comments.${index}.comment`} {...field} />}
              name={`comments.${index}.comment`}
              control={control}
            />

            <Button type="button" onClick={() => {
              commentsRemove(index);
            }}>Delete Comment</Button>
          </Box>
        ))}

        <Button
          type="button"
          onClick={() => {
            commentsAppend({ comment: '' });
          }}
        >Add Comment</Button>
      </Box>

      <Box>
        <Typography variant="h6" component="h3">Emails</Typography>

        {emailsFields.map((item, index) => (
          <Box component="fieldset" key={item.id}>
            <legend>Emails {index + 1}</legend>
            <Controller
              render={({ field }) => <TextField label="Email" id={`emails.${index}.email`} {...field} />}
              name={`emails.${index}.email`}
              control={control}
            />

            <Button type="button" onClick={() => {
              emailsRemove(index);
            }}>Delete Email</Button>
          </Box>
        ))}

        <Button
          type="button"
          onClick={() => {
            emailsAppend({ email: '' });
          }}
        >Add Comment</Button>
      </Box>
    </form>
  );
}
