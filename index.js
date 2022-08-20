console.log('헬로 형섭 !')

const express = require('express')
const app = express()
const port = 8080;
var cors = require('cors')
 
app.use(cors())

app.get('/', function (req, res) {
  res.send(`<a href ='https://port-0-web-publishing-back-by-riverti-2jz924l72brqcl.gksl1.cloudtype.app/dog'> Hello World & 안녕형섭 on port ${port}</a>`)
})

app.get('/dog', function (req, res) {
  res.send("<a href ='https://port-0-web-publishing-back-by-riverti-2jz924l72brqcl.gksl1.cloudtype.app/dog/pic'> 개 멍멍</a>")
})

app.get('/sound/:name', (req, res) => {
  const{ name } = req.params
  console.log(name)

  if(name == "dog"){
    res.json({'sound':'멍멍'})
  }else if(name == "cat"){
    res.json({'sound':'야옹', 'img':"https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"})
  }else if(name == "pig"){
    res.json({'sound':'꿀꿀'})
  }else {
    res.json({'sound':'몰라'})
  }

})

app.get('/user/:id', function (req, res) {
  const p = req.params
  console.log(p.id)
  const q = req.params
  console.log(q.q)
  console.log(q.name)
  res.json({'userid':q.name})
})
//사용하기 : localhost:8080/user/asdf?q=jocoding&name=jo&age=20

app.post('/user/:id',(req, res) => {
  const p = req.params
  console.log(p);
  const b = req.body;
  console.log(b);

  res.send({'message':'Hello LHS'})
})

app.get('/dog/pic', function (req, res) {
  res.send("<a href ='https://tse1.mm.bing.net/th?id=OIP.Edr8ryv0t6Htxndp7W8MBwHaJ4&pid=15.1'> 고양이 냐용냐옹</a><br><br><a href ='https://analporngifs.com/content/2021/09/angel-anal-pov_001.gif'> 다른 고양이 냐용냐옹</a>")
  // res.send("<a href ='https://analporngifs.com/content/2021/09/angel-anal-pov_001.gif'> 다른 고양이 냐용냐옹</a>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
