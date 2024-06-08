import { NavigationItemsProps } from "./Interface/NavigationItems.interface";
import { IconFriends, IconHome } from "@tabler/icons-react";

function NavigationItems() {
  const navigationItems: NavigationItemsProps[] = [
    {
      href: "/admin",
      label: "Home",
      leftSection: <IconHome />,
      description: "Dashboard Home",
    },
    {
      label: "Customers",
      leftSection: <IconFriends />,
      description: "Registered Customer",
      href: "/admin/customers",
    },
  ];

  return navigationItems;
}

export default NavigationItems;
