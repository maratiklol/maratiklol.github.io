function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dynamicTitle() {
    let index = 0;
    const url = "https://mrksbgg.is-a.dev";
    let titles;
  
    while (true) {
        if (window.location.href === `${url}/404.html`) { 
            titles = ["где я?", "ты потерялся."];
        } else if (window.location.href === `${url}`) {
            titles = ["mrksbgg", "mrksbgg >.<"];
        }

        document.title = titles[index];
        await sleep(500);

        index++;

        if (index === titles.length) {
          index = 0;
        }
    }
}