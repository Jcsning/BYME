
var registerBut = document.getElementById("register");
var showBut = document.getElementById("show");
var username= document.getElementById("username");
var password= document.getElementById("password");
var fbBut= document.getElementById("facebook");
var displayBox=document.getElementById("display");
var login = document.getElementById("login");
var usernameSignin= document.getElementById("usernameSignin");
var passwordSignin= document.getElementById("passwordSignin");




var siggninpage = document.getElementById("siggninpage");
var registerpage = document.getElementById("registerpage");
var newuser = document.getElementById("newuser");
var already = document.getElementById("already");

var applicants=[{
    username:"a00950419",
    password:"zxc",
},
                
            
    
];
  
  newuser.onclick = function(){
      registerpage.style.display = "block";
    
}
  
  already.onclick = function(){
      registerpage.style.display = "none";
  }
  registerBut.onclick = function() {
        var users = 
            {
           username: usernameSignin.value,
           password: passwordSignin.value,

        }

        applicants.push(users);
        console.log(applicants)
       
  }
  
  
  
  login.onclick = function(){
      
      var index=0;
      for(var i = 0; i < applicants.length; i++){
        
          if( usernameSignin.value  == applicants[i].username 
             && passwordSignin.value  == applicants[i].password
             ){
              
              alert("Login Successfully")
              index=1
          }
      }
      if(index==0){
              alert("Try Again")
          }
  }
  
  
 
  //facebook login
  
  fbBut.onclick = function(){
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '958492710963122',
      xfbml      : true,
      version    : 'v2.8'
    });
      console.log(FB);
      
      FB.login( function(resp){
          console.log(resp);
          if(resp.status == "connected"){
              alert("You are connected to FB");
              console.log(resp.authResponse.userID);
              
              FB.api("/me?fields=id,name,picture",
                    function(uresp){
                  console.log(uresp.picture.data.url);
                  var img = document.createElement(img);
                  img.src = uresp.picture.data.url;
                  document.body.appendChild(img);
                  window.user.name = uresp.name;
              });
          }else{
              alert("go home")
          }
      }) 
  };
  
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


}
  