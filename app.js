'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Koa = require('koa'); // koa 2.x
var router = require('koa-simple-router');
var app = new Koa();
var render = require('koa-swig');
var co = require('co');
var path = require('path');

var serve = require('koa-static');
// var index = require(serve + '')

require("babel-core/register");
require("babel-polyfill");

_initController2.default.index(app, router);

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
  ext: 'html', //尾缀
  writeBody: false
}));

app.use(serve(__dirname + '/public/'));
app.use(function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ctx.render('index');

          case 2:
            return _context.abrupt('return', ctx.body = _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(3000);
exports.default = app;
