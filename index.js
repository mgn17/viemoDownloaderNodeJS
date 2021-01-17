const express= require('express');
var fs = require('fs');
var vidl = require('vimeo-downloader');

const app = express()
app.set('view engine', 'hbs')
app.use(express.static("./"))

app.get('', (req, res) =>{
    res.render("index", {
        url:""
    })

})

app.get("/download",(req,res) =>{

    function download(name){
        vidl(name)
            .pipe(fs.createWriteStream('./videos/video.mp4'));
    }
    var fname =  req.query.data;
    download(fname);
    var tags= fname.split("/")
    var id= tags[3]
    var link="https://player.vimeo.com/video/"+id
    console.log("Downloading")
    while (file("./videos/video.mp4")===false){
    }
    console.log("Downloaded!")


    function file(path){
        try {
            if (fs.existsSync(path)) {
                return true
            }
        } catch(err) {
            return false
        }
    }

    res.render("index", {
        url:link
    })
})



app.listen()
