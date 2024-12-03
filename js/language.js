function changeLang() {
    let currLang = getCookie('lang');
    if (currLang === "RU") {
        document.querySelector('.aka').innerHTML = 'also known as <b>kreewxq, kittynewyork.';

        document.querySelector('.nameage').innerHTML = 'my name is <b>marat,</b> im <b>15.';
        document.querySelector('.city').innerHTML = 'i live in <b>kazan.</b>';
        document.querySelector('.bd').innerHTML = 'bd: <b>feb 18.</b>';
    
        document.querySelector('.socialsheader').innerHTML = '<b>social pages:</b>';
        document.querySelector('.button-changelang').innerHTML = 'Сменить язык';

        console.log("english");
        setCookie("lang", "EN", 1337);

    } else if (currLang === "EN") {
        document.querySelector('.aka').innerHTML = 'также известен как <b>kreewxq, kittynewyork.';

        document.querySelector('.nameage').innerHTML = 'я <b>марат,</b> мне <b>15.</b>';
        document.querySelector('.city').innerHTML = 'живу в <b>казани.';
        document.querySelector('.bd').innerHTML = 'день рождения: <b>18 февраля.';
    
        document.querySelector('.socialsheader').innerHTML = '<b>соц. сети:</b>';
        document.querySelector('.button-changelang').innerHTML = 'Change language';
        
        console.log("русский");
        setCookie("lang", "RU", 1337);
    } else if (currLang === null) {
        document.querySelector('.aka').innerHTML = 'z известен как <b>kreewxq, kittynewyork.';

        document.querySelector('.nameage').innerHTML = 'я <b>марат,</b> мне <b>15.</b>';
        document.querySelector('.city').innerHTML = 'живу в <b>казани.';
        document.querySelector('.bd').innerHTML = 'день рождения: <b>18 февраля.';
    
        document.querySelector('.socialsheader').innerHTML = '<b>соц. сети:</b>';
        document.querySelector('.button-changelang').innerHTML = 'Change language';
        
        console.log("русский");
        setCookie("lang", "RU", 1337);
    }
}

function setPageLang() {
    let currLang = getCookie('lang');
    if (currLang === "RU") {
        document.querySelector('.aka').innerHTML = 'также известен как <b>kreewxq, kittynewyork.';

        document.querySelector('.nameage').innerHTML = 'я <b>марат,</b> мне <b>15.</b>';
        document.querySelector('.city').innerHTML = 'живу в <b>казани.';
        document.querySelector('.bd').innerHTML = 'день рождения: <b>18 февраля.';
    
        document.querySelector('.socialsheader').innerHTML = '<b>соц. сети:</b>';
        document.querySelector('.button-changelang').innerHTML = 'Change language';
    } else if (currLang === "EN") {
        document.querySelector('.aka').innerHTML = 'also known as <b>kreewxq, kittynewyork.';

        document.querySelector('.nameage').innerHTML = 'my name is <b>marat,</b> im <b>15.';
        document.querySelector('.city').innerHTML = 'i live in <b>kazan.</b>';
        document.querySelector('.bd').innerHTML = 'bd: <b>feb 18.</b>';
    
        document.querySelector('.socialsheader').innerHTML = '<b>social pages:</b>';
        document.querySelector('.button-changelang').innerHTML = 'Сменить язык';
    } else if (currLang === null) {
        document.querySelector('.aka').innerHTML = 'z известен как <b>kreewxq, kittynewyork.';

        document.querySelector('.nameage').innerHTML = 'я <b>марат,</b> мне <b>15.</b>';
        document.querySelector('.city').innerHTML = 'живу в <b>казани.';
        document.querySelector('.bd').innerHTML = 'день рождения: <b>18 февраля.';
    
        document.querySelector('.socialsheader').innerHTML = '<b>соц. сети:</b>';
        document.querySelector('.button-changelang').innerHTML = 'Change language';
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
