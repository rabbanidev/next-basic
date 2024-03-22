import DashboardNavbar from "../components/DashboardNavbar";

export const metadata = {
  title: "Dashboard Page",
  description: "Dashboard page description",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
}
