modernJs.registerContent(function () {
    return (`
        <div class="container">
            ${Object.keys(articles).map(function (article) {
        return `<div class="article-container">
                    <h3>${articles[article].title}</h3>
                    <div class="articles-img">
                        <img src="${articles[article].img}"/>
                    </div>
                    <a class="article-link" href="#${articles[article].id}">show article</a>
                    
                </div>`
    }).join("")}
        </div>
    `)
}, document.querySelector("pages-app"));
