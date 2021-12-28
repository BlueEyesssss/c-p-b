function Changee(){
    var inputt = document.getElementById("inputt");
    var outputt = document.getElementById("resultt");
    var s = "";
    if(document.getElementById("sm").onclick){
        for (let i = 0; i < inputt.value.length; i++) {
            var a = inputt.value.charCodeAt(i) - 1;
            s = s.concat(String.fromCharCode(a));
        }
        outputt.value = s;
    }
}