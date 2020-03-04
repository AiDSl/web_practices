
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
		let source=document.getElementById(headerStr+"div:"+numPart);
		let clone= document.getElementById(headerStr+"div:"+numPart).cloneNode(true);
		
		//generate son
		{
			let son_div=clone;
			let son_buttonOfMore	=clone.getElementsByClassName("buttonOfMore")	[0];
			let son_buttonOfAdd	=clone.getElementsByClassName("buttonOfAdd")   	[0];
			let son_content		=clone.getElementsByClassName("content")	[0];
			let son_text		=clone.getElementsByClassName("text")		[0];
			let son_buttonOfClear	=clone.getElementsByClassName("buttonOfClear")	[0];
			let son_buttonOfLess	=clone.getElementsByClassName("buttonOfLess")	[0];

			const son_num=num*2+1;
			const son_numPart=(son_num).toString();
			
			son_buttonOfMore.	id=headerStr+"buttonOfMore"	+son_numPart;
			son_div.		id=headerStr+"div:"		+son_numPart;
			son_buttonOfAdd.	id=headerStr+"buttonOfAdd:"	+son_numPart;
			son_content.		id=headerStr+"content:"		+son_numPart;
			son_text.		id=headerStr+"text:"		+son_numPart;
			son_buttonOfClear.	id=headerStr+"buttonOfClear:"	+son_numPart;
			son_buttonOfLess.	id=headerStr+"buttonOfLess:"	+son_numPart;
			
			//connect function with id
			{
				son_div.		setAttribute("style","");
				son_buttonOfMore.innerHTML="+";
				son_buttonOfMore.	setAttribute("onclick","dupe"		+"('')".brace(son_numPart));
				son_buttonOfAdd.	setAttribute("onclick","addLine"	+"('')".brace(son_numPart));
				//content Not Apply
				son_buttonOfClear.	setAttribute("onclick","cleanLine"	+"('')".brace(son_numPart));
				son_buttonOfLess.	setAttribute("onclick","EXPLOSION"	+"('')".brace(son_numPart));
			}
		}
		
		//modify father
		{
			let father_div=source;
			let father_buttonOfMore	=source.getElementsByClassName("buttonOfMore")	[0];
			let father_buttonOfAdd	=source.getElementsByClassName("buttonOfAdd")   [0];
			let father_content	=source.getElementsByClassName("content")	[0];
			let father_text		=source.getElementsByClassName("text")		[0];
			let father_buttonOfClear=source.getElementsByClassName("buttonOfClear")	[0];
			let father_buttonOfLess	=source.getElementsByClassName("buttonOfLess")	[0];
			
			const father_num=num*2;
			const father_numPart=(father_num).toString();
			
			
			father_buttonOfMore.	id=headerStr+"buttonOfMore"	+father_numPart;
			father_div.		id=headerStr+"div:"		+father_numPart;
			father_buttonOfAdd.	id=headerStr+"buttonOfAdd:"	+father_numPart;
			father_content.		id=headerStr+"content:"		+father_numPart;
			father_text.		id=headerStr+"text:"		+father_numPart;
			father_buttonOfClear.	id=headerStr+"buttonOfClear:"	+father_numPart;
			father_buttonOfLess.	id=headerStr+"buttonOfLess:"	+father_numPart;
			
			
			
			let Factory=document.getElementById(headerStr+"buttonOfMore");
			let isFromFactory=Number.isInteger(Math.log2(num));
			if(isFromFactory)	//reconnect to top element function
				Factory.		setAttribute("onclick","dupe"		+"('')".brace(father_numPart));
			else			//reconnect function with id
			{
				father_div.		setAttribute("style","");
				father_buttonOfMore.innerHTML="+";
				father_buttonOfMore.	setAttribute("onclick","dupe"		+"('')".brace(father_numPart));
				father_buttonOfAdd.	setAttribute("onclick","addLine"	+"('')".brace(father_numPart));
				//content Not Apply
				father_buttonOfClear.	setAttribute("onclick","cleanLine"	+"('')".brace(father_numPart));
				father_buttonOfLess.	setAttribute("onclick","EXPLOSION"	+"('')".brace(father_numPart));
			}
		}
		

		
		
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