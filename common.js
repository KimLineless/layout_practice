$(function () {

    let elm = ".box";
    let len = $('.box').length
    let moveTop = $(window).scrollTop();
    let ht = $(window).height()

    // 마우스 휠로 섹션간 이동 기능
    $(elm).each(function (index) {
        $(this).on("mousewheel", function (e) {
            // e.preventDefault();
            let delta = 0;

            if (event.wheelDelta) {
                delta = event.wheelDelta;
            }
            moveTop = $(window).scrollTop();
            let elmSelecter = $(elm).eq(index);

            if (delta < 0) {
                if ($(elmSelecter).next('.box') != undefined) {
                    try {
                        moveTop = $(elmSelecter).next('.box').offset().top;
                    } catch (e) {}
                }

            } else {
                if ($(elmSelecter).prev('.box') != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev('.box').offset().top;
                    } catch (e) {}
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop
            }, 300);
        });
    });

    // 스크롤 적용시 메뉴 hover 적용 기능
    $(window).on('scroll', function () {
        ht = $(window).height()
        moveTop = $(window).scrollTop() + 100;
        for (let i = 0; i < len; i++) {
            if (moveTop >= ht * i && moveTop < ht * (i + 1)) {
                $('.gnb li').removeClass('on')
                $('.gnb li').eq(i).addClass('on')
            }
        }
    })

    // 메뉴 클릭 시 스크롤 이동 기능
    $('.gnb li').click(function(e){
        e.preventDefault()
        ht = $(window).height()
        let a = $(this).index()
        let nowTop = a * ht
        $('html, body').stop().animate({scrollTop: nowTop}, 400)
    })

    // 마우스 포인터의 위치에 따라서 이미지의 위치가 변하는 기능
    $('.box').on('mousemove',function(e){
        let posX = e.pageX
        let posY = e.pageY

        // console.log(`X좌표: ${posX}, Y좌표는 ${posY}`)
        $('.p11').css({bottom:20-(posX/30), right:20-(posY/30)})
        $('.p12').css({bottom:-40+(posX/20), right:130+(posY/20)})
        $('.p13').css({top:180+(posX/20), right:60+(posY/20)})

        $(".p21").css({right:-180-(posX/30) , bottom:-480-(posY/30) });
		$(".p22").css({right:130+(posX/50) , bottom:-40+(posY/50) });

        $(".p31").css({right:280-(posX/30) , bottom:30-(posY/30) });
		$(".p32").css({right:110+(posX/20) , bottom:-270+(posY/20) });
		$(".p33").css({right:-70+(posX/20) , bottom:-130+(posY/20) });

        $(".p41").css({right:20-(posX/30) , bottom:-120-(posY/30) });
		$(".p42").css({right:0+(posX/20) , bottom:-180+(posY/20) });
    })



})
