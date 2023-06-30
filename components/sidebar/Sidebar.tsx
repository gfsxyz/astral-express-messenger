import getCurrentUser from "@/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const curretUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={curretUser!} />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
};
export default Sidebar;
