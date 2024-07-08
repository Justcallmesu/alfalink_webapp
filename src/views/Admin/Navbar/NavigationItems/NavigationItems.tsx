import { NavigationItemsProps } from "./Interface/NavigationItems.interface";
import {
  IconBrand4chan,
  IconBuildingFactory,
  IconCashBanknote,
  IconFile,
  IconFriends,
  IconGasStation,
  IconHome,
  IconKey,
  IconPaint,
  IconSteeringWheel,
} from "@tabler/icons-react";

function NavigationItems() {
  const navigationItems: NavigationItemsProps[] = [
    {
      href: "/admin",
      label: "Home",
      leftSection: <IconHome />,
      description: "Dashboard Utama",
    },
    {
      label: "Customers",
      leftSection: <IconFriends />,
      description: "Customer Terdaftar",
      href: "/admin/customers",
    },
    {
      label: "Master Data",
      leftSection: <IconFile />,
      description: "Master Data Management",
      children: [
        {
          label: "Warna",
          description: "Master Data Warna",
          leftSection: <IconPaint />,
          href: "/admin/color",
        },
        {
          label: "Jenis Bahan Bakar",
          description: "Master Data Bahan Bakar",
          leftSection: <IconGasStation />,
          href: "/admin/fuel-type",
        },
        {
          label: "Model Mobil",
          description: "Master Data Model Mobil",
          leftSection: <IconSteeringWheel />,
          href: "/admin/car-model",
        },
        {
          label: "Merk Mobil",
          description: "Master Data Merk Mobil",
          leftSection: <IconBuildingFactory />,
          href: "/admin/car-brand",
        },
        {
          label: "Tipe Mobil",
          description: "Master Data Tipe Mobil",
          leftSection: <IconKey />,
          href: "/admin/car-type",
        },
        {
          label: "Bank Tujuan",
          description: "Master Data Bank Tujuan",
          leftSection: <IconCashBanknote />,
          href: "/admin/target-bank",
        },
      ],
    },
  ];

  return navigationItems;
}

export default NavigationItems;
