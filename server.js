import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contact.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = 5000;


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // required for cookies
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api/contact', contactRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
