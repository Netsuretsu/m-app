import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Topbar from "@/components/topbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="p-3 w-full">
                <div className="flex flex-row">
                    <SidebarTrigger />
                    <Topbar />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}
