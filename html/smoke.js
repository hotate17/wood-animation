$(function () {
        var a = 0;
        for (; a < 15; a += 1) {
            setTimeout(function b() {
                var a = Math.random() * 1e3 + 5e3,
                    c = $("", {
                        "class": "smoke",
                        css: {
                            opacity: 0,
                            left: Math.random() * 200 + 80
                        }
                    });
                $(c).appendTo(".slide");
                $.when($(c).animate({
                    opacity: 1
                }, {
                    duration: a / 4,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        $(c).animate({
                            opacity: 0
                        }, {
                            duration: a / 3,
                            easing: "linear",
                            queue: false
                        })
                    }
                }), $(c).animate({
                    bottom: $(".slide").height()
                }, {
                    duration: a,
                    easing: "linear",
                    queue: false
                })).then(function () {
                    $(c).remove();
                    b()
                })
            }, Math.random() * 3e3)
        }
}())