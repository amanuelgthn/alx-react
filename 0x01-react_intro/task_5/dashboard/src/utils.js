function getFullYear() {
    const now = new Date();
    const formattedDate = now.toDateString();
    return formattedDate;
}

function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return "Holberton School"
    }
    else {
        return "Holberton School main Dashboard"
    }
}

function getLatestNotification() {
    return {
        __html: '<strong>Urgent requirement</strong> - complete by EOD'
    }
}
export { getFullYear, getFooterCopy, getLatestNotification };