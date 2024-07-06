import { Button, Group, Popover, Text } from "@mantine/core";
import { PopconfirmProps } from "./interface/Popconfirm.interface";

export function Popconfirm(props: PopconfirmProps) {
  const {
    children,
    description,
    onCancel,
    onConfirm,
    title,

    cancelText = "Batal",
    closeText,
    confirmText = "Yakin",
    icon,
    placement = "bottom",
    size = 200,
  } = props;

  return (
    <Popover width={size} position={placement}>
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown>
        <Text size="sm" style={{ marginBottom: 10 }}>
          {description}
        </Text>
        <Group>
          <Button color="red" onClick={() => onCancel?.()}>
            {cancelText}
          </Button>
          <Button onClick={() => onConfirm?.()}>{confirmText}</Button>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
