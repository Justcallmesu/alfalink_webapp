import { checkPermissions } from "@/lib/utils/CheckPermission";
import { NavigationItemsProps } from "./Interface/NavigationItems.interface";
import {
  IconBrand4chan,
  IconBuildingFactory,
  IconCar,
  IconCar4wd,
  IconCashBanknote,
  IconCurrencyDollar,
  IconFile,
  IconFriends,
  IconGasStation,
  IconHome,
  IconKey,
  IconPaint,
  IconSteeringWheel,
  IconTag,
  IconUsers,
  IconZoomCheck,
} from "@tabler/icons-react";

function NavigationItems() {
  const navigationItems = [
    {
      href: "/admin",
      label: "Home",
      leftSection: <IconHome />,
      description: "Dashboard Utama",
    },
    checkPermissions({ group: "Customer" })
      ? {
          label: "Customers",
          leftSection: <IconFriends />,
          description: "Customer Terdaftar",
          href: "/admin/customers",
        }
      : undefined,
    checkPermissions({ group: "Mobil" })
      ? {
          label: "Mobil",
          leftSection: <IconCar />,
          description: "Data Mobil",
          href: "/admin/cars",
        }
      : undefined,
    checkPermissions({ group: "Inspeksi" })
      ? {
          label: "Inspeksi",
          leftSection: <IconZoomCheck />,
          description: "Data Inspeksi mobil",
          href: "/admin/inspections",
        }
      : undefined,

    checkPermissions({ group: "Penjualan" })
      ? {
          label: "Penjualan",
          leftSection: <IconCurrencyDollar />,
          description: "Data Penjualan mobil",
          href: "/admin/penjualan",
        }
      : null,
    checkPermissions({ group: "User" }) || checkPermissions({ group: "Role" })
      ? {
          label: "Auth",
          leftSection: <IconUsers />,
          description: "Data Auth",
          children: [
            checkPermissions({ group: "User" })
              ? {
                  label: "Users",
                  leftSection: <IconUsers />,
                  description: "Data Users",
                  href: "/admin/users",
                }
              : null,

            checkPermissions({ group: "Role" })
              ? {
                  label: "Roles",
                  leftSection: <IconTag />,
                  description: "Data Roles",
                  href: "/admin/roles",
                }
              : null,
          ].filter(Boolean) as NavigationItemsProps[],
        }
      : null,
    checkPermissions({ group: "Merk" }) ||
    checkPermissions({ group: "Model" }) ||
    checkPermissions({ group: "Warna" }) ||
    checkPermissions({ group: "Bank Tujuan" }) ||
    checkPermissions({ group: "Tipe" }) ||
    checkPermissions({ group: "Body Style" }) ||
    checkPermissions({ group: "Fuel Type" })
      ? {
          label: "Master Data",
          leftSection: <IconFile />,
          description: "Master Data Management",
          children: [
            checkPermissions({ group: "Warna" })
              ? {
                  label: "Warna",
                  description: "Master Data Warna",
                  leftSection: <IconPaint />,
                  href: "/admin/color",
                }
              : undefined,
            checkPermissions({ group: "Fuel Type" })
              ? {
                  label: "Jenis Bahan Bakar",
                  description: "Master Data Bahan Bakar",
                  leftSection: <IconGasStation />,
                  href: "/admin/fuel-type",
                }
              : undefined,
            checkPermissions({ group: "Model" })
              ? {
                  label: "Model Mobil",
                  description: "Master Data Model Mobil",
                  leftSection: <IconSteeringWheel />,
                  href: "/admin/car-model",
                }
              : undefined,
            checkPermissions({ group: "Merk" })
              ? {
                  label: "Merk Mobil",
                  description: "Master Data Merk Mobil",
                  leftSection: <IconBuildingFactory />,
                  href: "/admin/car-brand",
                }
              : undefined,
            checkPermissions({ group: "Tipe" })
              ? {
                  label: "Tipe Mobil",
                  description: "Master Data Tipe Mobil",
                  leftSection: <IconKey />,
                  href: "/admin/car-type",
                }
              : undefined,
            checkPermissions({ group: "Bank Tujuan" })
              ? {
                  label: "Bank Tujuan",
                  description: "Master Data Bank Tujuan",
                  leftSection: <IconCashBanknote />,
                  href: "/admin/target-bank",
                }
              : undefined,
            checkPermissions({ group: "Body Style" })
              ? {
                  label: "Body Style",
                  description: "Master Data Bank Tujuan",
                  leftSection: <IconCar4wd />,
                  href: "/admin/body-style",
                }
              : undefined,
          ].filter(Boolean) as NavigationItemsProps[],
        }
      : undefined,
  ];

  const filteredNavigationItems: NavigationItemsProps[] =
    navigationItems.filter(Boolean) as NavigationItemsProps[];

  return filteredNavigationItems;
}

export default NavigationItems;
