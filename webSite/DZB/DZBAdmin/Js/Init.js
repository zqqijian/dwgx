String.prototype.Trim=function()
{
return this.replace(/^\s+|\s$/g,"");
}
function chkForm(names){
arrContent=names.split('|');
if(arrContent.length>1){
for(var i=0;i<arrContent.length;i++){
var e=document.getElementById(arrContent[i]);
var t=document.getElementById(arrContent[i]+"Text");
if(e.value.Trim()==""){
alert("请输入"+t.innerText+"!");
e.focus();
return false;
}
}
} 
if(arrContent.length==1){
var e=document.getElementById(names);
var t=document.getElementById(names+"Text");
if(e.value.Trim()==""){
alert("请输入"+t.innerText+"!");
e.focus();
return false;
}
}
return true;
}
function isNum(NUM){
var i,j,strTemp;
 strTemp="0123456789.";
 if ( NUM.length== 0)
  return 0
 for (i=0;i<NUM.length;i++)
 {
  j=strTemp.indexOf(NUM.charAt(i)); 
  if (j==-1)
  {
  //说明有字符不是数字
   return false;
  }
 }
 //说明是数字
 return true;

}
 
function setCookie (name, value) {
	
	var argv=setCookie.arguments;
	var argc=setCookie.arguments.length;
	var expires=(argc>2)?argv[2]: null;
	var path=(argc>3)? argv[3]: null;
	var domain=(argc>4)? argv[4]: null;
	var secure=(argc>5)? argv[5]: false;
	document.cookie = name+"="+escape(value)+
	((expires==null)?"":(";expires="
	+expires.toGMTString()))+
	((path==null)?"":(";path="+path))+
	((domain==null)?"":(";domain="+
	domain))+
	((secure==true)?";secure":"");
}

function getCookie(name) {
	var arg=name+ "=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen) {
		var j=i+alen;
		if(document.cookie.substring(i,j) == arg){
			return getCookieVal(j);
		}
		i=document.cookie.indexOf("",i)+1;
		if(i==0)break;
	}
	return null;
}
function copyToClipBoard(url){
 window.clipboardData.setData("Text",url); 
 alert("复制成功，请在需要粘贴的地方点鼠标右键选粘贴");
}

 

/***判断是否为日期***/
function isDate(str)
{
 var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
 if(r==null)
 {
  return false;
 } 
 var d= new Date(r[1], r[3]-1, r[4]); 
 if(!(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]))
 {  
  return false;
 }
 return true;
} 


function doForeColor(o){
			var sInitColor = null;
		  	 if (sInitColor == null) 
			var sColor =document.getElementById("dlgHelper").ChooseColorDlg();
			else
			var sColor = dlgHelper.ChooseColorDlg(sInitColor);
			//alert(sColor);
			if(sColor==0)return false;
			sColor = sColor.toString(16)
			if (sColor.length < 6) {
		  	var sTempString = "000000".substring(0,6-sColor.length);
		 	sColor = sTempString.concat(sColor);
		}
			o.value="#"+sColor;
			}
			
			function $(n){
			return document.getElementById(n);
			}
 