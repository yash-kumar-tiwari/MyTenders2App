import express from 'express';
import * as url from 'url';
import * as path from 'path';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import session from 'express-session';
import cookie from 'cookie-parser';
import cors from 'cors';

const app = express();
const __dirname = url.fileURLToPath(new URL ('.', import.meta.url));

//to handle cross origin request
app.use(cors());

//configuration to handle cookie
// app.use(cookie());

//configuration to enable session
// app.use(session({"secret":"madhya_pradesh_police"}));

//configuration to extract request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //configuration to extract request file content
app.use(fileUpload());

//configuration to extract request file content with size limit
// app.use(fileUpload({
//     limits:{ fileSize : 50 * 1024 * 1024 * 1024}
// }));

//application level url routes

import index from './routes/IndexRoute.js';
import admin from './routes/AdminRoute.js';
import user from './routes/UserRoute.js';

//route level middleware

app.use("/webapiadmin", admin);
app.use("/webapiuser", user);
app.use("/webapi", index);

app.listen(3001);

console.log("Server Invoked at link http://localhost:3001");