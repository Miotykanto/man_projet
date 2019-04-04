
// import * as path from 'path'

var fs=require("fs")

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports.route=function (app){

    
    app.get('./assets/*', (req, res) => {
        res.sendFile(req.url, {root: './'})
    })

    app.get('/', function(req, res) {

        res.setHeader('Content-Type', 'text/plain');
    
        res.send('Vous êtes à l\'accueil');
    
    });
    app.get('/list', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
        try{
               var d= fs.readFileSync('./route/note.json','utf-8')
               var test=JSON.parse(d)
               for(let i=0;i<test.length;i++){ 
                   let b=test[i].image
                   app.get(b,function(req,resp){
                       try{
                        var t='.'+b
                        var f=fs.readFileSync(t)
                        resp.write(f)
                        resp.end()
                       }catch(e){
                        console.log(e.stack);
                       }
               
                   })
               }
          
                res.send(d)
        }catch(e){
             console.log(e.stack);
        }
    
    });
    
    
    app.get('/test', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
    
        try{
                var b=fs.readFileSync('./route/test.json','utf-8')
                var test=JSON.parse(b)
                for(let i=0;i<test.length;i++){ 
                    let b=test[i].image
                    app.get(b,function(req,resp){
                        try{
                         var t='.'+b
                         var f=fs.readFileSync(t)
                         resp.write(f)
                         resp.end()
                        }catch(e){
                         console.log(e.stack);
                        }
                
                    })
                }
                    res.send(b)
        }catch(z){
            console.log(z.stack);
        }
    
    });

    app.get('/personne', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
    
        try{
                var m=fs.readFileSync('./route/personne.json','utf-8')
                var test=JSON.parse(m)
                for(let i=0;i<test.length;i++){ 
                    let b=test[i].image
                    app.get(b,function(req,resp){
                        try{
                         var t='.'+b
                         var f=fs.readFileSync(t)
                         resp.write(f)
                         resp.end()
                        }catch(e){
                         console.log(e.stack);
                        }
                
                    })
                }
                    res.send(m)
        }catch(n){
            console.log(n.stack);
        }
    
    });

    






    
    

}