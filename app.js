//Require moduleconst express = require('express');
// Express Initializeconst 
app = express();
const port = 8000;
app.listen(port,()=> {console.log('listen port 8000');
})
//
create apiapp.get('/hello_world', 
	(req,res)=>{res.send('Hello World');
})