
let f=
	function(str)
	{
	let wds=str.split("\t");
	for(let wd of wds)
		console.log(wd+"geg");
		
	}


String.prototype.brace=
	function(inContent)
	{
		const content=inContent;
		if(this.length<2||this.length%2!=0) throw new Error("not Qualifiable simple brace like \"()\"");//>)
		let front=this.substr(0,this.length/2);
		let back=this.substr(this.length/2,this.length);
		return front+content+back;
		
	}
String.prototype.replaceAll=
	function(f,r)
	{
		return this.split(f).join(r);
	};

String.prototype.mutiply=
	function(inMax)
	{
		let str=new String;
		for(i=0;i<inMax;i++)//>)
			str+=this;
		return str;
	};
	
String.prototype.encode=
	function()
	{
		const endl="<br />";

		return this.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("\"","&quot;").replaceAll("\n",endl);
	};


let addLine=
	function(inid)
	{
		const numPart=inid;
		const headerStr="anf_";
		
		const endl="<br />"
		let str=document.getElementById(headerStr+"text:"+numPart).value.encode();
		if(str=="") throw Error("attampt to add an Empty String");
		
		
		let mkpage="";
		let lines=str.split(endl);
		for(let line of lines)
		{
			let mkline="";
			let word_count=0;
			let words=line.split("\t")
			for(let word of words)
			{
				
				mkline+=word;
				word_count+=word.length;
				
				let x=8-word_count%8;
				mkline+=("&nbsp;".mutiply(x));
				word_count+=x;
				
				if(word_count%8!=0) throw Error("why?");
				
				
				
			}
			
			mkpage+=mkline+endl;
		}
		
		document.getElementById(headerStr+"content:"+numPart).innerHTML+=	mkpage;
		return;
	}
	
	
let cleanLine=
	function(inid)
	{
		const numPart=inid;
		const headerStr="anf_";
		
		document.getElementById(headerStr+"content:"+numPart).innerHTML="";
		document.getElementById(headerStr+"text:"+numPart).value="";
		return;
	};
let dupe=
	function(inid)
	{
		const num=inid;
		const numPart=(num).toString();
		
		const headerStr="anf_";
		let clone= document.getElementById(headerStr+"div:"+numPart).cloneNode(true);
		
		
		let div=clone;
		let buttonOfMore	=clone.getElementsByClassName("buttonOfMore")	[0];
		let buttonOfAdd		=clone.getElementsByClassName("buttonOfAdd")   	[0];
		let content			=clone.getElementsByClassName("content")	  	[0];
		let text			=clone.getElementsByClassName("text")		  	[0];
		let buttonOfClear	=clone.getElementsByClassName("buttonOfClear")	[0];
		let buttonOfLess	=clone.getElementsByClassName("buttonOfLess")	[0];

		
		
		
		const nnum=(Math.random()*2147483648).toFixed(0);
		const nnumPart=(nnum).toString();
		buttonOfMore.	id=headerStr+"buttonOfMore"		+nnumPart;
		div.			id=headerStr+"div:"				+nnumPart;
		buttonOfAdd.	id=headerStr+"buttonOfAdd:"		+nnumPart;
		content.		id=headerStr+"content:"			+nnumPart;
		text.			id=headerStr+"text:"			+nnumPart;
		buttonOfClear.	id=headerStr+"buttonOfClear:"	+nnumPart;
		buttonOfLess.	id=headerStr+"buttonOfLess:"	+nnumPart;
		

		div.			setAttribute("style","");
		buttonOfMore.innerHTML="+";
		buttonOfMore.	setAttribute("onclick","dupe"			+"('')".brace(nnumPart)	);
		buttonOfAdd.	setAttribute("onclick","addLine"		+"('')".brace(nnumPart)	);
		//content Not Apply
		buttonOfClear.	setAttribute("onclick","cleanLine"		+"('')".brace(nnumPart)	);
		buttonOfLess.	setAttribute("onclick","EXPLOSION"		+"('')".brace(nnumPart)	);

		
		
		document.body.appendChild(clone);
		
		
		return;
	}
let EXPLOSION=
	function(inid)
	{
		const num=inid;
		const numPart=(num).toString();
		
		const headerStr="anf_";
		let here=document.getElementById(headerStr+"div:"+numPart);
		if(num!=0)document.body.removeChild(here);
	
	}