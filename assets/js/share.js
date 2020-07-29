const root = location.protocol + '//' + location.host;
const twitterHref = "https://twitter.com/intent/tweet?text={{ page.title }}&url=" + root + "{{ page.url}}";
const fbHref = "https://facebook.com/sharer.php?u=" + root + "{{ page.url}}";
const linkedinHref = "https://www.linkedin.com/shareArticle?mini=true&url=" + root + "{{ page.url }}";


console.log("====================> WHY THE FUCK IT DOESN'T WORK...");

const twitterShare = document.getElementById("twitterShare");
twitterShare.href = "https://twitter.com/intent/tweet?text={{ page.title }}&url=" + root + "{{ page.url}}";
const fbShare = document.getElementById("fbShare");
fbShare.href = "https://facebook.com/sharer.php?u=" + root + "{{ page.url}}";
const linkedinShare = document.getElementById("linkedinShare");
linkedinShare.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + root + "{{ page.url }}";