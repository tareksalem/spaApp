Object.keys(articles).map(function (article) {
    if (location.hash == "#" + articles[article].id) {
        modernJs.filterContent("pages-app");
        modernJs.registerContent(function () {
            return (`
            <div class="container-article">
                <div class="article">
                    <h3>${articles[article].title}</h3>
                    <div class="article-img">
                        <img src="${articles[article].img}">
                    </div>
                    <div class="article-body">
                        <p>${articles[article].body}</p>
                    </div>
                </div>
                <div class="container-suggested-articles">
                    ${Object.keys(articles).map(function (article) {
                        return (`
                            <div class="suggested-article">
                                <h3>${articles[article].title}</h3>
                                <div class="suggested-img">
                                    <img src="${articles[article].img}"/>
                                </div>
                                <div class="suggested-article-overlay">
                                    <div class="overlay-inner">
                                        <p class="article-caption">${articles[article].body}</p>
                                        <a class="suggested-article-link" href="#${articles[article].id}">show article</a>
                                    </div>
                                </div>
                            </div>
                        `)
            }).join("")}
                </div>
            </div>
    `)
        }, document.querySelector("pages-app"));
    }
});