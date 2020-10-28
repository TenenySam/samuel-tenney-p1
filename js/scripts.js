/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function () {
    /**************************************
     * Package data and constructor objects
     **************************************/

    // Package data array(simulated data source)
    var data = [
        {
            name: "Randalf",
            height: "15ft",
            width: "24ft",
            weight: "4920lbs",
            location: "Rocksville, Kentucky",
            price: "$250",
            selector: "rock1",
        },
        {
            name: "Devils Rock",
            location: "Devils Tower, Utah",
            weight: "250lbs",
            height: "500ft",
            width: "12ft",
            price: "$325",
            selector: "rock2",
        },
        {
            name: "Dingo Pete",
            location: "Bellingham, Washington",
            weight: "134lbs",
            height: "5ft",
            width: "1.5ft",
            price: "$2949",
            selector: "rock3",
        },
        {
            name: "Pumpkin",
            location: "Salem, Massachusetts",
            weight: "297lbs",
            height: "12ft",
            width: "295ft",
            price: "$500",
            selector: "rock4",
        },
        {
            name: "Disco Dave",
            location: "Disco, Wisconsin",
            weight: "299lbs",
            height: "45ft",
            width: "2ft",
            price: "$500",
            selector: "rock5",
        },

    ];

    //VSCODE Package Constructor function
    function Package(data) {
        this.name = data.name;
        this.width = data.width;
        this.height = data.height;
        this.weight = data.weight;
        this.location = data.location;
        this.price = data.price;
        this.selector = data.selector;


    }

    //Returns today's date, formatted
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    // Returns DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    };

    // Writes the package object's data to the
    // appropriate DOM elements utilizing the package selector property.
    var writePackageInfo = function (package) {
        // Get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + "-name"),
            widthEl = getEl(selector + "-width"),
            heightEl = getEl(selector + "-height"),
            weightEl = getEl(selector + "-weight");
            locationEl = getEl(selector + "-location"),
            priceEl = getEl(selector + "-price"),
        nameEl.textContent = package.name;
        widthEl.textContent = package.width;
        heightEl.textContent = package.height;
        weightEl.textContent = package.weight;
        locationEl.textContent = package.location;
        priceEl.textContent = package.price;
    };


    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    for (var i = 0; i <data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

})();