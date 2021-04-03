$(function() {
    $('.box').draggable({
        revert: false
    });
    $('.cl').draggable({
        revert: true
    });
    $('body').sortable();
})