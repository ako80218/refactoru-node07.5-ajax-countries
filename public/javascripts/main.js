$(function(){
    $('#load-countries').on('click', function(e){
        e.preventDefault();
        $.ajax('/countries', {
            success: function(data){
                for(var i =0; i<data.length; i++){
                    $('#countries-list').append('<li>'+data[i].name+'</li>');
                }
            }
        });
    });
    $('#search-countries').on('click', function(e){
        e.preventDefault();
        var searchTerm = $('#search-input').val();
        $.ajax('/search',{
            data:{searchTerm:searchTerm},
            success: function(data){}
        });

    });
});