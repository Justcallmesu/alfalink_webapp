import { NotificationData, notifications } from "@mantine/notifications";
import { notificationSystemParameter } from "./interface/NotificationSystemParameter";
import { NotificationSystemType } from "./enum/NotificationSystemType";

export function notificationSystem(parameters: notificationSystemParameter) {
  const {
    message,
    notificationType,
    title,
    isLoading = false,
    notificationId,
  } = parameters;

  let notificationProps: NotificationData = {
    message,
    title,
    withCloseButton: true,
    autoClose: 2000,
    color: "blue",
    loading: isLoading,
  };

  switch (notificationType) {
    case NotificationSystemType.SUCCESS:
      notificationProps.color = "green";
      break;
    case NotificationSystemType.ERROR:
      notificationProps.color = "red";
      break;
    case NotificationSystemType.WARNING:
      notificationProps.color = "yellow";
      break;
  }

  if (notificationId) {
    return notifications.update({ id: notificationId, ...notificationProps });
  }

  return notifications.show({ ...notificationProps });
}
