let a = window.localStorage.getItem('kekka');
console.log(a);
let array = {nemui: a};
console.log(array);
let result_img;
switch(a){
    //手洗いタグ
    case("hand"):
    result_img = "img/tag/how_to_wash/img19.gif";
    result_description = "Wash at or below 40℃, Hand Wash,Normal";
    break;
}
$('.result_box').children('img').attr('src', result_img);
$('#description').html(result_description);

window.localStorage.removeItem('kekka');
let b = window.localStorage.getItem('kekka');