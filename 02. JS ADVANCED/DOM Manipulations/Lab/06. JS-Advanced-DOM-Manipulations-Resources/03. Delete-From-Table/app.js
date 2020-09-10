function deleteByEmail() {

    let searchedEmail = document.getElementsByTagName("input")[0].value
    let emailList = document.getElementsByTagName("tbody")[0].children;
    let found = false
    for (let i = 0; i < emailList.length; i++) {
        let current = emailList[i].children;

        if(current[1].textContent === searchedEmail){
            found = true;
           document.querySelector("tbody").removeChild(emailList[i])
           document.getElementsByTagName("input")[0].value = ""
           document.getElementById("result").textContent = "Deleted"
        }
    }

    if(!found){
        document.getElementById("result").textContent = "Not found."
        document.getElementsByTagName("input")[0].value = ""
    }
}