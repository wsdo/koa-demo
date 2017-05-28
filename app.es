const Koa = require('koa') // koa 2.x
const router = require('koa-simple-router')
const app = new Koa()
var render = require('koa-swig');
var co = require('co');
var  path = require('path');

var serve = require('koa-static');
// var index = require(serve + '')

require("babel-core/register");
require("babel-polyfill");

import iniController from './controller/initController'
iniController.index(app,router);



// app.use(router(_ => {
//   _.get('/', async(ctx, next) => {
//     ctx.body = await ctx.render('index')
//   })
// }));


app.context.render = co.wrap(render({
  // ...your setting
  root: path.join(__dirname, 'views'),
  autoescape: true, //自动空格
  cache: 'memory', // disable, set to false
  ext: 'html',  //尾缀
  writeBody: false
}));

app.use(serve(__dirname + '/public/'));
app.use(async ctx => ctx.body = await ctx.render('index'));


app.listen(3000);
export default app;
