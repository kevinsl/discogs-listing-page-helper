
// get the fields iobjects we are going to modify
var i_media_condition = $('#media_condition');
var i_sleeve_condition = $('#sleeve_condition');
var i_comments = $('#comments');
var i_location = $('#location');
var i_external_id = $('#external_id');


// load values from storage
chrome.storage.local.get(['dsp.media_condition', 'dsp.sleeve_condition', 'dsp.comments', 'dsp.location', 'dsp.private_comments'], function(result) {
    i_media_condition.val(result['dsp.media_condition']);
    i_sleeve_condition.val(result['dsp.sleeve_condition']);
    i_comments.val(result['dsp.comments']);
    i_location.val(result['dsp.location']);
    i_external_id.val(result['dsp.private_comments']);
    console.log('loaded saved values');
});


// add a debug button after Private comments
i_external_id.parent().parent().append('<hr/><button id="dump_values_btn" type="button">Dump Values</button> <button id="save_values_btn" type="button">Save Values</button>');

// Attach debug function to the button
$('#dump_values_btn').click(function() {
    console.group('Form Values');
    console.log('media_condition:', i_media_condition.val());
    console.log('sleeve_condition:', i_sleeve_condition.val());
    console.log('comments: ', i_comments.val());
    console.log('location: ', i_location.val());
    console.log('private_comments: ', i_external_id.val());
    console.groupEnd();
    return false;
});

// Attach save function to Save button
$('#save_values_btn').click(function() {
    chrome.storage.local.set({
        'dsp.media_condition': i_media_condition.val(),
        'dsp.sleeve_condition': i_sleeve_condition.val(),
        'dsp.comments': i_comments.val(),
        'dsp.location': i_location.val(),
        'dsp.private_comments': i_external_id.val()}, function() {
        console.log('Saved values to local storage');
    });
    return false;
});
