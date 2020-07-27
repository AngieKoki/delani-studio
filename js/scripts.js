//FRONT-END LOGIC
//Toggle code
$(document).ready(function(){
//Design
    $('.design').click(function(){
        $('.showDesign').hide().toggle();
        $('.design').slideUp();
    });
    $('.showDesign').click(function(){
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

//Hover
//PROJECT1
$(document).ready(function(){
    $('#effect1').mouseover(function(){
        $('.project').show();
    });
    $('#effect1').mouseout(function(){
        $('.project').hide();
    })
//PROJECT2
    $('#effect2').mouseover(function(){
        $('.project').show();
    });
    $('#effect2').mouseout(function(){
        $('.project').hide();
    })
//PROJECT3
    $('#effect3').mouseover(function(){
        $('.project').show();
    });
    $('#effect3').mouseout(function(){
        $('.project').hide();
    })
//PROJECT4
    $('#effect4').mouseover(function(){
        $('.project').show();
    });
    $('#effect4').mouseout(function(){
        $('.project').hide();
    })
//PROJECT5
    $('.effect5').mouseover(function(){
        $('.project').show();
    });
    $('.effect5').mouseout(function(){
        $('.project').hide();
    })
//PROJECT6
    $('#effect6').mouseover(function(){
        $('.project').show();
    });
    $('#effect6').mouseout(function(){
        $('.project').hide();
    })
//PROJECT7
    $('#effect7').mouseover(function(){
        $('.project').show();
    });
    $('#effect7').mouseout(function(){
        $('.project').hide();
    })
//PROJECT8
    $('#effect8').mouseover(function(){
        $('.project').show();
    });
    $('#effect8').mouseout(function(){
        $('.project').hide();
    })

});


document.getElementById('submit').addEventListener('click',
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
});
