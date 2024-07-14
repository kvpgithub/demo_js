// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var movie2;
movie2 = {
  title: "The Movie",
  actors: "Actor 1, Actor 2",
  directors: "Director 1, Director 2",
  year: 2016
  };

  console.log("movie info for " + movie2.title);
  console.log("------------------------------");
  console.log("Actors: " + movie2.actors);
  console.log("Directors: " + movie2.directors);
  console.log("Year: " + movie2.year);
  console.log("------------------------------");

  var blogpost;
  blogpost = {
    title: "My Blog Post",
    author: "John Doe",
    date: "2016-01-01"
};

console.log("Blog Post Information");
console.log("------------------------------");
console.log("Title: " + blogpost.title);
console.log("Author: " + blogpost.author);
console.log("------------------------------");


/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */