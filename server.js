import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/formdata', (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: 'Data received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
