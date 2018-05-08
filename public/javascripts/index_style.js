let mongoose = require('mongoose');

//TODO have routeNewPostSubmission send a post request; handle in index.js

$(document).ready(function() {

    $('.post-btn').on('click', function() {
        let formElement = $(this).valueOf();
        routeNewPostSubmission(formElement);

    });

    setInterval(function() {
        let dateTime;
        let dateA;
        let dateB;
        let d = new Date();
        dateA = d.toLocaleDateString();
        dateB = d.toLocaleTimeString();
        dateTime = `${dateA} @ ${dateB}`;
        document.getElementById("date-time-span").textContent=dateTime;
    }, 1000);

    $("p:odd").css("color", "#437C90" );

    $("#sidebar-toggle-button").click(function() {
        let effect = 'slide';
        let duration = 'slow';
        $('#sidebar-div').toggle(effect, duration);
        setFileInputSize()
    });

    $(".btn.form-control.login").click(function() {
        let effect = 'fade';
        let duration = 1000;
        $('#username-field').toggle(effect, duration);
        $('#password-field').toggle(effect, duration);
        $('#submit-btn').toggle(effect, duration);
        $('#login-btn').toggle(effect, duration);
    });

    // $(".nav.list-group .nav-item.list-group-item").on('click', function() {
    //     let selection = $(this);
    //     let selValue = selection.attr("value");
    //     viewPostsByType(selValue);
    // });

    $(".dropdown-menu .dropdown-item.opt").on('click', function() {
        let postType = $(this).attr("name");
        $(".btn.dropdown-toggle").html(postType);
        getPostForm(postType);
    });

    $('#watched-check-url').change(function() {
        $('#watched-url-input-div').toggle();
    });

    $('#watched-check-file').change(function() {
        $('#watched-file-input-outer-div').toggle();
        setFileInputSize()
    });

    $(window).on('resize', function() {
        setFileInputSize()
    });
});

function setFileInputSize() {
    let prependWidth;
    let inputInnerDivWidth;
    let newWidth;


    prependWidth=($('#file-prepend').width());
    inputInnerDivWidth=($('#watched-file-input-inner-div').width());
    newWidth=(inputInnerDivWidth-prependWidth-25);
    $('#file-input-label').width(newWidth);
}

function getPostForm(postType) {
    switch (postType) {
        case 'Today I Learned ':
            hideFormVars();
            showFormVar('form-type-learned');
            break;
        case 'Today I Thought ':
            hideFormVars();
            showFormVar('form-type-thought');
            break;
        case 'Today I Heard ':
            hideFormVars();
            showFormVar('form-type-heard');
            break;
        case 'Today I Watched ':
            hideFormVars();
            showFormVar('form-type-watched');
            break;
        default:
            alert('Unexpected Error Rendering Form')
    }
}
//
function hideFormVars() {
    $('.form-var').each(function() {
        $(this).hide();
    })
}
//
function showFormVar(formId) {
    $('#' + formId).show();
}
//
// function viewPostsByType(value) {
//     switch (value) {
//         case 'home':
//             homeView();
//             break;
//         case 'learned':
//             learnedView();
//             break;
//         case 'thought':
//             thoughtView();
//             break;
//         case 'heard':
//             heardView();
//             break;
//         case 'watched':
//             watchedView();
//             break;
//         case 'post':
//             postView();
//             break;
//         default:
//             alert('no matched value for view');
//     }
// }
//
// function homeView() {
//     $('#new-post').hide();
//     $('#home-page').show();
// }
//
function postView() {
    $('#home-page').hide();
    $('#new-post').show();
    $('#form-header').show();
    $('.form-var').each(function() {
        $(this).hide();
    });
}

function routeNewPostSubmission(form) {

    let formValue = form.attr('value');
    let functionCall;

    switch(formValue) {

        case 'heard':
            functionCall = postHeard;
            break;
        case 'learned':
            functionCall = postLearned;
            break;
        case 'thought':
            functionCall = postThought;
            break;
        case 'watched':
            functionCall = postWatched;
            break;
        default:
            alert('An error occured while processing your new post.')

        functionCall(form);
    }
}

function buildHeard(form) {
}

function buildLearned(form) {}

function buildThought(form) {}

function buildWatched(form) {}

function postHeard(form) {}

function postLearned(form) {}

function postThought(form) {}

function postWatched(form) {}





