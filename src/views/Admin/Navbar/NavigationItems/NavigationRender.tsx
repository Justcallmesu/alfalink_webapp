import { NavLink } from "@mantine/core";
import NavigationItems from "./NavigationItems";
import { useLocation } from "react-router-dom";

function NavigationRender() {
  const location = useLocation();

  const getActiveNav = (href?: string): boolean => {
    const currentPath = location.pathname.split("/");

    if (!href) return false;

    if (currentPath.length <= 2) return location.pathname.includes(href);
    return currentPath[2] === href?.split("/")[2];
  };

  return (
    <>
      {NavigationItems().map((item) => {
        return (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            description={item.description}
            leftSection={item.leftSection}
            rightSection={item.rightSection}
            disabled={item.disabled}
            active={getActiveNav(item.href)}
          >
            {item.children?.map((child) => {
              return (
                <NavLink
                  key={child.href}
                  href={child.href}
                  label={child.label}
                  description={child.description}
                  leftSection={child.leftSection}
                  rightSection={child.rightSection}
                  disabled={child.disabled}
                  active={getActiveNav(child.href)}
                />
              );
            })}
          </NavLink>
        );
      })}
      <NavLink label />
    </>
  );
}

export default NavigationRender;
