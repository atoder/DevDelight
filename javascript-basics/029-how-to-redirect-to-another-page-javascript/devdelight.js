/*
 * window.location.replace
 * Redirects the page and replaces top entry from page history list
 * Can't use the back button to come back to the original page
 */

function replaceURL() {
  //window.location.replace('./page2.html');
  location.replace('./page2.html');
}

/*
 * window.location.assign
 * Redirects by assigning the current page with the one specified.
 * Current page will be saved in history.
 * You can use the back button to come back to the original page
 *
 */
function assignURL() {
  //window.location.assign('./page2.html');
  location.assign('./page2.html');
}

// window.location.href
// User clicking on a link behavior
// You can use the back button to come back to the original page
function locationURL() {
  //window.location.href = './page2.html';
  location.href = './page2.html'
}
