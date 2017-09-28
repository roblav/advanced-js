describe('Note taking app', function(){

    var notes1 = [ 'First note', 'Second note' ]
    var notes2 = [ 'First note', 'Second note', 'Third note' ]

    beforeEach(function(){
        //init();
        $('<div id="wrapper"><form><input type="text" name="newNote"><button id="addNote">Add Note</button></form><div id="notes"></div></div>').appendTo(body);
    });

    afterEach(function(){
        $('#wrapper').remove();
      });

    describe('getNotes function', function(){
        it('should display all notes in list', function(){
            expect(getNotes()).toEqual(notes1);
        });
    });

    describe('addNote method', function(){
        it('should add new note to list of notes', function(){
            addNote("Third note");
            var newNotes = getNotes();
            expect(newNotes).toEqual(notes2);
        });
    });
    
    describe('when addNote button is clicked', function(){
        xit('tell us the user input note text', function(){
            addNote("Third note");
            var newNotes = getNotes();
            expect(newNotes).toEqual(notes2);
        });
    });

})