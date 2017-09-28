
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
    if(newNote){;
        notes.push(newNote);
        addNote(newNote)
        $('#newNote').val("");
    }
}

function getNotes(){
    return notes;
}

function handleAddNote(evt){
    evt.preventDefault();
	evt.stopPropagation();
    addCurrentNote();
}

function handleNoteClick(evt){
    //Which note has been clicked
    //console.log(this);
    //Remove all highlighted classes
    $('.note').removeClass('highlighted');
    $(this).addClass('highlighted');
	evt.stopPropagation();
}

function handleDocClick(evt){
    $('.note').removeClass('highlighted');
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

    //Listen for clicks on note elements
    //$('.note').bind("click", handleNoteClick);
	$("#notes").on("click",".note",handleNoteClick);

    //Listen for clicks outside of #notes
    $(document).bind("click", handleDocClick);
}

$(document).ready(init);