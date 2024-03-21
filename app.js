import Express from 'express';
import bodyParser from 'body-parser';

const app = new Express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const data = {title: "Главная"};
    res.render('sections/main', data);
})

app.get('/calories', (req, res) => {
    const data = {title: "Главная"};
    res.render('sections/calories', data)
})

const port = 3000;
app.listen(port, () => {
    console.log('Server has been started!')
})