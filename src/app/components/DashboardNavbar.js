import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <nav>
      <ul className="flex gap-x-2">
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}
