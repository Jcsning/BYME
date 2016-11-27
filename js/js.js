
var registerBut = document.getElementById("register");

var username= document.getElementById("username");
var password= document.getElementById("password");
var fbBut= document.getElementById("facebook");
var displayBox=document.getElementById("display");
var login = document.getElementById("login");
var usernameSignin= document.getElementById("usernameSignin");
var passwordSignin= document.getElementById("passwordSignin");




var signinpage = document.getElementById("signinpage");
var registerpage = document.getElementById("registerpage");
var newuser = document.getElementById("newuser");
var already = document.getElementById("already");
var homepage = document.getElementById("homepage");


var applicants=[{
    username:"a00950419",
    password:"zxc",
},
  
];
  
 /* newuser.onclick = function(){
      
      
      signinpage.style.display = "none";
      registerpage.style.display = "block";
    
}
  
  already.onclick = function(){
      registerpage.style.display = "none";
      signinpage.style.display = "block";
  }
  registerBut.onclick = function() {
        var users = 
            {
           username: usernameSignin.value,
           password: passwordSignin.value,

        }

        applicants.push(users);
        console.log(applicants);
      alert("Congradulations! Register successfully!")
       registerpage.style.display = "none";
      signinpage.style.display = "block";
       
  }
  
  var post = document.getElementById("post");
  var posting = document.getElementById("posting")
  post.onclick = function(){
      profile.style.display = "none";
      posting.style.display = "block";
    
    
}
  
  
  login.onclick = function(){
      
      var index=0;
      console.log(index);
      for(var i = 0; i < applicants.length; i++){
        
          if( usernameSignin.value  == applicants[i].username 
             && passwordSignin.value  == applicants[i].password
             ){
              
              alert("Login Successfully")
              index=1
          }
      }
      if(index == 0){
              alert("Try Again")
          }
  }
  
  */
 
  //facebook login
  
  
  window.user = {  
    name:"",
    img:"",
    };

  fbBut.onclick = function(){
      console.log("aa")
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
               window.location.href="homepage.html";
  
              FB.api("/me?fields=id,name,picture",
                    function(uresp){
                  console.log(uresp.picture.data.url);

                  window.user.img = uresp.picture.data.url;
                  window.user.name = uresp.name;
                  
                  
                  var userimg = document.getElementById("userimg")
                  var facebookname = document.getElementById("facebookname")
                  
                  userimg.src = window.user.img;
                  facebookname.innerHTML = window.user.name;
          
                  console.log(facebookname);
              });
          }else{
              alert("Try Again")
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
  
