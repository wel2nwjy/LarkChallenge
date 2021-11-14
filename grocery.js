// creating xhr request
var xhttp= new XMLHttpRequest();

// event listener
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
        // document.getElementById("demo").innerHTML=this.responseText; // for text file
        var response=JSON.parse(this.responseText);
        var Jgrocery=response.grocery;
        var nflag=0,nslno=0;
        var output="",eachrow="<tr>",eachdata="";
        var stylebg='style="background-color: #E5DCC3;"'
        for (let index = 0; index < Jgrocery.length; index++) {
            nslno=index+1;
                if(nflag==1){
                    eachrow="<tr "+stylebg+">";
                    nflag=0;
                }else{
                    eachrow="<tr>";
                    nflag=1;
                }
                    eachdata="<td>"+nslno+"</td>"+"<td>"+Jgrocery[index].name+"</td>"+"<td>"+Jgrocery[index].quantity+"</td>"+"<td>"+Jgrocery[index].unit+"</td>"+"<td>"+Jgrocery[index].dept+"</td>"+"<td>"+Jgrocery[index].notes+"</td>";                
                eachrow  +=  eachdata+"</tr>";

                output +=eachrow;
        }

         document.getElementById("groceryList").insertAdjacentHTML("afterend",output);
    }
}

xhttp.open("GET","groceryList.json",true);
xhttp.send();