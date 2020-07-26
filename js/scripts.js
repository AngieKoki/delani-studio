//BUSINESS LOGIC












//FRONT-END LOGIC
$(document).ready(function(){
    $('.design').click(function(){
        $('.design').toggle();
        $('.showDesign').toggle();
        $('.showDesign').click(function(){
            $('.showDesign').hide();
            $('.design').show();
        });
    });
});
$(document).ready(function(){
    $('.development').click(function(){
        $('.development').toggle();
        $('.showDev').toggle();
        $('p').click(function(){
            $('p').hide();
            $('.development').show();
        });
     
    });   
});
$(document).ready(function(){
    $('.product').click(function(){
        $('.product').toggle();
        $('.showProduct').toggle();
        $('p').click(function(){
            $('p').hide();
            $('.product').show();
        });
    });
});

$(document).ready(function(){
    $('')
})