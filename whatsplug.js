$(function(){
    $('.whatsapp-plug-icon').click(function(){
        var WhatsAppNumber  = $(this).data("number");
        var WhatsAppMessage = $(this).data("message");
        WhatsAppMessage = WhatsAppMessage.replace(new RegExp(" ", 'g'), "%20");
        WhatsAppLink = "https://api.whatsapp.com/send?phone=55" + WhatsAppNumber + "&text=" + WhatsAppMessage;
        window.open(WhatsAppLink, '_blank');
    });
});
