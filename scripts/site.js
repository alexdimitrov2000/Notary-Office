let workingTeamAnchorTags = document.querySelectorAll(".working-team .workers .media a");

workingTeamAnchorTags.forEach(function(aTag) {
    aTag.addEventListener("click", function(e) {
        e.preventDefault();
    });
});