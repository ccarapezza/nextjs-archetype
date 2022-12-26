import { unstable_getServerSession } from "next-auth/next";
import Paper from "./material/Paper";
import UserInformation from "./UserInformation";

export default async function AppDescription() {
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