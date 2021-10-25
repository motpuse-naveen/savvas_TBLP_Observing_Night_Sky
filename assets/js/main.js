$(document).ready(function () {
    //addAccessibilityRolesAndTab();
    //setTabIndex();
    document.addEventListener('keydown', function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (e.keyCode === 9) {
            $('body').addClass('show-focus-outlines');
        }
    });
    document.addEventListener('click', function (e) {
        $('body').removeClass('show-focus-outlines');
    });
    setTimeout(function(){
        $(".annim1").removeClass("annim1")
        $(".annim2").removeClass("annim2")
        $(".annim3").removeClass("annim3")
        $(".annim4").removeClass("annim4")
        $(".annim4-4").removeClass("annim4-4")

    },2000)
});

$(document).on('click', '.link-learmore', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").HideElement();
        $('.container-fs-popup').ShowElement();
    }
});

$(document).on('click', '#closeIcon', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").ShowElement();
        $('.container-fs-popup').HideElement();
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on("click", '.link-tab', function(event){
    //debugger;
    if(!$(this).hasClass("active")){
        var dataid = $(this).attr("data-tabid");
        $(".link-tab.active").removeClass("active")
        $(this).addClass("active")
        $(".container-fs.slide").InactiveTabs();
        $("#" + dataid).ActiveTabs();
    }
});

$(document).on("click", ".side-nav-circle ul li a", function(event){
    debugger;
    $(".side-nav-circle ul li a").removeClass("active");
    $(this).addClass("active");
})