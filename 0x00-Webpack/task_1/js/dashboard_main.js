import $ from "jquery";
import _ from "lodash";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">{ count }</p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter(count) {
   count += 1;
}

document.getElementById('count').addEventListener('click', updateCounter);

const debounceupdater = _.debounce(updateCounter, 300);

document.getElementById('count').addEventListener('click', debounceupdater);
