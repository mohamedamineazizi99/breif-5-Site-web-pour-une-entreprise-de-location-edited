

//-----------------------------------------------------------
function next1() {
    var container = document.getElementById('section1');
    sideScroll(container,'right',25,100,10);
};
function next2() {
    var container = document.getElementById('section2');
    sideScroll(container,'right',25,100,10);
};
function prv1 () {
    var container = document.getElementById('section1');
    sideScroll(container,'left',25,100,10);
};
function prv2 () {
    var container = document.getElementById('section2');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

function menu(){
    var x=document.getElementById("container");
    if(x.style.display==="none")
    x.style.display="flex";
    else
    x.style.display="none";
}
function verifyinscription(){
    var fn,ln,mail,passwd,passwd2;
    fn=document.getElementById("firstname").value;
    ln=document.getElementById("lastname").value;
    mail=document.getElementById("email").value;
    passwd=document.getElementById("passwd").value;
    passwd2=document.getElementById("passwd2").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,6}\.[a-z]{2,4}$/;
    var regexpasswd = /^[a-zA-Z*'-_^"@$#]{8,30}$/;
    var regexname = /^[a-zA-Z]{3,16}$/;
    var cpt=0;
     if(fn=="" || ln=="" || passwd=="" || passwd2=="" || mail=="")
        {
            window.alert(" Tous les champs doivent être remplis");
            cpt++;
        }
       
     if(fn!="" && ln!="" && passwd!="" && passwd2!="" && mail!="")
    {
        if(!regex.test(mail) || !regexpasswd.test(passwd) || !regexname.test(fn) || !regexname.test(ln))
        {   
            window.alert(" Respectez les formats des elements entrés ");
            cpt++;
        }
        else if(passwd!==passwd2){
            window.alert(" les mots de passe ne sont pas identiques ");
            cpt++;
        }
    }
   
   if(cpt==0)
   {
    // window.confirm("l'inscription est valide. Nom : "+ln+" Prenom : "+fn+" email :"+mail);
    document.getElementById("firstname").disabled="true";
    document.getElementById("lastname").disabled="true";
    document.getElementById("email").disabled="true";
    document.getElementById("passwd").disabled="true";
    document.getElementById("passwd2").disabled="true";
   }

}
// ---------------------------------------------------------------------------
function verifyreservation(){
   var fn,ln,mail,cin,carte,adresse,regexmail,regexcarte,regexcin;
     fn=document.getElementById("firstnamer").value;
     ln=document.getElementById("lastnamer").value;
     mail=document.getElementById("emailr").value;
     cin=document.getElementById("cinr").value;
     carte=document.getElementById("carter").value;
     adresse=document.getElementById("adresser").value;
     var datedebut=document.getElementById("datedebut").value;
     var datefin=document.getElementById("datefin").value;
     var dateau=new Date();
    
      regexmail = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,6}\.[a-zA-Z]{2,4}$/;
      regexcin = /^[a-zA-Z]{1,3}[0-9]{2,6}$/;
      regexcarte =  /^[a-zA-Z0-9]{5,15}$/;
      var regexname = /^[a-zA-Z]{3,16}$/;
      var ad=/^[0-9]{1,3}[a-zA-Z ]{5,100}$/;
      var cpt=0;
      if(fn=="" || ln=="" || cin=="" || carte=="" || mail=="" || adresse=="" || datedebut=="" || datefin=="" )
         {
             window.alert(" Tous les champs doivent être remplis");
             cpt++;
         }
       
      if(fn!="" && ln!="" && cin!="" && carte!="" && mail!="" && adresse!="" && datedebut!="" && datefin!="")
     {
         if(!regexmail.test(mail) || !regexcin.test(cin) || !regexcarte.test(carte) || !regexname.test(fn) || !regexname.test(ln) || !ad.test(adresse))
         {
            
             window.alert("Respectez les formats des elements entrés");
             cpt++;
         }
         else if(dateau > datedebut || datedebut > datefin)
         {
             window.alert("entrez des dates raisonables");
             cpt++;
         }
     }
   
    if(cpt==0)
    {
    //  window.confirm("la reservation est valide. Nom : "+ln+" Prenom : "+fn+" email :"+mail+" CIN:"+cin+" Carte bancaire "+carte+"adresse :"+adresse);
    document.getElementById("firstnamer").disabled="true";
    document.getElementById("lastnamer").disabled="true";
    document.getElementById("emailr").disabled="true";
    document.getElementById("cinr").disabled="true";
    document.getElementById("carter").disabled="true";
    document.getElementById("adresser").disabled="true";
    document.getElementById("datedebut").disabled="true";
    document.getElementById("datefin").disabled="true";
    document.getElementById("s1").disabled="true";
    document.getElementById("s2").disabled="true";
    document.getElementById("total").value="15000DHS";
    document.getElementById("total").disabled="true";
    }

}
function btnover1(){
    document.getElementById("s1r1").style.display="block";

}
function btnout1(){
    document.getElementById("s1r1").style.display="none";
   
}
function btnover2(){
    document.getElementById("s1r2").style.display="block";
   
}
function btnout2(){
    document.getElementById("s1r2").style.display="none";
      
}
function btnover3(){
    document.getElementById("s1r3").style.display="block";
       
}
function btnout3(){
    document.getElementById("s1r3").style.display="none";
          
}
function btnover4(){
    document.getElementById("s1r4").style.display="block";
           
}
function btnout4(){
    document.getElementById("s1r4").style.display="none";
              
}
function btnover5(){
    document.getElementById("s1r5").style.display="block";
               
}
function btnout5(){
    document.getElementById("s1r5").style.display="none";
                  
}
                                    // dj
function btnover1(){
 document.getElementById("s1r1").style.display="block";

}
function btnout1(){
    document.getElementById("s1r1").style.display="none";
   
}
function btnover2(){
    document.getElementById("s1r2").style.display="block";
   
}
function btnout2(){
    document.getElementById("s1r2").style.display="none";
      
}
function btnover3(){
    document.getElementById("s1r3").style.display="block";
       
}
function btnout3(){
    document.getElementById("s1r3").style.display="none";
          
}
function btnover4(){
    document.getElementById("s1r4").style.display="block";
           
}
function btnout4(){
    document.getElementById("s1r4").style.display="none";
              
}
function btnover5(){
    document.getElementById("s1r5").style.display="block";
               
}
function btnout5(){
    document.getElementById("s1r5").style.display="none";
                  
}
//djk,dl
function btnover6(){
    document.getElementById("s2r1").style.display="block";
      
}
function btnout6(){
    document.getElementById("s2r1").style.display="none";
         
}
function btnover7(){
    document.getElementById("s2r2").style.display="block";
          
}
function btnout7(){
    document.getElementById("s2r2").style.display="none";
             
}
function btnover8(){
    document.getElementById("s2r3").style.display="block";
              
}
function btnout8(){
    document.getElementById("s2r3").style.display="none";
                 
}
function btnover9(){
    document.getElementById("s2r4").style.display="block";
                  
}
function btnout9(){
    document.getElementById("s2r4").style.display="none";
                     
}
function btnover10(){
    document.getElementById("s2r5").style.display="block";
                       
}
function btnout10(){
    document.getElementById("s1r5").style.display="none";
                          
}
   