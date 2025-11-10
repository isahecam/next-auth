import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";
import { MainHeader } from "@/features/dashboard/components/main-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <MainHeader />
        <main className="h-full w-full overflow-hidden rounded-lg bg-neutral-200 p-2">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
