import { Uuid } from './uuid.type';

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface Notification {
  id: Uuid;
  type: string,
  body: string,
}
