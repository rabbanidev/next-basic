import { Suspense } from "react";
import Posts from "../components/Posts";

export const metadata = {
  title: "Posts Page",
  description: "Posts page description",
};

export default function PostBoard() {
  return (
    <div>
      <h1 className="text-3xl text-gray-800">Posts Page</h1>
      <Suspense
        fallback={<h1 className="text-2xl">Posts loading with suspnse....</h1>}
      >
        <Posts />
      </Suspense>
    </div>
  );
}
