function formatDate(dateString) {
    const commitDate = new Date(dateString); 

    const day = commitDate.getDate();
    const month = commitDate.getMonth() + 1; 
    const year = commitDate.getFullYear();

    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

function fetchCommitMessage() {
    fetch('https://api.github.com/repos/mrksbgg/mrksbgg.github.io/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        document.getElementById('commitMessage').innerHTML = `<a target="_blank" href="${res[0].html_url}" id="invisibleLink">${res[0].commit.message}</a>`;
    });
}

function fetchCommitDate() {
    return fetch('https://api.github.com/repos/mrksbgg/mrksbgg.github.io/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        return res[0].commit.author.date; 
    });
}

fetchCommitDate()
    .then(dateString => {
        const formattedDate = formatDate(dateString);
        document.getElementById('commitDate').innerHTML = formattedDate; 
});