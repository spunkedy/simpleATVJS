var changeLilly = function(){

}
var homePage = ATV.Page.create({
    name: 'home',
    // use a template function from your favourite templating engine
    // or pass a raw template function
    template(data) {
        return `<document>
                    <alertTemplate>
                        <title>${data.title}</title>
                        <description>${data.description}</description>
                    </alertTemplate>
                </document>`;
    },
    // pass some raw data to be applied
    // or a data function that returns the data
    data: {
        title: 'Homepage',
        description: "Simple example"
    }
});
var searchPage = ATV.Page.create({
    name: 'search',
    // use a template function from your favourite templating engine
    // or pass a raw template function
    template(data) {
        return `<document>
                    <alertTemplate>
                        <title>${data.title}</title>
                        <description>${data.description}</description>
                    </alertTemplate>
                </document>`;
    },
    // pass some raw data to be applied
    // or a data function that returns the data
    data: {
        title: 'Homepage',
        description: "search"
    }
});


// template functions
const loaderTpl = function(data){ return `<document>
    <loadingTemplate>
        <activityIndicator>
            <title>${data.message}</title>
        </activityIndicator>
    </loadingTemplate>
</document>`};

const errorTpl = function(data){
  return `<document>
    <descriptiveAlertTemplate>
        <title>${data.title}</title>
        <description>${data.message}</description>
    </descriptiveAlertTemplate>
</document>`};

// Global TVML styles
var globalStyles = `
.text-bold {
    font-weight: bold;
}
.text-white {
    color: rgb(255, 255, 255);
}
.dark-background-color {
    background-color: #091a2a;
}
.button {
    background-color: rgba(0,255,0,0.3);
    tv-tint-color: rgba(0,0,255,0.3);
}
`;

ATV.start({
    bootloaded: false,
    style: globalStyles,
    menu: {
        attributes: {},
        items: [{
            id: 'search',
            name: 'Search',
            page: searchPage
        }, {
            id: 'homepage',
            name: 'Home',
            page: homePage,
            attributes: {
                autoHighlight: true // auto highlight on navigate
            }
        }]
    },
    templates: {
        // loader template
        loader: loaderTpl,
        // global error template
        error: errorTpl,
        // xhr status based error messages
    },
    // global event handlers that will be called for each of the pages
    handlers: {
        select: {
            globalSelecthandler(e) {
                var element = e.target;
                var someElementTypeCheck = element.getAttribute('data-my-attribute');

                if (someElementTypeCheck) {
                    // perform action
                }
            }
        }
    }
});
ATV.Navigation.navigateToMenuPage();
