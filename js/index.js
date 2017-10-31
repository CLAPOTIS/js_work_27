var btns=document.getElementsByClassName("btns");
var search=document.getElementsByClassName("search")[0];
var replace=document.getElementsByClassName("replace")[0];
var input=document.getElementsByClassName("input");
var search_btn=document.getElementsByClassName("search_btn")[0];
var replace_btn=document.getElementsByClassName("replace_btn")[0];
var text=document.getElementsByClassName("text")[0];
var change=document.getElementsByClassName("switch")[0];
var circle=document.getElementsByClassName("circle");
var txt=text.innerHTML;
var hh;
circle[0].onmouseover=function(){
	for(var i=1;i<circle.length;i++){
		circle[i].style.display="block";
	}
}
change.onmouseleave=function(){
	for(var i=1;i<circle.length;i++){
		circle[i].style.display="none";
	}
}
btns[0].onclick=function(){
	chooseSearch();
}
btns[1].onclick=function(){
	chooseReplace();
}
circle[1].onclick=function(){
	chooseSearch();
}
circle[2].onclick=function(){
	chooseReplace();
}
function chooseSearch(){
	search.style.display="block";
	replace.style.display="none";
	addClass(btns[0],"btns_selected");
	btns[1].className="btns";
	addClass(circle[1],"circle_selected");
	circle[2].className="circle";
}
function chooseReplace(){
	search.style.display="none";
	replace.style.display="block";
	addClass(btns[1],"btns_selected");
	btns[0].className="btns";	
	addClass(circle[2],"circle_selected");
	circle[1].className="circle";
}
search_btn.onclick=function(){   
    var keyword=input[0].value; 
    var flag=text.innerHTML.indexOf(keyword);
    if(flag<0){
    	alert('没有找到哟~');
    }else{
    	reset();
    	var txt2=text.innerHTML.split(keyword);
    	text.innerHTML=txt2.join("<span class='highlight'>"+keyword+"</span>");
    } 
}
replace_btn.onclick=function(){	
	var keyword=input[1].value;
	var newWord=input[2].value;
	var flag=text.innerHTML.indexOf(keyword);
	if(flag>=0){
		alert("确定替换吗?"); 
		reset();		
    }else{
    	alert('没有这个词哟~');
    } 
	var reg=new RegExp(keyword,"g");
	var newstr=text.innerHTML.replace(reg,newWord);
	var txt2=newstr.split(newWord);
    text.innerHTML=txt2.join("<span class='highlight'>"+newWord+"</span>"); 
}
//初始化
function initial(){
	for(var i=0;i<input.length;i++){
		input[i].value="";
	}
	text.innerHTML=txt;
}
//重置样式
function reset(){
	hh=document.getElementsByClassName("highlight");
	var len=hh.length;
	for(var i=0;i<len;i++){
		addClass(hh[i],"reset");						
	}
}
//添加类
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		element.className=element.className.concat(" "+value);
	}
}