var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var memoRoutes = require('./routes/memos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
    
app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/memos', memoRoutes);

app.listen(port, function(){
    console.log("App is running on port " + process.env.PORT);
})