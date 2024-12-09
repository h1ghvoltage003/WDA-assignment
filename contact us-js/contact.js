var centered = document.getElementById("centered");
var original = document.getElementById('original');
var btn = document.getElementById("btn");
var ele;
function hide(t)
{
    ele = document.getElementById(t);
    
    original.style.display = 'none';
    ele.style.display = 'block';
    ele.setAttribute('class','added');
    
    
    document.body.style.backgroundImage = "url('images/finback.jpg')";
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundPosition = "center center";
    
    // btn.style.display = "block";
    btn.removeAttribute('id');
    btn.style.display = 'block';
    btn.setAttribute("class","btnon");
    
}

// if(btn.style.display == 'block')
// {
//     alert("indide it");
    
btn.addEventListener('click',function()
{
    ele.setAttribute('class','hide');
    original.style.display = 'flex';
    ele.style.display = 'none';
    document.body.style.backgroundImage = 'none';
    btn.style.display = "none";
    btn.removeAttribute('class');
    btn.setAttribute('id',"btn");
});

// }
