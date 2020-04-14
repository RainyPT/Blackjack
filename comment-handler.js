function loadComments(){
    var commentsDiv = document.getElementById("commentsDiv");

    commentsDiv.innerHTML = "";

    comments.forEach(cmt => {
        commentsDiv.innerHTML +=
            "<h3>" + cmt.username + ":</h3>" + "<p>" + cmt.comment + "</p>";
    });
}

function addComment(){

    var addCommentUser = document.getElementById("addCommentUser");
    var addCommentCmt = document.getElementById("addCommentCmt");

    if(addCommentUser.value == '' || addCommentCmt.value == ''){
        alert("Insert username and comment.");
        addCommentUser.value = '';
        addCommentCmt.value = '';
        return;
    }

    var comment = { username: addCommentUser.value, comment: addCommentCmt.value };
    //comment must be an obj {username:[...],comment:[...]}
    comments.unshift(comment);
    loadComments();
    addCommentUser.value = "";
    addCommentCmt.value = "";
}