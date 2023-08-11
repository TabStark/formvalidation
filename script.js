const inputname = document.getElementById("inputname");
const inputnumber = document.getElementById("inputnumber");
const inputemail = document.getElementById("inputemail");
const inputpassword = document.getElementById("inputpassword");
const DOB = document.getElementById("DOB");
var hide = document.getElementById("mdls");
// const sex = document.getElementsByName("gender");
// const exfre = document.querySelector('input[name="18+"]');
// const sex = document.getElementsByClassName("gender");
// const exfre = document.getElementsByClassName("Exfre");
const cancelbtn = document.getElementById("cancel");
const submitbtn = document.getElementById("submit");
const submitFullfill = document.getElementById("ok");





submitbtn.addEventListener("click", function save() {

    // hide.index.display = 'none';
    valid_range=".com";
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var gender = document.querySelector('input[type=radio][name=gender]:checked');
    var exfre = document.querySelector('input[type=radio][name=exfre]:checked');

    // md.style.display = 'none'
    if (inputname.value == "" || inputnumber.value == "" || inputemail.value == "" || inputpassword.value == "" || DOB.value == "" || gender == null || exfre== null) {
        // alert("Please fill the Required Details");

        if(inputname.value ==""){
            document.getElementById("nameerror").innerHTML = "Invalid User Name";
        }
        else{
            document.getElementById("nameerror").innerHTML = "";
        }
       
        if(inputnumber.value.length<10 || inputnumber.value.length>10 ){
           
            document.getElementById("mobileerror").innerHTML = "Mobile No Should be 10 digit";
        }
        else{
            document.getElementById("mobileerror").innerHTML = "";
        }
       if(inputemail.value.match(valid_range)){
       
        document.getElementById("emailerror").innerHTML = "";

       }else{
        document.getElementById("emailerror").innerHTML = "Email id Should contain @,.com";
       }

       if(inputpassword.value.match(passw)){
        document.getElementById("passworderror").innerHTML = "";
           
    } else {

        document.getElementById("passworderror").innerHTML = "Password Should contain special char, Num, Alpha";
    }

    if(DOB.value ==""){
        document.getElementById("doberror").innerHTML = "Please Select Date of birth";
    }
    else{
        document.getElementById("doberror").innerHTML = "";
    }

    if(gender == null){
        document.getElementById("gendererror").innerHTML = "Please Select Gender";
    }
    else{
        document.getElementById("gendererror").innerHTML = "";
    }

    if(exfre == null){
        document.getElementById("exfreerror").innerHTML = "Please Select Preofession";
    }
    else{
        document.getElementById("exfreerror").innerHTML = "";
    }
        // md.style.display="block";
    }else{
        hide.classList.toggle("modals");
        
    }   
    }
)


submitFullfill.addEventListener("click", function connect() {
    window.location.href="https://www.naukri.com";
    // window.open("https://www.naukri.com") to open in new page
})

cancelbtn.addEventListener("click", function reload(){
    location.reload();
})
//|