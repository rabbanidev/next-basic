import RedirectButton from "@/app/components/RedirectButton";

export default function Settings() {
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-gray-800">Dashboard/Settings Page</h1>
      <p className="mt-2">
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <RedirectButton path="/dashboard/analytics">
        Go To analytics page
      </RedirectButton>
    </div>
  );
}
