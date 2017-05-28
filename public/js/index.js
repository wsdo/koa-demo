//声明父类
class praiseButton {
    constructor(num, element) {
        //初始化构造 最初点击数为0
        this.num = num;
        //注册子类点击按钮
        this.element = element;
    }
    clickAction() {
        //点击动作 回掉使用箭头函数
        this.element.click(() => {
            if (this.num < 10) {
                //如果点击数量小于10 直接去掉滤镜
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num = this.num + add(this.num);
                setTimeout(function() {
                    $('#animation').removeClass('num');
                }, 1000);
                axios.get('./index/update')
                  .then(function(response){
                    console.log(response);
                  })
                  .catch(function(error){
                    console.log(error);
                  });
            } else {
                //如果点击数量大于10 加灰
                this.element.css('-webkit-filter', 'grayscale(1)');
                this.num = 0;
            }
            console.log(this.num);
        });
    }
}
//创建并继承大拇指子类 并真正传入要要实现的页面元素
class thumb extends praiseButton {
    constructor(num, element) {
        super(num, element)
    }
}
//输出thumb模块
export
default {
    thumb
};
//声明变量 构造类 执行点击动作
// let f = new thumb(0, $('#thumb'));
// f.clickAction();
