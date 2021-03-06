var AnimateContent = function () {
    /* «Выпадайка» */
    _$('.content_filter_sort_dropdown__trigger').click(function (e) {
        e.preventDefault();
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('.content_filter_sort_dropdown__trigger.active').length) {
            _$('.content_filter_sort_dropdown__trigger.active')
                    .not(this)
                    .removeClass('active')
                    .closest('.dropdown')
                    .find('.content_filter_sort_dropdown__content')
                    .addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.dropdown')
                .find('.content_filter_sort_dropdown__content[data-target="' + _$this.data('target') + '"]')
                .toggleClass('hidden');
    });

    /* Скрываем выпадайку по клику мимо неё */
    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('.content_filter_sort_dropdown__trigger')) {
            //
        } else {
            if (1 !== _$this.parents().filter('.content_filter_sort_dropdown__content').length) {
                _$('.content_filter_sort_dropdown__trigger.active')
                        .removeClass('active').
                        siblings('.content_filter_sort_dropdown__content')
                        .addClass('hidden');
            }
        }
    });

    /* По клику на внутреннюю ссылку «выпадайка» закрывается */
    _$('.content_filter_sort_dropdown__content a').click(function () {
        _$(this).closest('.content_filter_sort_dropdown__content')
                .toggleClass('hidden').
                siblings('.content_filter_sort_dropdown__trigger')
                .toggleClass('active');
    });

    _$('.chain-slider').owlCarousel({
        items: 3,
        slideSpeed: 700,
        rewindSpeed: 700,
        navigation: true,
        navigationText: ['', ''],
        scrollPerPage: true,
        pagination: false,
        responsive: false,
        theme: '',
    });
    
    _$('.b-catalog-banner').fotorama({
        width: '100%',
        height: 330,
        allowfullscreen: false,
        loop: true,
        autoplay: 3500,
        transitionduration: 500,
        stopautoplayontouch: true,
        nav: 'dots',
        arrows: false,
        shadows: false,
        transition: 'crossfade',
        fit: 'cover'
    });
    
    _$('.b-item__order-button .btn').click(function () {
        var _$this = _$(this);
        var item = _$this.closest('.b-item__popover');

        var x = item.offset().left,
                y = item.offset().top,
                tx = _$('.menu-login').offset().left + 60;


        item.clone()
                .appendTo(_$('body'))
                .addClass('hallucination')
                .css({
                    position: 'absolute',
                    left: x,
                    top: y,
                    zIndex: 999
                })
                .animate({
                    opacity: 0.5,
                    left: tx,
                    top: 0,
                    width: 50,
                    height: 100
                },
                600,
                        function () {
                            _$(this).remove();
                        }
                );
    });
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};


