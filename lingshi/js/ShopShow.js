
//单击图片列表
function showPic(num)
{
	//将所有的li样式赋值为空
	var objUl=FulS();
	for(var i=0;i<objUl.length;i++)
	{
		objUl[i].className="";
	}
	//对单击的进行样式应用
	FliS(num).className="tsSelectImg";	
	//得到单击后的图片值
	var src=Fpic(num).getAttribute("tsImgS");
	//进行赋值
	var Objimg=FimgS();
	
	Objimg.src=Fpic(num).src;

	document.getElementById("tsImgS").getElementsByTagName("a")[0].href=src;
	
	//图片等比例
	tsScrollResize();

}
//返回图片对象
function Fpic(i)
{
	var tsImgSCon=document.getElementById("tsImgSCon").getElementsByTagName("li");
	return src=tsImgSCon.item(i).getElementsByTagName("img")[0];
}
//返回li对象
function FliS(i)
{
	return document.getElementById("tsImgSCon").getElementsByTagName("li")[i];
}
//返回图片列表对象
function FulS()
{
	return document.getElementById("tsImgSCon").getElementsByTagName("li");
}
//查找最大的图
function FimgS(){
	return document.getElementById("tsImgS").getElementsByTagName("img")[0];
}
//查找Ul对象
function FulSs()
{
	return document.getElementById("tsImgSCon").getElementsByTagName("ul")[0];
}
//图片集外面的DIV宽
document.getElementById("tsImgSCon").style.width=FliS(0).offsetWidth*4+"px";
	
//Ul宽
FulSs().style.width=FliS(0).offsetWidth*FulS().length+"px";

//图片等比例
tsScrollResize();