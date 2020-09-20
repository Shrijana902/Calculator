function myclick(a) {
   document.myform.displayh.value += a;
}
function equalto() {
    document.myform.display.value = eval(document.myform.displayh.value);


}

function ac() {
    document.myform.displayh.value = null;
    document.myform.display.value = "0";
}
function del() {
    var prevalue = document.myform.displayh.value;
    document.myform.displayh.value = prevalue.substr(0, prevalue.length - 1);
    document.myform.display.value = "0";
}
function fnsin() {
    document.myform.display.value = Math.sin(document.myform.displayh.value)
}
function fncos() {
    document.myform.display.value = Math.cos(document.myform.displayh.value)
}
function fntan() {
    document.myform.display.value = Math.tan(document.myform.displayh.value)
}
function square() {
    document.myform.display.value = Math.pow(document.myform.displayh.value, 2)
}
function squarert() {
    document.myform.display.value = Math.pow(document.myform.displayh.value, 1 / 2)
}
function myfunction() {
    var p = document.getElementById("")

}