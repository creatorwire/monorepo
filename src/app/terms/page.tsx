import React from "react";

function Page() {
  return (
    <div className="flex flex-col bg-white items-center justify-center w-full max-screen-2xl pb-12 mx-auto scrollbar-hide">
      <iframe
        src="/docs/terms.html"
        className="max-w-7xl w-full h-[90vh] bg-white my-12 p-4"
        title="Privacy Policy"
      />
    </div>
  );
}

export default Page;
