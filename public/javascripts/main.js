$(function(){
    var buildList = function(data){
        var ul = $('<ul id="countries-list" class ="list-unstyled">');
        var listElement;
        for(var i =0; i<data.length; i++){
            listElement = ul.append('<li class="list-item"><span class = "glyphicon glyphicon-flag icon travel-flag"></span>'+data[i].name+'</li>');
        }
        return listElement;
    };
    var newList = function(data){
        var list = buildList(data);
        $('#main-content').html(list);
    };
    $('#load-countries').on('click', function(e){
        e.preventDefault();
        $('#countries-list').empty();
        $.ajax('/countries', {
            success: newList
        });
    });
    $('#search-countries').on('click', function(e){
        e.preventDefault();
        var searchTerm = $('#search-input').val();
        $.ajax('/search',{
            data:{searchTerm:searchTerm},
            success: newList
        });
    });
    $(document).on('click', '.travel-flag', function(){
        $(this).toggleClass('travled-blue');
        var searchTerm = $(this).parent().text();
            $.ajax('/flag', {
                data:{searchTerm:searchTerm},
                success: function(data){
                    console.log('Success');
                }

            });
    });
});