const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const expressEjsLayouts = require('express-ejs-layouts');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressEjsLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('layout', 'layout');

const personRoutes = require('./routes/personRoutes');

app.use('/people', personRoutes);

app.get('/', (req, res) => {
    res.redirect('/people');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});