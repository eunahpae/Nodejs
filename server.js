const express = require('express') // express 라이브러리를 사용하겠다는 코드
const app = express()

app.use(express.static(__dirname + '/public'))

const { MongoClient } = require('mongodb')
let db;
const url = 'mongodb+srv://admin:qwer1234@cluster0.ofyar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공')
    db = client.db('Nodejs')
    app.listen(8080, () => {
        console.log('http://localhost:8080 에서 서버 실행중')
    })
  }).catch((err)=>{
    console.log(err)
  })



// 간단한 서버 코드
// 아래 경로 접속시, 응답메시지 반환
app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html')
})

app.get('/shop', (요청, 응답) => {
    응답.send('쇼핑페이지임~~')
})

// app.get('/news', (요청, 응답) => {
//     db.collection('post').insertOne({title : '어쩌구'})
// })

app.get('/list', async (요청, 응답) => {
    let result = await db.collection('post').find().toArray()
    console.log(result)
    응답.send(result[0].title)
})