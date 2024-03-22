import CustomLink from "./CustomLink";

export default function RootNavbar() {
  return (
    <nav>
      <ul className="p-4 flex gap-x-2">
        <li>
          <CustomLink path="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink path="/contact-us">Contact Us</CustomLink>
        </li>
        <li>
          <CustomLink path="/dashboard">Dashboard</CustomLink>
        </li>
        <li>
          <CustomLink path="/posts">Posts</CustomLink>
        </li>
      </ul>
    </nav>
  );
}
