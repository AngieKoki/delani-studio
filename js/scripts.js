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
    $('.blank').hover(function(){
        $('.blank').addClass('portfolioHover');
    });
    $('.ontario').hover(function(){
        $('.ontario').addClass('portfolioHover');
    });
    $('.orange').hover(function(){
        $('.orange').addClass('portfolioHover');
    });
    $('.games').hover(function(){
        $('.games').addClass('portfolioHover');
    });
    $('.good').hover(function(){
        $('.good').addClass('portfolioHover');
    });
    $('.checklist').hover(function(){
        $('.checklist').addClass('portfolioHover');
    });
    $('.burned').hover(function(){
        $('.burned').addClass('portfolioHover');
    });
    $('.giraffe').hover(function(){
        $('.giraffe').addClass('portfolioHover');
    });
});