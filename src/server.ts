import { app } from "./app";
import { env } from "./env";

const port = env.PORT || 3333;

app.listen(port, () => console.log(`Server is running on port ${port} 🔥🚀`));
