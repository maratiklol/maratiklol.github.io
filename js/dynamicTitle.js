function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dynamicTitle() {
    const titles = ["m", "mr", "mrk", "mrks", "mrksb", "mrksbg", "mrksbgg", "mrksbg", "mrksb", "mrks", "mrk", "mr"];
    let index = 0;

    while (true) {
        document.title = titles[index];
        await sleep(300);

        index++;
        
        if (index === titles.length) {
            index = 0;
        }
    }
}