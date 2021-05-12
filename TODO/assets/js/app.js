
// $('li').click(function () {
//     $(this).toggleClass('completed');
// })

$('ul').on('click','li',function(){
    $(this).toggleClass('completed')
    // alert("list clicked")
})

$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(500)
    // $('input[type="text"]').slideUp(500)
})

// $('span').click(function(){
//     $(this).parent().remove()
// })

$('ul').on('click','span',function(e){
    // alert("span clicked")

    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    })
    e.stopPropagation()
})

$('input[type="text"]').keypress(function(e){
    // console.log(e)
    if(e.key=='Enter')
    {
        let txt = $(this).val()
        console.log(txt)
        $(this).val("")

        const todo = $(`<li><span>X </span>${txt}</li>`)

        $('ul').append(todo)
    }
})