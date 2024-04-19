var reg_list=[];
var reg_i=0;

var reg_j=0;

var parent= document.querySelector(".container");
var reg_page=document.querySelector(".register");
parent.removeChild(reg_page);

function open_reg()
{
    parent.appendChild(reg_page);
    reg_page.style.visibility="visible";
    var p=document.querySelector(".container").style;
    p.width="950px";
    
}
function remove_reg()
{
   
    var p=document.querySelector(".container").style;
    p.width="475px";
    parent.removeChild(reg_page);
}

function reg()
{
    var name=document.querySelector("#reg_name").value;
    var pass=document.querySelector("#reg_pass").value;
    if(name=="")
    {
        window.alert("Please Enter your Name.");
        return;
    }
    else if(pass==""){
        window.alert("Please Enter your password.");
        return;
    }
    else if(pass.length<5)
    {
        window.alert("Enter Password containing atleast 5 Characters");
        return;
    }
    else{
        reg_list.push([name,pass]);window.alert(" Succesfully Registered!");return;
    }
    

}

function log()
{
    var name1=document.querySelector("#log_name").value;
    var pass1=document.querySelector("#log_pass").value;
    if(name1=="")
    {
        window.alert("Please Enter your Name.");
        return;
    }
    else if(pass1==""){
        window.alert("Please Enter your password.");
        return;
    }
   else{
        var check=0;
        let j=0;
        for(i=0;i<reg_list.length;i++)
        {

            if(reg_list[i][j]==name1 && reg_list[i][j+1]==pass1)
                {
                    check+=1;
                    window.alert("You Are Registered!");
                    localStorage.setItem("username",name1);
                    window.location="first_page.html";
                    
                    
                }
                j=0;
        }        
        if(check<=0)
        {
            window.alert("You are not Registered!");
            return;
        }
        
}

}



