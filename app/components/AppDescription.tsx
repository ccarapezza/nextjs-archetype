import { unstable_getServerSession } from "next-auth/next";
import AsyncComponentWrapper from "./AsyncComponentWrapper";
import Paper from "./material/Paper";
import UserInformation from "./UserInformation";

async function AppDescriptionAsync() {
  const session = await unstable_getServerSession();
  console.log("Loading app-description.js");
  return (
    <Paper sx={{p: 2, m: 2}}>
      <div>
        This is the application description component (server component).
      </div>
      <UserInformation data={session} />
    </Paper>
  );
}

//TODO: This is a workaround for allow promised functional components without console errors
export default function AppDescription() {
  return (
    <AsyncComponentWrapper>
      {/* @ts-expect-error Server Component */}
      <AppDescriptionAsync/>
    </AsyncComponentWrapper>
  );
}