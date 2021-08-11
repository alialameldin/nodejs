

























/*
// bs fe moshkila eno bie run 3la link wa7ed bs w b3den yefsil
const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('home page')
    }
    if(req.url === '/about'){
        res.end('about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>this page not found</p>
        <a href = "/">back home</a>
        `)
})
server.listen(5000)
*/



/*
// async function
const {readFile, writeFile} = require('fs') 

readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/newfile.txt',`cocatinate ${first}, ${second}`,(err,result) => {
            if(err){
                console.log(err);
                return
            }
            console.log(result)
        })
    })
})
*/

/*
// sync function
const {readFileSync,writeFileSync} = require('fs')

const firstfile = readFileSync('./content/first.txt','utf8')
const secondfile = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/newfile.txt',
    `concatinate two files : ${firstfile}, ${secondfile}`,
)

console.log(firstfile,secondfile)
*/

/*
commands
nmp init --> 34an ageb elpackage.jason elli fiha kol 7aga
nmp init -y --. hia hia bs haye3ml elpackage.jason 3latool mesh step by step
*/