export function getFullYear() {
    const now = new Date();
    const formattedDate = now.toDateString();
    return formattedDate;
}

export function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return "Holberton School"
    }
    else {
        return "Holberton School main Dashboard"
    }
}