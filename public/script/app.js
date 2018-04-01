/* global $ */
$("#memoInput").first().focus();
$(function(){
    $.getJSON("/api/memos")
    .then(addMemos)
    
    $('#memoInput').keypress(function(event){
        if(event.which == 13){
            createMemo();
        }
    });
    
    $('.list').on('click', 'li', function() {
        updateMemo($(this));
    })
    
    $('.list').on('click', 'span', function(e){
        e.stopPropagation();
        removeMemo($(this).parent());
    });
});

function addMemos(memos) {
    memos.forEach(function(memo){
        addMemo(memo);
    });
}



function createMemo(){
    var usrInput = $('#memoInput').val();
    $.post('/api/memos', {name: usrInput})
    .then(function(newMemo){
        $('#memoInput').val('');
        addMemo(newMemo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function addMemo(memo){
           var newMemo = $('<li class="task">' + memo.name +'<span>X</span></li>');
           newMemo.data('id', memo._id);
           newMemo.data('completed', memo.completed);
       if(memo.completed){
           newMemo.addClass("done");
       }
       $('.list').append(newMemo);
}

function removeMemo(memo){
    var clickId = memo.data('id');
    var deleteUrl = '/api/memos/' + clickId;
    $.ajax({
       method: 'DELETE',
       url: deleteUrl
    })
    .then(function(data){
       memo.remove();
    })
}

function updateMemo(memo){
    var updateUrl = '/api/memos/' + memo.data('id');
    var isDone = !memo.data('completed');
    var updateData = {completed: isDone}
    $.ajax({
       method: 'PUT',
       url: updateUrl,
       data: updateData
    })
    .then(function(updatedMemo){
        memo.toggleClass('done');
        memo.data('completed', isDone);
    })
}