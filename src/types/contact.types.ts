import { Address } from './address.type';
import { binary } from './binary.type';
import { Comment } from './comment.type';
import { Email } from './email.type';

export interface Contact {
  id: number;
  uuid: string,
  firstName: string,
  lastName: string,
  jobTitle: string,
  bio: string,
  emails: Email[],
  dateOfBirth: string,
  addresses: Address[],
  comments: Comment[],
  isFavourite: binary,
  createdAt: string,
  updatedAt: string,
}
