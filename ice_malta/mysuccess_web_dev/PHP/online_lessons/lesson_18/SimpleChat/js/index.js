let personName;

$(document).ready(function() {
   bindShowHide();
   bindActions();
});

function bindShowHide() {
    $('#chatArea').hide();
}

function bindActions() {
    $('#startChatForm').submit(function(event) {
           
        personName = $('#personName').val();
        $('#chatStartArea').hide();
        $('#chatArea').show();

        addChat("System", personName + " has joined the chat.");
        setInterval(fetchChats, 1000);

        bindChatForm();

        event.preventDefault();
    });
}

function addChat(who, message) {
    $.post('Rest/ChatController.php', {'who': who, 'message': message});
    fetchChats();
}

function fetchChats() {

    console.log(1);
    $.get('Rest/ChatController.php', function(chats) {
        let chatData = $.parseJSON(chats);
        let chatAreaHtml = "";

        $.each(chatData, function(key, chat){
            let classMyChat = "";
            if (chat.who === personName) {
                classMyChat = " my-chat";
            }

            chatAreaHtml += `<div class="chat-box-container"><div class="chat-box ${classMyChat}">`;
            chatAreaHtml += `<div class="chat-box-header">${chat.who}</div>`;
            chatAreaHtml += `<div class="chat-box-body">${chat.message}</div>`;
            chatAreaHtml += `</div></div>`;
        });

        $('#chatArea-Chats').html(chatAreaHtml);
        $('#chatArea-Chats').animate({scrollTop: $('#chatArea-Chats').prop('scrollHeight')}, 1000)
    });
}

function getNewMessage() {
    let message = $('#newMessage').val();
    $('#newMessage').val('');
    addChat(personName, message);
}

function bindChatForm() {
    $('#addMessageForm').submit(function(event){
        event.preventDefault();
        getNewMessage();
    });

    $('#newMessage').keydown(function(event){
        if (event.keyCode === 13) {
            getNewMessage();
        }
    });
}