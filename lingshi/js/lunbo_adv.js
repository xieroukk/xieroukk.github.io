
var iCount=1;
window.onload = function () {

    if(document.getElementById("a1")!=null){
        document.getElementById("a1").onclick = function(){
            iCount=1;
            changebgcolor(iCount);}
    }
    if(document.getElementById("a2")!=null){
        document.getElementById("a2").onclick = function(){
            iCount=2;
            changebgcolor(iCount);}
    }
    if(document.getElementById("a3")!=null){
        document.getElementById("a3").onclick = function(){
            iCount=3;
            changebgcolor(iCount);}
    }

    var iCarouselid = window.setInterval("carousel()", 2000);

   

}

function carousel(){
    var sImgSrc=eval("'imgs/ban'+iCount.toString()+'.jpg'");
    var sAchange=eval("'a'+iCount.toString()");
    /*记录需要变回颜色的链接顺序。*/
    var iA=iCount-1;
    if(iA==0){iA=3;}
    var sArestore=eval("'a'+iA.toString()");
    document.getElementById("banner").src=sImgSrc;
    document.getElementById(sAchange).style.backgroundColor="hsl(20,30%,50%)";
    document.getElementById(sArestore).style.backgroundColor="hsl(20,50%,30%)";
    iCount=iCount+1;
    if(iCount==4){iCount=1;}
}

function changebgcolor(iNum){
    document.getElementById("banner").src=eval("'imgs/ban'+iNum.toString()+'.jpg'");
    for(var iC= 1;iC<=3;iC++){
        var sA=eval("'a'+iC.toString()");
        if(iC==iNum)
        {
            document.getElementById(sA).style.backgroundColor="hsl(20,30%,50%)";
        }
        else
        {
            document.getElementById(sA).style.backgroundColor="hsl(20,50%,30%)";
        }
    }
}


