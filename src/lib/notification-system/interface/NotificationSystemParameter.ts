import { NotificationSystemType } from "../enum/NotificationSystemType";

export interface notificationSystemParameter {
  notificationType: NotificationSystemType;
  message: string;
  title?: string;
  isLoading?: boolean;
  notificationId?: string;
}
