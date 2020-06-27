const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Initiate Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Logger ...' }));

// Declair All the Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/loggs', require('./routes/loggs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
