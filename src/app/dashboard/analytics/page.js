import RedirectButton from "@/app/components/RedirectButton";

export default function Analytics() {
  return (
    <div className="mt-5">
      <h1 className="text-3xl text-gray-800">Dashboard/Analytics Page</h1>
      <p className="mt-2">
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <RedirectButton path="/dashboard/settings">
        Go To settings page
      </RedirectButton>
    </div>
  );
}
