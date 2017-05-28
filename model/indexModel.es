var rp = require('request-promise');
class indexMode{
    construct(){

    }
    update(){
        var options = {
          method: 'GET',
          uri: 'http://localhost:8086/index.php'
        };

        return new Promise((resolve,reject) => {
            rp(options)
              .then(function(parsedBody){
                  // const info = JSON.parse(parsedBody);
                  // if (info) {
                  //   resove({
                  //       data:info
                  //   })
                  // }else{
                  //     reject({})
                  // }
                  console.log(parsedBody);
              })
              .catch(function (err) {
              // Crawling failed...
              });
        })

    }
}

export default indexMode;
