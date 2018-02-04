function Router() {
    var selfe = this;
    this.set = function (routes) {
        if (Array.isArray(routes)) {
            return this.routes = routes;
        } else {
            console.error("routes doesn't array");
        }
    };
    this.add = function (path) {
        this.routes.push(path);
    };
    this.get = function (getRoute, res) {
        var routes = Array.from(this.routes);
        this.routes.forEach(function (route) {
            if (getRoute == route) {
                window.addEventListener("hashchange", function (event) {
                    if (location.hash == getRoute) {
                        return res();
                    }
                });
                 if (location.hash == getRoute) {
                    return res();
                }
            }
        });
    };
    this.errorPage = function (cb) {
        window.addEventListener("hashchange", function () {
            if (selfe.routes.indexOf(location.hash) === -1) {
                return cb();
            }
        });
        if (this.routes.indexOf(location.hash) === -1) {
            return cb();
        }
    }
}
var modernJs = {
    registerContent : function (callback, parent, style, scripts) {
        var container = document.createElement("div");
        container.innerHTML = callback();
        if (scripts) {
            scripts.forEach(function (src) {
                if (src.match(/.js$/)) {
                    var script = document.createElement("script");
                    script.src = src;
                    container.firstElementChild.appendChild(script);

                } else if (src.match(/.css$/)) {
                    var style = document.createElement("link");
                    style.rel = "stylesheet";
                    style.href = src;
                    container.firstElementChild.appendChild(style);
                }
            });
        }

        function Elements() {
            this.element =  container.firstElementChild.cloneNode(true);
        }
        var elements = new Elements();
        //if (parent == document.body) {
          // parent.insertBefore(elements.element, document.querySelector("script"));
        //} else {
            parent.appendChild(elements.element);
        //}
        for (var css in style) {
            var element = elements.element;
            for (var f in style[css]) {
                element.style.cssText += style[css];
            }
        }
    },
    filterContent: function (element) {
        var element = document.querySelector(element);
        element.innerHTML = "";
    },
    removeContent: function (element) {

        //return element.parentElement.removeChild(element);
        //var elem = document.querySelector(element);
        //console.log(elem);
    },
    Routeer: new Router(),
    loadJs: function (path, parent) {
        var script = document.createElement("script");
        script.src = path;
        parent.appendChild(script);
    },
    intiApplication: function () {
        var headerApp = document.createElement("header-application");
        var contentPages = document.createElement("content-pages");
        var footerApp = document.createElement("footer-application");
        document.body.insertBefore(headerApp, document.querySelector("script"));
        document.body.insertBefore(contentPages, document.querySelector("script"));
        document.body.insertBefore(footerApp, document.querySelector("script"));
    },
    loadStaticComponents: function (cb) {
        return cb();
    }
};


