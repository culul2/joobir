function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);const translations = {
    "en": {
        "blogTitle": "Blog",
        "discussionTitle": "Discussion Blog",
        "welcomeMessage": "Welcome to the blog section! Here you can find various posts and updates on natural and social sciences.",
        "commentsTitle": "Comments",
        "contactUs": "Contact Us",
        "email": "Email: contact@culul.com",
        "socialMedia": "Social Media: Twitter, Facebook",
        "resourcesTitle": "Resources"
    },
    "om": {
        "blogTitle": "Blogger",
        "discussionTitle": "Waliigaltee",
        "welcomeMessage": "Baga nagaan dhuftan kutaa blog kana! As keessatti barreessitoota fi odeeffannoo adda addaa argachuu dandeessu.",
        "commentsTitle": "Yaada",
        "contactUs": "Nu qunnamu",
        "email": "Imeelii: contact@culul.com",
        "socialMedia": "Mediyaa Hawaasaa: Twitter, Facebook",
        "resourcesTitle": "Qabeenya"
    },
    "am": {
        "blogTitle": "ብሎግ",
        "discussionTitle": "ውይይት",
        "welcomeMessage": "ወደ ብሎግ ክፍል እንኳን ወደ ዚህ በደህና መጡ! እዚህ በተፈጥሮ እና ማህበረሰብ ሳይንስ ላይ የተለያዩ ጽሁፎች እና አዳዲስ መረጃዎች ማግኘት ይችላሉ።",
        "commentsTitle": "አስተያየቶች",
        "contactUs": "እባኮትን ይገናኙ",
        "email": "ኢሜይል: contact@culul.com",
        "socialMedia": "ማህበረሰብ ሚዲያ: Twitter, Facebook",
        "resourcesTitle": "ምንጮች"
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    document.querySelector("section#blog h2").innerHTML = `<em>${translations[selectedLanguage].blogTitle}</em>`;
    document.querySelector("section#discussion h2").innerHTML = `<em>${translations[selectedLanguage].discussionTitle}</em>`;
    document.querySelector("section#blog .blog-box p").innerHTML = `<em>${translations[selectedLanguage].welcomeMessage}</em>`;
    document.querySelector("section#discussion h3").innerHTML = `<em>${translations[selectedLanguage].commentsTitle}</em>`;
    document.querySelector("section#contact h2").innerHTML = `<em>${translations[selectedLanguage].contactUs}</em>`;
    document.querySelector("section#contact p").innerHTML = `<em>${translations[selectedLanguage].email}</em>`;
    document.querySelector("section#contact p:last-of-type").innerHTML = `<em>${translations[selectedLanguage].socialMedia}</em>`;
    document.querySelector("section#resources h2").innerHTML = `<em>${translations[selectedLanguage].resourcesTitle}</em>`;
}
let discussions = [];
let comments = [];

function submitDiscussion() {
    const discussionInput = document.getElementById("discussion-input").value;
    if (discussionInput) {
        discussions.push(discussionInput);
        document.getElementById("discussion-input").value = ''; // Clear input
        displayDiscussions();
    } else {
        alert("Please write a discussion before submitting.");
    }
}

function displayDiscussions() {
    const discussionDisplay = document.getElementById("discussion-display");
    discussionDisplay.innerHTML = ''; // Clear previous discussions
    discussions.forEach((discussion, index) => {
        discussionDisplay.innerHTML += `<p><em>${discussion}</em></p>`;
    });
}

function submitComment() {
    const commentInput = document.getElementById("comment-input").value;
    if (commentInput) {
        comments.push(commentInput);
        document.getElementById("comment-input").value = ''; // Clear input
        displayComments();
    } else {
        alert("Please write a comment before submitting.");
    }
}

function displayComments() {
    const commentsDisplay = document.getElementById("comments-display");
    commentsDisplay.innerHTML = ''; // Clear previous comments
    comments.forEach((comment) => {
        commentsDisplay.innerHTML += `<p><em>${comment}</em></p>`;
    });
}