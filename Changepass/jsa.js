function ChangeeCode(){
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
function ChangeePass(){
    var inputt = document.getElementById("inputt1");
    var outputt = document.getElementById("resultt1");
    var s = "";
    if(document.getElementById("sm1").onclick){
        for (let i = 0; i < inputt.value.length; i++) {
            var a = inputt.value.charCodeAt(i) + 1;
            s = s.concat(String.fromCharCode(a));
        }
        outputt.value = s;
    }
}