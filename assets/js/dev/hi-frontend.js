jQuery(document).ready(function ($) {
    // run first
    var ec = $('#hi-excludes');
    var ecx = [];
    if (ec.length) {
        ecx = $.parseJSON(ec.text());
    }

    hi_tpl_init_all();

    function hi_tpl_init_all() {
        var his = $('.hi-tpl');
        if (his.length) {
            his.each(function (i, el) {
                var hi = $(el);
                if (typeof hi.data('hi') == "undefined") {
                    hi_tpl_init(hi);
                }
            });
        }
    }

    function get_image_dim(i, o) {
        var v = i.css(o);
        if (v === 0 || v == '0px') {
            v = i.attr(o);
            if (typeof v !== typeof undefined && v !== false) {
                v = 'inherit';
            }
        }
        return v;
    }

    function get_image_margin(i, o) {
        var v = i.css('margin-' + o);
        if (o == 'left' || o == 'right') {
            if (v === 0 || v == '0px') {
                if (!i.hasClass('alignleft') && !i.hasClass('alignright') && !i.hasClass('alignnone')) {
                    return 'auto';
                }
            }
        }
        return v;
    }

    function hi_tpl_init(hi) {
        var valid = true,
            additionalClass, // Additional Class
            image = hi.find('img'),
            hidata = hi.data();

        if ($.type(hidata.align) != "undefined") {
            image.removeClass('alignright alignleft alignnone aligncenter').addClass(hidata.align);
        }
        if ($.type(hidata.size) != "undefined") {
            var size_exp =hidata.size.split('.');
            image.attr('width',size_exp[0]).attr('height',size_exp[1]);
        }
        if ($.type(hidata.display) != "undefined") {
            image.addClass(hidata.display);
        }

        typeof DAHZ != "undefined" ? additionalClass = ' pinit-button' : additionalClass = '';

        // check excludes
        $.each(ecx, function (ecxi, cn) {
            if (cn != '' && hi.parents(cn).length) {
                valid = false;
                return false;
            }
        });

        if (!valid) {
            return false;
        }


        /*
         * Get effect data
         * */
        var ex = hidata.hidata.split('X'),
            dataAll = $.parseJSON($('#hi-data-post-' + ex[0]).text());
        if (!dataAll) {
            return false;
        }
        var data = dataAll[ex[1]];
        if (!data) {
            return false;
        }

        var html = {overlay: '', buttons: '', content: ''};

        /* Overlay Html */
        if (data.overlay) {
            html.overlay = '<div class="hi-overlay"></div>';
        }

        /* Buttons Html */
        if (data.buttons && Object.keys(data.buttons).length) {
            html.buttons = '<div class="hi-tpl-buttons-wrap"><div class="hi-tpl-buttons">';
            $.each(data.buttons, function (i, e) {
                if (i == 'view') {
                    html.buttons += '<a href="' + e + '" rel="prettyPhoto" class="hi-ff-view' + additionalClass + '"></a>';
                }

                if (i == 'link' && data.buttons.link_single) {
                    html.buttons += '<a href="' + e + '" class="hi-ff-link' + additionalClass + '" target="' + data.buttons.target + '"></a>';
                }
            });
            html.buttons += '</div></div>';
        }

        /* Content Html */
        if (data.content && Object.keys(data.content).length) {

            html.content = '<div class="hi-tpl-content-wrap"><div class="hi-tpl-content">';
            if (data.content.title) {
                if (data.content.title.title_type == 'heading') {
                    html.content += '<h3 class="hi-content-title">' + data.content.title.title + '</h3>';
                } else {
                    html.content += '<a href="' + data.content.title.permalink + '" class="hi-content-title" target="' + data.content.title.target + '" title="' + data.content.title.attr.title + '">' + data.content.title.title + '</a>';
                }
            }

            if (data.content.excerpt) {
                html.content += '<p class="hi-content-excerpt" data-clamp="' + data.content.clamp + '">' + data.content.excerpt + '</p>';
            }

            if (data.content.categories) {
                var c = [];
                $.each(data.content.categories, function (i, e) {
                    c.push('<a href="' + e.link + '" title="' + e.title + '">' + e.name + '</a>');
                });
                html.content += '<div class="hi-content-categories">' + c.join(', ') + '</div>';
            }

            if (data.content.shares) {
                var s = '';
                $.each(data.content.shares, function (i, e) {
                    s += '<a target="_blank" href="' + e.link + '" data-color="' + e.color + '" class="' + e.icon + additionalClass + '"></a>';
                });
                html.content += '<div class="hi-content-share">' + s + '</div>';
            }

            html.content += '</div></div>';
        }

        var wrap = $('<div class="hi-' + data.tplid + ' hi-tpl-wrap">')

        var css_display = image.css('display');
        var css_width = get_image_dim(image, 'width');
        var css_height = get_image_dim(image, 'height');

        // hi-tpl css
        wrap.css({
            display: css_display == 'inline' ? 'inline-block' : css_display,
            marginTop: get_image_margin(image, 'top'),
            marginBottom: get_image_margin(image, 'bottom'),
            marginLeft: get_image_margin(image, 'left'),
            marginRight: get_image_margin(image, 'right'),
            width: css_width,
            float: image.css('float'),
            height: css_height
        });

        image.css({
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0
        });

        image.load(function () {
            var image_al = $(this);
            image_al.closest('.hi-tpl-wrap').css({
                width: image_al.css('width'),
                height: image_al.css('height')
            });
        });

        hi.wrap(wrap);

        // var margin = {
        //     top: 0,
        //     //	left:   image.css('margin-left'),
        //     //	right:  image.css('margin-right'),
        //     bottom: 0
        // };
        //
        // hi.children().each(function (i, e) {
        //     var el = $(e);
        //     $.each(margin, function (mi, mv) {
        //         margin[mi] += parseInt(el.css('margin-' + mi));
        //         el.css('margin-' + mi, 0);
        //     });
        // });
        //
        // //if(  )
        // var dispClass = '';
        //
        // if (image.hasClass('aligncenter')) {
        //     dispClass += ' image-center';
        // }
        //
        // if (hi.hasClass('inline')) {
        //     dispClass += ' inline';
        // }
        //
        // var sizew = hi.data('sizew');
        // var sizew_str = '';
        // var sizew_cl = '';
        // if (sizew) {
        //     var sizesw = sizew.split('x');
        //     if ($(sizesw).length == 2) {
        //         sizew_str = ' width: ' + sizesw[0] + '; height: ' + sizesw[1] + ';'
        //         sizew_cl = ' resp';
        //     }
        // }
        //
        // hi.wrap('<div class="hi-' + data.tplid + dispClass + sizew_cl + ' hi-tpl-wrap" style="margin: ' + margin.top + 'px auto ' + margin.bottom + 'px auto;' + sizew_str + '">');

        $.each(html, function (i, v) {
            $(v).appendTo(hi);

            // clamp
            if (data.content && Object.keys(data.content).length && data.content.excerpt) {
                var t = $('.hi-' + data.tplid + ' .hi-content-excerpt');
                if (t.length) {
                    var lines = t.data("clamp");
                    $clamp(t.get(0), {clamp: lines});
                    t.css('max-height', (lines * parseInt(t.css('line-height')) ))
                }
            }
        });

        /*
         * TPLs share hover color
         * */
        hi.find('.hi-content-share').on('mouseenter', 'a', function () {
            $(this).css('background', $(this).data('color'));
        }).on('mouseleave', 'a', function () {
            $(this).css('background', 'transparent');
        });

        hi.find('.hi-content-share').on('click', 'a', function (e) {
            e.preventDefault();
            var w = 640, h = 480, l = (screen.width / 2) - (w / 2), t = (screen.height / 2) - (h / 2);
            window.open($(this).attr('href'), '',
                'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + t + ', left=' + l);
        });

        hi.find("a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast', /* fast/slow/normal */
            slideshow: 5000, /* false OR interval time in ms */
            autoplay_slideshow: false, /* true/false */
            opacity: 0.80, /* Value between 0 and 1 */
            show_title: true, /* true/false */
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 500,
            default_height: 344,
            counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
            theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
            horizontal_padding: 20, /* The padding on each side of the picture */
            hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
            wmode: 'opaque', /* Set the flash wmode attribute */
            autoplay: true, /* Automatically start videos: True/False */
            modal: false, /* If set to true, only the close button will close the window */
            deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
            overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
            changepicturecallback: function () {
            }, /* Called everytime an item is shown/changed */
            callback: function () {
            }, /* Called when prettyPhoto is closed */
            ie6_fallback: true,
            custom_markup: '',
            social_tools: false
        });

        hi.data('hi', data);
    }

});
