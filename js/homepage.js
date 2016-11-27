contentHome = document.getElementById("content-home");
contentSearch = document.getElementById("content-search");
contentPost = document.getElementById("content-post");
contentProfile = document.getElementById("content-profile");
        
 homepageicon = document.getElementById("homepageicon");
 searchicon = document.getElementById("searchicon");
 posticon = document.getElementById("posticon");
 usericon = document.getElementById("usericon");

console.log(homepageicon);
console.log(searchicon);


homepageicon.onclick = function(){
    contentHome.style.display = "block";
    contentSearch.style.display = "none";
}


searchicon.onclick = function(){
  
    contentHome.style.display = "none";
    contentSearch.style.display = "block";
}