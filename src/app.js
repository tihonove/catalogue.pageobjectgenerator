import $ from 'jquery';
require('./styles/bookmarklet.less');

var modal = $(
    '<div class="modal" id="modal-one">' +
    '  <div class="modal-dialog"><div class="modal-header">' +
    '    <h2>Modal in CSS?</h2>' +
    '    <a href="#close" class="btn-close">?</a>' +
    '  </div>' +
    '  <div class="modal-body">' +
    '    <p>' +
    '       <textarea cols="110" rows="20" id="body"></textarea>' +
    '   </p>' +
    '  </div>' +
    '  <div class="modal-footer">' +
    '    <a href="#" id="close-modal" class="btn">Nice!</a>' +
    '  </div>' +
    '</div>');

$('body').append(modal);

modal.find('#body').val('zzzzz');

modal.find('#close-modal').click(e => {
    e.preventDefault();
    modal.remove();
});
