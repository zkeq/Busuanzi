(function () {
    var url = "https://dev.counter.busuanzi.icodeq.com";
    var tags = ["site_pv", "site_uv", "page_pv"];
    var bsz_send = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("x-bsz-Referer", window.location.href);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var res_1 = JSON.parse(xhr.responseText);
                    tags.map(function (tag) {
                        var ele = document.getElementById("busuanzi_value_".concat(tag));
                        if (ele) {
                            ele.innerHTML = res_1[tag];
                        }
                    })
                }
            }
        };
        xhr.send();
    };
    var history_pushState = window.history.pushState;
    window.history.pushState = function () {
        history_pushState.apply(this, arguments);
        bsz_send();
    };
    window.addEventListener("popstate", function (_e) {
        bsz_send();
    }, false);
    bsz_send();
})();