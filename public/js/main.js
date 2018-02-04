modernJs.loadStaticComponents(function () {
    modernJs.loadJs("js/components/header.js", document.querySelector("header-app"));
    modernJs.loadJs("js/components/footer.js", document.querySelector("footer-app"));
});
modernJs.Routeer.set([""]);
modernJs.Routeer.get("", function () {
    modernJs.filterContent("pages-app");
    modernJs.loadJs("js/components/articles.js", document.querySelector("pages-app"));
});
Object.keys(articles).forEach(function (article) {
    modernJs.Routeer.add("#" + articles[article].id);
    modernJs.Routeer.get("#" + articles[article].id, function () {
      modernJs.loadJs("js/components/article.js", document.querySelector("pages-app"));
    })
});

modernJs.Routeer.errorPage(function () {
    modernJs.filterContent("pages-app");
    modernJs.loadJs("js/components/error.js", document.querySelector("pages-app"));
});