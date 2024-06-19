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

function multiFuncs() {
    console.log("Hello World!")
    console.log("Very interesting, isn't it?")
    console.log("-------------------------------")
    var visited = getCookie('visited');
    if (visited) {
        console.log("Welcome back!")
    } else {
        setCookie('visited',true,1337);
        console.log("Welcome!")
    }
}

function multiFuncs() {
    console.log("Hello World!")
    console.log("Very interesting, isn't it?")
    console.log("-------------------------------")
    var visited = getCookie('visited');
    if (visited) {
        console.log("Welcome back!")
    } else {
        setCookie('visited',true,1337);
        console.log("Welcome!")
    }
    var lost = getCookie('lost');
    if (lost) {
        console.log("Oh, there's nothing here! Again...")
    } else {
        setCookie('lost',true,1337);
        console.log("Oh, there's nothing here!")
    }
}

