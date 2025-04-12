// Function to change video source based on dropdown selection
function changeVideo() {
    var episodeID = document.getElementById("episodeSelect").value;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = "https://gdmirrorbot.nl/embed/" + episodeID;
}

// Set initial value for the video player (first option preselected)
document.addEventListener('DOMContentLoaded', function() {
    var firstEpisodeID = document.getElementById("episodeSelect").value;
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = "https://gdmirrorbot.nl/embed/" + firstEpisodeID;
});