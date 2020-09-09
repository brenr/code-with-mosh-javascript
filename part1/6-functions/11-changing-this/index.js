
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => { // Using arrow function we can refer to video object
            console.log(this.title, tag); // "this" inside an arrow function references the containing function
        }/*.bind(this)*/); // Binding this required to reference video object before ES6
    }
};

//video.showTags();




function playVideo(a, b) {
    console.log(this);
}

// First argument overrides the "this" in the method

playVideo.call({ name: 'Brendan' }, 1, 2); // -> { name: "Brendan" }
playVideo.apply({ name: 'Brendan' }, [1, 2]); // -> { name: "Brendan" }
// The difference between call an apply is that with call is the number of passed arguments, where call you can
// pass multiple and in the case with apply, we'd pass in an array to accomplish the same result

const fn = playVideo.bind({ name: 'Brendan' })(); // With bind, we set "this" for a given function then it returns fn

