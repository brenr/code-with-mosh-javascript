// We call functions "methods" that are encapsulated within objects, otherwise
// if they're in the global scope we refer to them as "functions"

// `this` keyword references the object that is executing the current function

// using `this` in a globally scoped method for example would refer to the window object in browser
// or the global object in node

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); // <- this this is technically referring to the global object because it's inside
                                    // of this function block
        }, this); // passing `this` refers to our video object so that the forEach callback method can access it
    }
};

video.showTags();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // new keyword creates a new object and then initializes properties with constructor
