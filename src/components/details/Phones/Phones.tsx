import { FC } from 'react';

interface Props {
  phones: string[];
}

export const Emails: FC<Props> = ({ phones }): JSX.Element => {
  return (
    <div>
      {phones?.map((phone) => (
        <p key={phone}>{phone}</p>
      ))}
    </div>
  );
};
