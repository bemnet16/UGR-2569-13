//JavaScript for transcript video and audio on Home page and About page

const transcriptAudio = () => {
    const tra = document.getElementById('text-2');
    tra.style.display = 'block'
    document.getElementById('tra2').style.display = 'none'
}

const transcriptVedio = () => {
    const tra = document.getElementById('text-1');
    tra.style.display = 'block'
    document.getElementById('tra1').style.display = 'none'
}


// JavaScript for Review page    

let load = document.getElementById('load');
const review = document.getElementsByClassName('review__items');
let isLoad = false;

const loadMore = () => {
    isLoad = !isLoad;
    isLoad?load.innerHTML = 'Show Less':load.innerHTML = 'Load More';

    if(isLoad){
        for(let i = 0; i < review.length;i++){
            review[i].style.display = 'block';
        }
    }else{
        for(let i = 3; i <= review.length;i++){
            review[i].style.display = 'none';
        }
    }
}

// JavaScript for Contact page

function validate() {
   var fullName = document.getElementById("fullName").value;
   var phone = document.getElementById("phone").value;
   var message = document.getElementById("message").value;
   var fullNameValid = validateName(fullName);
   var phoneValid = validatePhone(phone);


    if( document.myForm.fullName.value == "" ) {
       alert( "Please provide your FULL name!" );
       document.myForm.fullName.focus() ;
       return false;
    }
    if( document.myForm.phone.value == "" ) {
        alert( "Please provide your PHONE Number!" );
        document.myForm.phone.focus() ;
        return false;
     }
     if( document.myForm.message.value == "" ) {
       alert( "Please provide your MESSAGE!" );
       document.myForm.message.focus();
       return false;
    }
     if (!fullNameValid) {
      alert("Invalid name. Please enter only letters.");
      return false;
     }

    if (!phoneValid) {
        alert("Invalid phone number. Please enter only digits.");
        return false;
    }
        if( document.myForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
        }
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email")
       document.myForm.email.focus() ;
       return false;
    }
    return( true );
}

function validateName(name) {
    var nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(name);
}
function validatePhone(num) {
    var nameRegex = /^[0-9]+$/;
    return nameRegex.test(num);
}

//JavaScript for FAQ

const button=Array.from(document.getElementsByClassName("questions__list--btn"))
button.forEach((btn)=>{
    btn.addEventListener("click",show)
})
let isChecker=true;
function show(e){
     if(isChecker){
         
         e.target.parentElement.children[1].style.display="inline-block";
         e.target.style.rotate="-90deg"
        }
        
     else{
        e.target.parentElement.children[1].style.display="none";
        e.target.style.rotate="90deg"
     }
     isChecker=!isChecker
}

