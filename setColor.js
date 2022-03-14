var Body = {
    setColor : function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
};
var Links = {
    setColor : function(color){
        var alist = document.querySelectorAll('a');
        for(var i=0; i<alist.length;i++){
            alist[i].style.color=color;
        }
    }
};
function dayNightHandler(self){
    if(self.value=='Night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='Day';
        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='Night';
        Links.setColor('blue');
    }
}