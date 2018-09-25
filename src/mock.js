// 引入mockjs
const Mock = require("mockjs");
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock 一组数据
const produceNewData = function(){
  let articles = [];
  for(let i = 0; i < 100; i++){
    let newArticleObject = {
      title: Random.csentence(5,30),
      thumbnail_pic_s: Random.dataImage("300x250", "mock的图片"),
      author_name: Randim.cname(),
      date: Random.date() + " " + Random.time()
    }
    articles.push(newArticleObject)
  }

  return { articles: articles}
}

Mock.mock("/new/index", "post", produceNewData);