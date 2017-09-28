
//Notes returned from a DB

var notes = [
    "First note",
    "Second note"
]

function init() {
    //display all notes as a list
    var html = "";
    for(var i=0; i<notes.length; i++){
        html += "<a href='#' class='note'>"+ notes[i] +"</a>"
    }
    return html;
}