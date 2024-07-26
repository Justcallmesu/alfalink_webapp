export interface PopconfirmProps {
  /**
   * The content of the Popconfirm.
   */
  title?: string;
  /**
   * The description of the Popconfirm.
   */
  description: string;
  /**
   * The action that will be executed when the Popconfirm is confirmed.
   */
  onConfirm?: () => void;
  /**
   * The action that will be executed when the Popconfirm is canceled.
   */
  onCancel?: () => void;
  /**
   * The placement of the Popconfirm.
   */
  placement?: "top" | "bottom" | "left" | "right";

  /**
   * The size of the Popconfirm.
   */
  size?: "sm" | "md" | "lg";
  /**
   * The icon of the Popconfirm.
   */
  icon?: React.ReactNode;
  /**
   * The text of the confirm button.
   */
  confirmText?: string;
  /**
   * The text of the cancel button.
   */
  cancelText?: string;
  /**
   * The text of the close button.
   */
  closeText?: string;
  /**
   * The text of the close button.
   */
  children: React.ReactNode;
}
