const express = require('express') // express 라이브러리를 사용하겠다는 코드
const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

// 간단한 서버 코드
// 아래 경로 접속시, 응답메시지 반환
app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html')
})

app.get('/shop', (요청, 응답) => {
    응답.send('쇼핑페이지임~~')
})