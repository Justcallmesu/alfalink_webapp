import React from "react";

export interface NavigationItemsProps {
  href?: string;
  label: string;
  description?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  disabled?: boolean;
  children?: NavigationItemsProps[];
}
