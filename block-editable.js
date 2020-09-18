module.exports = function(app){
    var BlockEditable = Object.getPrototypeOf(app).BlockEditable = new app.Component("block-editable");
    //BlockEditable.debug = true;
    BlockEditable.createdAt      = "2.0.0";
    BlockEditable.lastUpdate     = "2.0.0";
    BlockEditable.version        = "1";
    // BlockEditable.factoryExclude = true;
    // BlockEditable.loadingMsg     = "This message will display in the console when component will be loaded.";
    // BlockEditable.requires       = [];

    // BlockEditable.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return BlockEditable;
}