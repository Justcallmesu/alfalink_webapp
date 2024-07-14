import { Button, Group, Popover, Text, UnstyledButton } from "@mantine/core";
import { PopconfirmProps } from "./interface/Popconfirm.interface";
import { useState } from "react";

export function Popconfirm(props: PopconfirmProps) {
  const [opened, setOpened] = useState(false);

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
    <Popover opened={opened} width={size} position={placement}>
      <Popover.Target>
        <div onClick={() => setOpened(true)}>{children}</div>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm" style={{ marginBottom: 10 }}>
          {description}
        </Text>
        <Group>
          <Button
            color="red"
            onClick={() => {
              onCancel?.();
              setOpened(false);
            }}
          >
            {cancelText}
          </Button>
          <Button
            onClick={() => {
              setOpened(false);
              onConfirm?.();
            }}
          >
            {confirmText}
          </Button>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
