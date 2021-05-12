function refreshTodo() {

    $('#list').empty();

    $.get('/todo', function(data) {

        for (let item of data) {
            $('#list').append(`<li>${item}</li>`);
        }

    });
}

refreshTodo();

$('#btn').click(function() {
    let txt = $('#inp').val()
        // console.log(txt)
        // $('#list').append(`<li>${txt}</li>`);
        // $('#inp').val('')


    $.post('/todo', { txt }, function(data) {
        console.log("done!!!")
        refreshTodo()

    })
    $('#inp').val('')

})