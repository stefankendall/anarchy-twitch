(function () {
    var anarchy = function () {
        var input = document.getElementById('chat_text_input');
        input.value = 'anarchy';

        var chatButton = document.getElementById('chat_speak');
        chatButton.click();
        console.log("Voted anarchy");
    };

    console.log("Anarchy bot online");
    setInterval(anarchy, 40000);
})();