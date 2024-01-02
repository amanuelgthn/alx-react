import $ from "jquery";

function addparagraph() {
    const paragraph1 = $("<p>).text('Holberton Dashboard').</p>");
    const paragraph2 = $("<p>).text('Dashboard data for the students').</p>");
    const paragraph3 = $("<p>).text('Copyrigh - Holberton School').</p>");

    $('body').append(paragraph1, paragraph2, paragraph3);
}