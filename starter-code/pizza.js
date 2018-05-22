// Write your Pizza Builder JavaScript in this file.
$('document').ready(function () {

    // Vars    
    var $btnTopping = $('.btn');
    var $pepperonni = $('.pep');
    var $mushrooms = $('.mushroom');
    var $greenPepper = $('.green-pepper');
    var $sauceWhite = $('.sauce-white');
    var $glutenFree = $('.crust-gluten-free');
    //List vars: 
    var $listPep = $('aside li:first');
    var $listMushroom = $('aside li:nth-child(2)');
    var $listGreen = $('aside li:nth-child(3)');
    var $listWhiteSauce = $('aside li:nth-child(4)');
    var $listGluten = $('aside li:last');

    var $totalPrice = $('.panel > strong');
    var $dollar = $totalPrice.text()[0];

    getTotalPrice();

    //Button events
    $('.btn-pepperonni').click(function () {
        toggleTopping($pepperonni);
        toggleActive(this);
        toppingListing($listPep);
        getTotalPrice();
    });

    $('.btn-mushrooms').click(function () {
        toggleTopping($mushrooms);
        toggleActive(this);
        toppingListing($listMushroom);
        getTotalPrice();
    });

    $('.btn-green-peppers').click(function () {
        toggleTopping($greenPepper);
        toggleActive(this);
        toppingListing($listGreen);
        getTotalPrice();
    });

    $('.btn-sauce').click(function () {
        debugger
        toggleTopping($sauceWhite);
        toggleActive(this);
        toppingListing($listWhiteSauce);
        getTotalPrice();
    });

    $('.btn-crust').click(function () {
        debugger;  
        toggleTopping($glutenFree);
        toggleActive(this);
        toppingListing($listGluten);
        getTotalPrice();
    });

    
    function toggleTopping(topping) {
        if (topping.hasClass('crust')) {
            topping.toggleClass('crust-gluten-free');
        }
        else {
            if (topping.hasClass('sauce')) {
                topping.toggleClass('sauce-white');
            }
            else {
                $(topping).toggle();
            }
        }
    }

    function toggleActive(btn) {
        $(btn).toggleClass('active');
    }

    function toppingListing(topping) {
        $(topping).toggle();
    }

    function getPriceByItem(topping) {
        var toppingPrice = parseInt($(topping).text()[1]);

        return toppingPrice;
    }

    function getTotalPrice() {
        var $listPrice = $('.panel.price ul')[0].children;
        var currentPrice = 0;

        for (var i = 0; i < $list.length; i++) {
            var listElement = $listPrice[i];
            if ($(listElement).is(":visible")) {
                currentPrice += getPriceByItem(listElement);
            }
        }

        currentPrice += 10;
        return $totalPrice.text($dollar + currentPrice);
    }

});
