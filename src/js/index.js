const request = new XMLHttpRequest();
const urlParams = new URLSearchParams(window.location.search);

let myCookie = "cookieName";
let myCookieVal = "cookieValue";

//Send APIRequest to retrieve data
function apiRequest(reqParam, handleData){
    let requestURL = url + reqParam;

    $.ajax({
        type: "GET",
        url: requestURL,
        dataType: "json",
        success: function (data) {
            handleData(data);
        },
        fail: function(error) {
            console.log(error); 
        }
    });
} 

function setCookie(name,days) {
    let expires = "";

    myCookieVal = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + myCookieVal  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}