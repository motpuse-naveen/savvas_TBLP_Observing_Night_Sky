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
    $('.container-fs-popup.disclaimer').ShowElement();
    $(".disclaimerHeader").focus();
    $(".container-fs").HideElement();
});

$(document).on('click', '#disclaimerClose', function (event) {
    $(".container-fs").ShowElement();
    $('.link-learmore').focus();
    $('.container-fs-popup.disclaimer').HideElement();
});

$(document).on('click', '#btn-discussiontip', function (event) {
    $('.container-fs-popup.discussiontip').ShowElement();
    $(".discussiontipHeader").focus();
    $(".container-fs").HideElement();
});

$(document).on('click', '#discussiontipClose', function (event) {
        $(".container-fs").ShowElement();
        $("#btn-discussiontip").focus();
        $('.container-fs-popup.discussiontip').HideElement();
});
$(document).on("click", "#close-discussiontip", function(event){
    $(".container-fs").ShowElement();
    $("#btn-discussiontip").focus();
    $('.container-fs-popup.discussiontip').HideElement();
})

$(document).on("click", '.link-tab', function(event){
    if(!$(this).hasClass("active")){
        var dataid = $(this).attr("data-tabid");
        $(".link-tab.active").removeClass("active").attr("aria-selected","false")
        $(this).addClass("active").attr("aria-selected","true")
        $("#" + dataid).find(".side-nav li a").removeClass("active").attr("aria-current", "false").removeAttr("aria-describedby");
        $("#" + dataid).ActiveTabs();
        $("#" + dataid).find(".side-nav li a:first").focus();
        $(".container-fs.slide:not(#" + dataid +")").InactiveTabs();
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
$(document).on("click", "#linkNameTheFullMoon,#linkStudentTextPreview", function(event){
    $('.container-fs-popup.fullmoon').ShowElement();
    $("#fullmoonClose").focus();
    $(".container-fs").HideElement();
})

$(document).on("click", "#close-fullmoonimage", function(event){
    $(".container-fs").ShowElement();
    $("#linkNameTheFullMoon").focus();
    $('.container-fs-popup.fullmoon').HideElement();
})
$(document).on("click", "#fullmoonClose", function(event){
    $(".container-fs").ShowElement();
    $("#linkNameTheFullMoon").focus();
    $('.container-fs-popup.fullmoon').HideElement();
})

$(document).on('keypress', '#fullmoonClose, #close-fullmoonimage, #close-discussiontip, #discussiontipClose, #disclaimerClose', function (event) {
    if(event.which == 13 || event.which == 32) {
        $(this).click();
    }
});

