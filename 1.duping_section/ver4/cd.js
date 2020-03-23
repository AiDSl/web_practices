		


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
String.prototype.decode=
	function()
	{
		const endl="<br />";

		return this.replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;","\"").replaceAll("&amp;","&").replaceAll(endl,"\n");
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
		
		
		
		class anf_div
		{

			constructor(clone,innum)
			{
				const headerStr="anf_";
				
				this.div=clone;
				this.buttonOfMore	=clone.getElementsByClassName("buttonOfMore")	[0];
				this.buttonOfAdd	=clone.getElementsByClassName("buttonOfAdd")   	[0];
				this.content		=clone.getElementsByClassName("content")	[0];
				this.text		=clone.getElementsByClassName("text")		[0];
				this.buttonOfClear	=clone.getElementsByClassName("buttonOfClear")	[0];
				this.buttonOfLess	=clone.getElementsByClassName("buttonOfLess")	[0];
				
				const numPart=(innum).toString();
				this.buttonOfMore.	id=headerStr+"buttonOfMore"	+numPart;
				this.div.		id=headerStr+"div:"		+numPart;
				this.buttonOfAdd.	id=headerStr+"buttonOfAdd:"	+numPart;
				this.content.		id=headerStr+"content:"		+numPart;
				this.text.		id=headerStr+"text:"		+numPart;
				this.buttonOfClear.	id=headerStr+"buttonOfClear:"	+numPart;
				this.buttonOfLess.	id=headerStr+"buttonOfLess:"	+numPart;
					
			}
			process(innumPart)
			{
				this.div.		setAttribute("style","");
				this.buttonOfMore.	innerHTML="+";
				this.buttonOfMore.	setAttribute("onclick","dupe"		+"('')".brace(innumPart));
				this.buttonOfAdd.	setAttribute("onclick","addLine"	+"('')".brace(innumPart));
				//content Not Apply
				this.buttonOfClear.	setAttribute("onclick","cleanLine"	+"('')".brace(innumPart));
				this.buttonOfLess.	setAttribute("onclick","EXPLOSION"	+"('')".brace(innumPart));
			}
		};
		
		const son_num=num*2+1;
		const son_numPart=(son_num).toString();
		let son=new anf_div(clone,son_num);
		son.process(son_numPart);
		
		
		
		const father_num=num*2;
		const father_numPart=(father_num).toString();
		let  father=new anf_div(source,father_num)
		
		
		let RootTemplate=document.getElementById(headerStr+"buttonOfMore");
		let isFromRootTemplate=Number.isInteger(Math.log2(num));
		
		
		
		if(isFromRootTemplate)
			RootTemplate.setAttribute("onclick","dupe"+"('')".brace(father_numPart));
		else
			father.process(father_numPart);
		
		

		
		
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