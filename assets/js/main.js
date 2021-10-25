$(document).ready(function () {
    addAccessibilityRolesAndTab();
    setTabIndex();
    document.addEventListener('keydown', function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (e.keyCode === 9) {
            $('body').addClass('show-focus-outlines');
        }
    });
    document.addEventListener('click', function (e) {
        $('body').removeClass('show-focus-outlines');
    });
});

$(document).on('click keydown', '.link-learmore', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").hide();
        $('.container-fs-popup').show();
        removeTabIndex();
        setCustomeTabIndex($('.slide1Disclaimer'));
        lastFocusedElement = $(this);
    }
});

$(document).on('click keydown', '#closeIcon', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".container-fs").show();
        $('.container-fs-popup').hide();
        setTabIndex();
        lastFocusedElement.focus();
    }
});



var btnClicked;
var lastFocusedElement;
$(document).on('click keydown', '.BtnText1', function (event) {
    event.preventDefault();
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        $(".slides").css("display", "none");
        $(".BtnText1").removeClass("active")
        $(this).addClass("active")
        $(".BtnText1").removeClass("pointers")
        $(this).addClass("pointers")
        btnClicked = $(this).attr("slideNumber");
        $(".slides" + btnClicked).css("display", "block");
    }
    if (event.type === 'keydown' && event.keyCode == 37) {
        $(this).parent('div').prev().find('.BtnText1').focus();
    }
    if (event.type === 'keydown' && event.keyCode == 39) {
        $(this).parent('div').next().find('.BtnText1').focus();
    }
    if (event.type === 'keydown' && event.shiftKey && event.keyCode == 9) {
        $('.topMenuBar1').find('[tabindex]:visible').last().focus();
    }
    else if (event.type === 'keydown' && (event.keyCode === 9 || event.keyCode === 40)) {
        $(".contentContainer").find('[tabindex]:visible').first().focus();
    }
});


//$('div[class*="link"]')
$(document).on('click keydown', 'div[class*="link"]', function (event) {
    //event.preventDefault();

    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {

        $(this).parent().find('div').removeClass('activeblack');
        $(this).addClass('activeblack');
        $(this).parent().find('div').removeClass('pointers');
        $(this).addClass('pointers');
    }
    if (event.type === 'keydown' && event.keyCode == 38) {
        $(this).prev().find('a').focus();
    }
    if (event.type === 'keydown' && event.keyCode == 40) {
        $(this).next().find('a').focus();
    }
    if (event.type === 'keydown' && event.shiftKey && event.keyCode == 9) {
        $('.topMenuBar2').find('[tabindex]:visible').last().focus();
    }
    else if (event.type === 'keydown' && event.keyCode === 9) {
        if ($('.colorBlue').is(':visible')) {
            $('.colorBlue').focus();
        }
        else {
            $(".scroller").find('[tabindex]:visible').first().focus();
        }
    }
});

$(document).on('click keydown', '.moonsTxt', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        $(".nameTheMoonDiv").css("display", "block");
        removeTabIndex();
        setCustomeTabIndex($(".nameTheMoonDiv").css("display", "block"));
        lastFocusedElement = $(this);
        $('.topMenuBar1 .bkimg').attr('tabindex', 0);
    }
});

$(document).on('click keydown', '.bkimg,.exitText', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27)) {
        event.preventDefault();
        $(".nameTheMoonDiv").css("display", "none");
        setTabIndex();
        lastFocusedElement.focus();
    }
});

$(document).on('click keydown', '.navtitle', function (event) {
    if (event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 27 || event.keyCode === 9)) {
        // event.preventDefault();
        $(this).focus();
    }
    event.stopPropagation();
})

var is_iPad = navigator.userAgent.match(/iPad/i) != null;

$(document).on('mouseover click keydown touchstart', '.innernav', function (event) {
    // event.stopPropagation();
    if (event.type === 'mouseover' || event.type === 'touchstart' || event.type === 'click' || (event.type === 'keydown') && (event.keyCode === 13 || event.keyCode === 32)) {
        event.preventDefault();
        if (is_iPad && event.type === 'touchstart') {
            $(this).find('.innertext').css('display', 'block');
            $(this).attr('aria-pressed', 'true');
        }
        else if (!is_iPad && event.type === 'click' || event.type === 'keydown') {
            if ($(this).find('.innertext').is(':visible') !== true) {
                $(this).find('.innertext').css('display', 'block');
                $(this).attr('aria-pressed', 'true');
            }
            else {
                $(this).find('.innertext').css('display', 'none');
                $(this).attr('aria-pressed', 'false');
            }
        }
        else if (event.type === 'mouseover') {
            $(this).find('.innertext').css('display', 'block');
            $(this).attr('aria-pressed', 'true');
        }
    }
});

$(document).on('mouseout focusout', '.innernav', function (event) {
    event.preventDefault();
    // event.stopPropagation();
    $(this).find('.innertext').css('display', 'none')
    $(this).attr('aria-pressed', 'false');
});





function addAccessibilityRolesAndTab() {
    /* Main */
    $('.conatiner').attr('role', 'main').removeAttr('tabindex').removeClass('tabindex');

    /* Navigation */
    $('.topMenuBar2').attr('role', 'menubar');
    $('.topMenuBar2 .BtnText1').addClass('tabindex').attr('role', 'menuitem');
    $('.topMenuBar2 .BtnText1').parent('div').attr('role', 'none');

    // /* Left Side Menubar */
    $('.slides div[class *= "navsection"').attr('role', 'menubar');
    $('.slides div[class *= "link"').find('a').addClass('tabindex').attr('role', 'menuitem');

    $('.conatiner img').attr('alt', 'Placeholder');
    $('.conatiner a').addClass('tabindex');
    $('#closeIcon').addClass('tabindex');
    $('.bkimg').addClass('tabindex');
    $('.Innernav_main .innernav').addClass('tabindex').attr('role', 'button').attr('aria-pressed', 'false');
    $('.nameofMoonsDiv .moonsTxt').addClass('tabindex').attr('role', 'link').attr('href', '#');

    $('.disclaimerTxt1 .colorBlue').addClass('tabindex').attr('role', 'link').attr('href', '#');

    // $('.Innernav_main .innertexttitle a').removeClass('tabindex');
    $('.Innernav_main .innertexttitle a').attr('href', '#');
    $('.headingRole').attr('role', 'heading');
}
function setTabIndex() {
    var tabIndex = 0;
    $('.tabindex').each(function () {
        $(this).attr('tabindex', tabIndex);
    });
}
function removeTabIndex() {
    var tabIndex = -1;
    $('.tabindex').each(function () {
        $(this).attr('tabindex', tabIndex).removeAttr('tabindex');
    });
}
function setCustomeTabIndex(_outerElement) {
    var tabIndex = 0;
    _outerElement.find('.tabindex').each(function () {
        $(this).attr('tabindex', tabIndex);
    });
    _outerElement.attr('tabindex', -1).focus().css({ 'outline': 'none' });
}