import React from "react";
import CustomLink from "../components/CustomLink";

export default function UserLayout({ children }) {
  return (
    <div className="flex gap-x-5 items-center">
      <aside>
        <ul>
          <li>
            <CustomLink path="/profile">Profile</CustomLink>
          </li>
          <li>
            <CustomLink path="/courses">Courses</CustomLink>
          </li>
        </ul>
      </aside>
      {children}
    </div>
  );
}
