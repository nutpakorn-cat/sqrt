function incget(url){  
    var ajax1=createAjax();   
    ajax1.onreadystatechange=function(){  
        if(ajax1.readyState==4 && ajax1.status==200){  
            var repl=document.getElementById('myplace');  
            repl.innerHTML=ajax1.responseText;  
        }else{  
            return false;  
        }  
    }  
    ajax1.open("GET",url,true);  
    ajax1.send(null);  
}  