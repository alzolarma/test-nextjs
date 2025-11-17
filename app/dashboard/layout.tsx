import SidebarTemplate from "../components/template/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarTemplate>
            {children}
        </SidebarTemplate>
    );
}
