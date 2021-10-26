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
        $(".annim4-1").removeClass("annim4-1")
        $(".annim4-2").removeClass("annim4-2")
        $(".annim4-3").removeClass("annim4-3")
        $(".annim4-4").removeClass("annim4-4")
        $(".annim4-5").removeClass("annim4-5")
        $(".annim4-11").removeClass("annim4-11")
        $(".annim4-22").removeClass("annim4-22")
        $(".annim4-33").removeClass("annim4-33")
        $(".annim4-44").removeClass("annim4-44")
        $(".annim4-55").removeClass("annim4-55")
        $(".annim4-111").removeClass("annim4-111")
        $(".annim4-222").removeClass("annim4-222")
        $(".annim4-333").removeClass("annim4-333")
        $(".annim4-444").removeClass("annim4-444")
        $(".annim4-555").removeClass("annim4-555")
    },3000)
});

$(document).on('click', '.link-learmore', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").HideElement();
        $('.container-fs-popup.disclaimer').ShowElement();
    }
});

$(document).on('click', '#disclaimerClose', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").ShowElement();
        $('.container-fs-popup.disclaimer').HideElement();
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
    $(".side-nav-circle ul li a").removeClass("active");
    $(this).addClass("active");
})

$(document).on("click", ".card-body .card-link", function(event){
    var tablinkid = $(this).attr("data-tablinkid");
    $("#" + tablinkid).trigger( "click" );
})
$(document).on("click", "#linkNameTheFullMoon", function(event){
    $(".container-fs").HideElement();
    $('.container-fs-popup.fullmoon').ShowElement();
})

$(document).on("click", "#close-fullmoonimage", function(event){
    $(".container-fs").ShowElement();
    $('.container-fs-popup.fullmoon').HideElement();
})
$(document).on("click", "#fullmoonClose", function(event){
    $(".container-fs").ShowElement();
    $('.container-fs-popup.fullmoon').HideElement();
})

