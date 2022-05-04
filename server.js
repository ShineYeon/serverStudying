const express = require("express"); //express 모듈 다운받은 걸 불러와서
const cors = require("cors");
const models = require("./models");
const app = express(); //함수 형태로 실행시키면 사용가능
const port = 8080;

app.use(express.json()); //express인 app에 대한 설정을 해줌, json형식
//express 서버에서도 json으로 하도록
app.use(cors()); //cors 적용 시 모든 브라우저에서 나의 서버에 요청가능

//get요청이 왔을때 (method가 get인 products라는 경로에 요청이 왔을 때, 뒤의 익명함수가 실행된다)
app.get("/products", (req, res) => {
  const query = req.query;
  console.log("QUERY: ", query);
  res.send({
    products: [
      {
        id: 1,
        name: "농구공",
        price: 100000,
        seller: "조던",
        imageUrl: "images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: 50000,
        seller: "메시",
        imageUrl: "images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 10000,
        seller: "그랩",
        imageUrl: "images/products/keyboard1.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

//첫번째 인자에는 포트번호, 두번째 인자에는 함수
app.listen(port, () => {
  console.log("그랩의 서버가 돌아가고 있습니다.");
  models.sequelize
    .sync()
    .then(() => {
      //then 안에(promise객체) 람다함수
      console.log("DB connected!");
    })
    .catch((err) => {
      console.error(err);
      console.log("DB connect error");
      process.exit();
    });
});
