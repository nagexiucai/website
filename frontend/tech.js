// https://github.com/nagexiucai/website

var ctx = undefined;
var entities = [];

// 实体模型
var entity = function (description) {
    return undefined;
}

document.ready = function() {
    var data = 'ajax.success.json';
    for (var i=0; i<data.length; i++) {
        entities.append(entity(data[i]));
    }
}