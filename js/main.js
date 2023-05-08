var searching = document.getElementById("searchbar");
searching.addEventListener("keydown", function (e){
    if(e.code === "Enter") {
        search()
    }
});

function search(){
    var searchbar = document.getElementById("searchbar").value;

    window.location.href = "https://www.google.com/search?q=" + searchbar + "";
    
}