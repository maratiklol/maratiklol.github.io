function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dynamicTitle() {
    const titles = ["mrksbgg", "mrksbgg >.<"];
    let index = 0;

    while (true) {
        document.title = titles[index];
        await sleep(500);

        index++;
        
        if (index === titles.length) {
            index = 0;
        }
    }
}

async function dynamicTitle404() {
    const titles = ["404", "ты потерялся"];
    let index = 0;

    while (true) {
        document.title = titles[index];
        await sleep(500);

        index++;
        
        if (index === titles.length) {
            index = 0;
        }
    }
}