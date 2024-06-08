import { getUserData } from "@/lib/utils/LocalStorage";
import {
  Avatar,
  Button,
  Flex,
  Group,
  Menu,
  MenuDropdown,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import {
  IconChevronRight,
  IconEdit,
  IconExchange,
  IconKey,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import React from "react";
import useNavbarBottomSectionController from "./NavbarBottomSectionController";

function NavbarBottomSection() {
  /**
   * Controller
   */
  const { handleLogout, userData } = useNavbarBottomSectionController();

  return (
    <Menu
      position="right"
      trigger="click-hover"
      openDelay={500}
      closeDelay={200}
      offset={0}
    >
      <Menu.Target>
        <UnstyledButton w="100%" h="100%">
          <Group
            display={"flex"}
            px={rem(1)}
            gap={"5px"}
            align="center"
            justify="center"
          >
            <Avatar radius="xl" size={"md"} color="white" bg={"white"}>
              <IconUser color="black" size={"1.5rem"} />
            </Avatar>

            <Text size="sm" fw={500}>
              {userData.name}
            </Text>

            <IconChevronRight size="1rem" />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <MenuDropdown>
        <Menu.Label>User Settings</Menu.Label>
        <Menu.Item leftSection={<IconKey />}>Change Password</Menu.Item>
        <Menu.Item leftSection={<IconEdit />}>Update User</Menu.Item>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconLogout />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </MenuDropdown>
    </Menu>
  );
}

export default NavbarBottomSection;
