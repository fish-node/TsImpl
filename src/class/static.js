/**
 * 类的静态属性编译后会直接放在类对象上
 */
var Sheep = /** @class */ (function () {
    function Sheep() {
        Sheep.count++;
    }
    Sheep.count = 0;
    return Sheep;
}());
var sheep = new Sheep();
console.log(Sheep.count);
