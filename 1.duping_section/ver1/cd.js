
let f=()=>console.log("yes");

let addLine=
	function(inid)
	{
		const focusStr=inid;
		
		const headerStr="anf_";
		focusStr.replace(headerStr,"");
		const numPart=focusStr.split(":")[1];
		
		document.getElementById(headerStr+"content:"+numPart).innerHTML+="hello world<br />";
		return;
	}
	
	
let cleanLine=
	function(inid)
	{
		const focusStr=inid;
		
		const headerStr="anf_";
		focusStr.replace(headerStr,"");
		const numPart=focusStr.split(":")[1];
		
		document.getElementById(headerStr+"content:"+numPart).innerHTML="";
		//document.getElementById(headerStr+"buttonOfClear:"+numPart).setAttribute("onclick","f()");
		return;
	};
let dupe=
	function(innum)
	{
		const num=innum;
		const numPart=(num).toString();
		
		const headerStr="anf_";
		var clone= document.getElementById(headerStr+"div:"+numPart).cloneNode(true);
		
		
		let div=clone;
		let buttonOfAdd=clone.getElementsByClassName("buttonOfAdd")[0];
		let content=clone.getElementsByClassName("content")[0];
		let buttonOfClear=clone.getElementsByClassName("buttonOfClear")[0];

		
		
		
		const nnumPart=(num+1).toString();
		div.			id=headerStr+"div:"+nnumPart;
		buttonOfAdd.	id=headerStr+"buttonOfAdd:"+nnumPart;
		content.		id=headerStr+"content:"+nnumPart;
		buttonOfClear.	id=headerStr+"buttonOfClear:"+nnumPart;

		

		
		buttonOfAdd.	setAttribute("onclick","addLine('"	+headerStr+"buttonOfAdd:"	+nnumPart+"')");
		//content Not Apply
		buttonOfClear.	setAttribute("onclick","cleanLine('"+headerStr+"buttonOfClear:"	+nnumPart+"')");

		
		
		document.body.appendChild(clone);
		
		let buttonOfMore=document.getElementById("anf_buttonOfMore");
		buttonOfMore.setAttribute("onclick","dupe("+nnumPart+")");
		buttonOfMore.innerHTML="dupe Block"+nnumPart;
		
		return;
	}