app.filter("evenItems", function(){
  return function(item, arg1){    
    if(item instanceof Array){
      var even = [];
      for (var i = 0; i < item.length; i++) {
        if (i%arg1 == 0) {
          even.push(item[i]);
        }
      }
      return even;
    } else return item;
  }
})
