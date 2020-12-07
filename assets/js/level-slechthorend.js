/* 

    Dyslexie level script
    for Accessibility Game

*/

var doof = {

    init() {},

    checkQuestions() {
        let correct = true;
        // check each input field and select
        $('#questions').find('select, input[type=field]').each((_, q) => {

            if (q.value.toLowerCase() !== reverse($(q).attr('data-correct')).toLowerCase()) {  // incorrect

                correct = false;
                $(q).addClass('incorrect');

                // add incorrect class to corresponding label
                $('#questions label[for=' + $(q).attr('id') + ']').addClass('incorrect');

            } else { // correct

                // remove incorrect class
                $(q).removeClass('incorrect');
                // remove incorrect class from corresponding label
                $('#questions label[for=' + $(q).attr('id') + ']').removeClass('incorrect');

            }

        });

        // go to next page if all questions are correct
        if (correct) {
            showScore(200); // TODO: calc score
        }
    }

}

// GO
doof.init();

// Delete after level is complete
function unload() {
    delete doof;
}