$(document).ready(function () {
    window.onload = function() {
        /* window.onscroll = function(ev) {
            var aboutMeScroll = document.getElementById('aboutMe');
            
            if ((window.innerHeight - window.scrollY) <= document.body.offsetHeight) {
                aboutMeScroll.click();
            }
        }; */
               
        //var pop_up = document.querySelector(".pop-up-welcome");
        var show_social = document.querySelector(".showSocial");
        var hide_social = document.querySelector(".hideSocial");
        var social = document.querySelector(".social");
        var gmail_show = document.getElementById("gmail-show");
        var gmail_text = document.querySelector(".gmail-text");

        var gmail_show_2 = document.getElementById("gmail-show-2");
        var gmail_text_2 = document.querySelector(".gmail-text-2");

        /* pop_up.style.visibility = "visible";
        pop_up.style.top = "8vh";

        setTimeout(function() {
            pop_up.style.visibility = "hidden";
            pop_up.style.top = "-300px";
        }, 10000);
        
        $('.hide-pop-up-welcome').click(function () {
            pop_up.style.visibility = "hidden";
            pop_up.style.top = "-300px";
        }); */

        $(show_social).click(function () {
            social.style.visibility = "visible";
            social.style.bottom = "5vh";
            hide_social.style.display = "block";
            show_social.style.display = "none";
        });

        $(hide_social).click(function () {
            social.style.visibility = "hidden";
            social.style.bottom = "-1000px";
            hide_social.style.display = "none";
            show_social.style.display = "block";
            gmail_text_2.style.right = "-300px";
        });

        $('.sup-nav').mouseleave(function () {
            gmail_text.style.display = "none";
            gmail_show.style.transform = "translateX(0)";
        });

        $(gmail_show).mouseover(function () {
            gmail_text.style.display = "block";  
            gmail_show.style.transform = "translateX(-142px)";
        });

        $(gmail_show_2).click(function () {
            if (gmail_text_2.style.right == "60px") {
                gmail_text_2.style.right = "-300px";
            } else {
                gmail_text_2.style.right = "60px";
            }
        });

        //Show hidden navbar
        /* var menu = document.querySelector(".menu");
        var quit_menu = document.querySelector(".quit-menu"); */
        var hidden_menu = document.querySelector(".hidden-menu");

        var body = document.getElementsByTagName("BODY")[0];
        var width = body.offsetWidth;
        
        if (window.addEventListener) {
            window.addEventListener ("resize", onResizeEvent, true);
        } else {
            if (window.attachEvent) {
                window.attachEvent("onresize", onResizeEvent);
            }
        }
        
        function onResizeEvent() {
            bodyElement = document.getElementsByTagName("BODY")[0];
            newWidth = bodyElement.offsetWidth;
            if(newWidth != width){
                width = newWidth;
                if (width >= '1350') {
                    menu_blur.style.display = "none";
                    quit_menu_blur.style.display = "none";
                    hidden_menu_blur.style.visibility = "hidden";
                    hidden_menu_blur.style.left = "-1000px";
                } else {
                    if (quit_menu_blur.style.display == "block") {
                        quit_menu_blur.click();
                    }
                    menu_blur.style.display = "block";
                }
            }
        }

        /* //Hide hidden-menu when click outside
        $(document).mouseup(function (e) {
            var container = $(".hidden-menu");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0 && quit_menu.style.display == "block") {
                quit_menu.click();
                hidden_menu.style.left = "-1000px";
            }
        }); */

        //Hide social hidden when click outside
        $(document).mouseup(function (e) {
            var container2 = $(".social");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container2.is(e.target) && container2.has(e.target).length === 0 && social.style.visibility == "visible") {
                hide_social.click();
            }
        });

        //Show menu
        /* $(".menu").click(function () {
            if ($(".check").prop("checked") == true) {
                hidden_menu.style.visibility = "visible";
                hidden_menu.style.left = "0";

                if (quit_menu.style.display == "block") {
                    menu.style.display = "block";
                    quit_menu.style.display = "none";

                    menu.style.transition = "1s linear";
                } else {
                    menu.style.display = "none";
                    quit_menu.style.display = "block";

                    quit_menu.style.transition = "1s linear";
                }
            } else {
                $(".check2").prop("checked", false);
            }
        });
        
        //Hide menu
        $(".quit-menu").click(function () {
            if ($(".check2").prop("checked") == false) {
                hidden_menu.style.visibility = "hidden";
                hidden_menu.style.left = "-1000px";
                quit_menu.style.display = "none";
                menu.style.display = "block";
            } else {
                $(".check2").prop("checked", false);
            }
        }); */

        //Show menu blur
        var hidden_menu_blur = document.querySelector(".hidden-menu-blur");
        var menu_blur = document.querySelector(".menu-blur");
        var quit_menu_blur = document.querySelector(".quit-menu-blur");
        var a_menu_blur1 = document.getElementById("menu-a-1");
        var a_menu_blur2 = document.getElementById("menu-a-2");
        var a_menu_blur3 = document.getElementById("menu-a-3");
        var a_menu_blur4 = document.getElementById("menu-a-4");

        $(a_menu_blur1).click(function () {
            quit_menu_blur.click();
        });
        $(a_menu_blur2).click(function () {
            quit_menu_blur.click();
        });
        $(a_menu_blur3).click(function () {
            quit_menu_blur.click();
        });
        $(a_menu_blur4).click(function () {
            quit_menu_blur.click();
        });

        $(menu_blur).click(function () {
            if ($(".check").prop("checked") == true) {
                hidden_menu_blur.style.display = "flex";
                hidden_menu_blur.style.transition = "1s linear";

                if (quit_menu_blur.style.display == "block") {
                    menu_blur.style.display = "block";
                    quit_menu_blur.style.display = "none";
                    hidden_menu_blur.style.transition = "1s linear";
                } else {
                    menu_blur.style.display = "none";
                    quit_menu_blur.style.display = "block";
                    hidden_menu_blur.style.transition = "1s linear";
                }
                
            } else {
                $(".check2").prop("checked", false);
            }
        });

        //Hide menu blur
        $(".quit-menu-blur").click(function () {
            if ($(".check2").prop("checked") == false) {
                hidden_menu_blur.style.display = "none";
                quit_menu_blur.style.display = "none";
                menu_blur.style.display = "block";
            } else {
                $(".check2").prop("checked", false);
            }
        });
    };

    //Download check
    $(".button").click(function () {
        $(".dwnlOk").css('top', '0');
        setTimeout(() => {
            $(".dwnlOk").css('top', '100%');
        }, 5000);
    });

    /* Type Effect */
    var texts , back , index , x, count , p, time, typing;

        texts = ['Nebil         ', "Junior developer    "];
        back = false;
        index = 0;
        count = 0;
        time = 150;
        p = $('h1.write');
        typing = $('.typing');
    
    function write(){
        x = setInterval(function(){
        if(back == false) {
            time = 80;
            p.text(p.text() + texts[index][count]);
            count++;
            if(count == texts[index].length) {
            clearInterval(x);
            back = true;
            if(index == texts.length - 1) {
                index = 0
            } else {
                index++
            }		                 
                write();
            };
        } else {
            time = 150
            count--;
            p.text(p.text().slice(0,count))

            if (count == 0) {
            clearInterval(x);
            back = false;
            write();
            }
        }
        }, time);
    };
    write();
});
