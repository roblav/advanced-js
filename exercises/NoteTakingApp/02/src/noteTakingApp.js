
//Notes returned from a DB

var notes = [
    "First note",
    "Second note"
]

function addNote(note){
    html = "<a href='#' class='note'>"+ note +"</a>";
    $('#notes').prepend(html);
}

function addCurrentNote(){
    var newNote = $('#newNote').val();
    if(newNote){
        addNote(newNote);
        notes.push(newNote);
        $('#newNote').val("");
    }
}

function getNotes(){
    return notes;
}

function handleAddNote(){
    addCurrentNote();
}

function init() {
    //display all notes as a list
    var html = "";
    for(var i=0; i<notes.length; i++){
        html += "<a href='#' class='note'>"+ notes[i] +"</a>";
    }
    $('#notes').html(html);
    //Handle the button click
    $('#addNote').bind("click",handleAddNote);
}

init();