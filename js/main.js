$(document).ready(function(){
    var links = [
        {
        // "bgcolor":"#03A9F4",
        "bgcolor":"#FFF",
        "icon":"<img src='./imgs/message.png' style='width: 35px;' alt='icon'>",
        },
        {
        // "Phone":"#03E78B",
        "bgcolor":"#03E78B",
        "color":"#FFF",
        "icon":"<i class='fa fa-whatsapp'></i>",
        "url":"https://web.whatsapp.com/send?phone=252907746661",
        "target":"_blank",
        },
        {
        // "WhatsApp":"#263238",
        "bgcolor":"#49E670",
        "color":"#FFF",
        "icon":"<i class='fa fa-phone'></i>",
        "url":"tel:+252907746661",
        "target":"_blank",

        },
    ]
    $('.kc_fab_wrapper').kc_fab(links);
}) 