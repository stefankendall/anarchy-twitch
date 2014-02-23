(function () {
    console.log("Beginning");
    setInterval(function () {
        $('#chat_text_input').val('anarchy');
        $('#chat_speak').click();
    }, 35000);
})();