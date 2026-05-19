import { Analytics } from "@vercel/analytics/react";
import IndexRoute from "./index";

export default function Root() {
  return (
    <>
      <main lang="he" dir="rtl">
        <IndexRoute />
      </main>
      <Analytics />
    </>
  );
}
