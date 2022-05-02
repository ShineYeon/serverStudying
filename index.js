var http = require("http"); //모듈가져올때 require함수
var hostname = "127.0.0.1"; //내컴퓨터가리킴
var port = 8080;

const server = http.createServer(function (req, res) {
  //클라이언트의 요청정보:req, 응답해줘야할 객체의 response:res
  const path = req.url;
  const method = req.method;
  if (path == "/products") {
    if (method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      //status code 200, 헤드에 객체를 넣어줌(내 서버에서 응답을 보낼때 어떤 형식의 응답이냐? json이라는 javascript object 구조)
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method == "POST") {
      //상품을 생성할 때 많이 씀
      res.end("생성되었습니다");
    }
  }
  res.end("Good bye!");
});

server.listen(port, hostname);
console.log("grabmarket server on!");
