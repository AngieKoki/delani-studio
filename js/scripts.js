//FRONT-END LOGIC
//Toggle code
$(document).ready(function(){
//Design
    $('.design').click(function(){
        $('.showDesign').hide().toggle();
        $('.design').slideUp();
    });
    $('.hiddenn').click(function(){
        $('.design').slideDown();
        $('.showDesign').hide();
    });
//Development
    $('.development').click(function(){
        $('.showDev').hide().toggle();
        $('.development').slideUp();  
    });
    $('.showDev').click(function(){
        $('.development').slideDown();
        $('.showDev').slideUp();  
    });
//Product Management

    $('.product').click(function(){
        $('.showProduct').hide().toggle();
        $('.product').slideUp();
    });
    $('.showProduct').click(function(){
        $('.product').slideDown();
        $('.showProduct').slideUp();
    });

});


/*document.getElementById('submit').addEventListener('click',
    function submit(event){
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var  message= document.getElementById('message').value;

        if (name ==='' & email==='' & message===''){
            alert('Kindly fill in the necessary fields');
        }
        else if(message ===''){
            alert(name + ' please type in your message')
        }
        else {
            alert('Hello ' + name +' we have received your message.Thank you for reaching out, we will get back to you as soon as possible')
        }

}/*
/*$(document).ready(function(){
    $('.blank').hover(function(){
        $('.blank').addClass('portfolioHover');
        $('.blank').removeClass('portfolioHover');
    });
    $('.ontario').hover(function(){
        $('.ontario').removeClass('portfolioHover');
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
});*/