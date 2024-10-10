import Link from "next/link";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoFunnelOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";



export function Menu() {
  return (
    <aside className="w-1/6 flex flex-col items-stretch space-y-0 border p-4 rounded-lg">
      <nav>
        <ul className="flex flex-col gap-2">
          <MenuItem href="/" icon={<IoFunnelOutline />}>Leads</MenuItem>
          <MenuItem href="/campanha" icon={<IoFunnelOutline />}>Campanha</MenuItem>
          <MenuItem href="/" icon={<FiUsers />}>Usuários</MenuItem>
          <MenuItem href="/relatorios" icon={<HiOutlineDocumentReport />}>Relatórios</MenuItem>
          <MenuItem href="/representantes" icon={<HiOutlineDocumentReport />}>Representantes</MenuItem>
        </ul>
      </nav>
    </aside>
  );
}

interface MenuItemProps {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

function MenuItem({ children, href, icon }: MenuItemProps) {
  return (
    <li className="flex gap-2 items-center">       
      {icon}
      <Link href={href}>{children}</Link>     
    </li>
  );
}
