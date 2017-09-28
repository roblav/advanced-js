describe('Note taking app', function(){

    var notes1 = [ 'First note', 'Second note' ]
    var notes2 = [ 'First note', 'Second note', 'Third note' ]

    beforeEach(function(){
        //init();
        testElement = $('<div id="form"><form><input type="text" id="newNote"><button id="addNote">Add Note</button></form><div id="notes"></div></div>');
        $('#wrapper').append(testElement);
        init();
    });

    afterEach(function(){
        $('#form').remove();
      });

    describe('init function', function(){
        it('should display all notes in list', function(){
            //console.log($('#notes').html());
            expect($('#notes').html()).toMatch('First note');
            expect($('#notes').html()).toMatch('Second note');
        });

    });

    describe('addNote method', function(){
        it('should add new note to list of notes', function(){
            //input text and click add button
            $('#newNote').val('Third note')
            $('#addNote').click();
            //console.log($('#notes').html());
            expect($('#notes').html()).toMatch('Third note');
        });
    });
    
    describe('should highlight note when clicked', function(){
        it('tell us the user input note text', function(){
            $('.note').eq(0).click();
            expect($('.note').eq(0).attr('class')).toContain('highlighted');
        });
    });

})