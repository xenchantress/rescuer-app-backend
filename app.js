const express = require("express");
const app = express();

const helperAvatarRoutes = require("./api/helpers/uploadAvatar");
const usersAvatarRoutes = require("./api/users/uploadAvatar");

app.use("/api/helpers", helperAvatarRoutes);
app.use("/api/users", usersAvatarRoutes);

const PORT = process.env.PORT || 8000; // still not sure about the correct Host

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
