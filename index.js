$(function(){
    // ロゴクリックでトップに戻るやつ //
    $('#top-btn').click(function(){
        $('html,body').animate({scrollTop:0},'slow');
    });

    // ナビゲーションhoverした時の変色 //
    $('.nav-link').hover(function(){
        $(this).css('color','#DC3545');
    },
    function(){
        $(this).css('color','rgba(0,0,0,0.5)');
    });

    // ナビゲーション各項目に飛ぶやつ //
    $('.nav-link').click(function(){
        var id = $(this).attr(href);
        var position = $(id).offset().top - 200;
        $('html,body').animate({scrollTop:position},'slow');
    });




    // よくある質問 liをhoverした時のアニメーション //
    $('.mainG-ul li').hover(function(){
        $(this).animate({'font-size':'1.4vw'},300);
    },
    function(){
        $(this).animate({'font-size':'1.3vw'},300);
    });
    // よくある質問 liをhoverした時のアニメーション //
    $('.mainG-ul2 li').hover(function(){
        $(this).animate({'font-size':'1.4vw'},300);
    },
    function(){
        $(this).animate({'font-size':'1.3vw'},300);
    });



    // 「よくある質問」のアコーディオン部分 //
   $('.mainG-ul li').on('click',function(){
       $(this).next().slideToggle();
   });



   // 「よくある質問」のモーダル部分1 //
   $('.mainG-ul2 .mainG-ques-1').on('click',function(){
       $('.mod-1').fadeIn();
   });
   // 「よくある質問」のモーダル部分2 //
   $('.mainG-ul2 .mainG-ques-2').on('click',function(){
       $('.mod-2').fadeIn();
   });
   // 「よくある質問」のモーダル部分3 //
   $('.mainG-ul2 .mainG-ques-3').on('click',function(){
       $('.mod-3').fadeIn();
   });
   // モーダル閉じる部分(✖︎) //
   $('.modal-batu .fa-times').click(function(){
    $('.answer-modal-wrapper').fadeOut();
   });
   // モーダル閉じる部分(モーダル外タップ) //
   $('.answer-modal-wrapper').click(function(){
    $('.answer-modal-wrapper').fadeOut();
   });


   // フェードイン //
   $(window).scroll(function(){
        $('.js-start').each(function(){
            var scroll = $(window).scrollTop();
            var elemTop = $(this).offset().top;
            var windowHeight = $(window).height();
         
            if(scroll > elemTop - windowHeight + 200){
                $(this).addClass('fade-in2');
            }
        });
    });
});