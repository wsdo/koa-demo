import indexModel from '../model/indexModel'
const indexController = {
  index(){
    return async(ctx,next) => {
      ctx.body = await ctx.render('index');
    }
  },
  update(){
      var indexM = new indexModel();
      return async(ctx,next) => {
        ctx.body = await indexM.update();
      }
  }
}
export default indexController;
