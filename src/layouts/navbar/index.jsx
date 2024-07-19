import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <DesktopNavbar navItems={navItems} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <MobileSheet navItems={navItems} />
          <UserMenu />
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        © 2024 Your App Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;