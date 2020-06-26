const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Logger ...' }));

// Declair All the Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
