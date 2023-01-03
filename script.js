$(document).ready(function(){
    setInterval(function(){
        var reciever_id = document.getElementById("reciever_id").value;
        var sender_id = document.getElementById("sender_id").value;
        var user_id_update = document.getElementById("user_id_update").value;
        var msgdata = "showchat=1&userid=" + sender_id  + "&reciever=" + reciever_id;
        var chatlist = "chatlist=1&userid=" + sender_id;
        var user_id_update = "user_id_update=1&userid=" + user_id_update;
        $.post("inc/action.php", msgdata, function(data, status){
            // console.log(data);
            // console.log(status);
            if(status == "success"){
                var msgbody = document.getElementById('msgbody');
                if(msgbody.innerHTML != data){
                    msgbody.innerHTML = data;
                }
            }
        });
        $.post("inc/action.php", chatlist, function(data, status){
            if(status == "success"){
                var chatlistbody = document.getElementById('chatlist');
                var print = chatlistbody.innerHTML;
                if(chatlistbody.innerHTML != data){
                    
                    chatlistbody.innerHTML = data;
                }
                
            }
        });
        $.post("inc/action.php", user_id_update, function(data, status){
            var online = document.getElementById('online');
            if(data == "Online"){
                online.innerHTML = "🟢";
            }else{
                online.innerHTML = "🔴";
            }
        });
        

    }, 500);
});