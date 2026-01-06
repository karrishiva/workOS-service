import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import express from "express";

import organizationRoute from "./src/routes/organizationRoute";
import userRoute from "./src/routes/usersRoute";
import roleRoute from "./src/routes/roleRoute";
import organizationMemberRoute from "./src/routes/organizationMemberRoute";
import invitationRoute from "./src/routes/invitationRoute";


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", organizationRoute);

app.use("/api", userRoute);

app.use("/api", roleRoute);

app.use("/api", organizationMemberRoute);

app.use("/api", invitationRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});