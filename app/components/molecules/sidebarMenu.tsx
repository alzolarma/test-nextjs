import { ClipboardIcon, UsersIcon } from "@heroicons/react/16/solid";
import SidebarItem from "../atoms/SidebarItem";
import { InboxIcon } from "@heroicons/react/24/outline";

interface SidebarMenuProps {
  currentPath?: string;
}

const SidebarMenu = ({ currentPath  }: SidebarMenuProps) => {
  const menuItems = [
      { label: 'Posts', href: '/dashboard/posts', Icon: ClipboardIcon },
      { label: 'Comentarios', href: '/dashboard/comments', Icon: InboxIcon },
      { label: 'Usuarios', href: '/dashboard/users', Icon: UsersIcon },
  ];

  return (
      <nav className="space-y-2 px-2">
          {menuItems.map((item) => (
              <SidebarItem
                  key={item.href}
                  label={item.label}
                  Icon={item.Icon}
                  href={item.href}
                  isActive={currentPath === item.href}
              />
          ))}
      </nav>
  );
};

export default SidebarMenu;