'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rp = require('request-promise');

var indexMode = function () {
    function indexMode() {
        _classCallCheck(this, indexMode);
    }

    _createClass(indexMode, [{
        key: 'construct',
        value: function construct() {}
    }, {
        key: 'update',
        value: function update() {
            var options = {
                method: 'GET',
                uri: 'http://localhost:8086/index.php'
            };

            return new Promise(function (resolve, reject) {
                rp(options).then(function (parsedBody) {
                    var info = JSON.parse(parsedBody);
                    if (info) {
                        resove({
                            data: info
                        });
                    } else {
                        reject({});
                    }
                    console.log(info);
                }).catch(function (err) {
                    // Crawling failed...
                });
            });
        }
    }]);

    return indexMode;
}();

exports.default = indexMode;
