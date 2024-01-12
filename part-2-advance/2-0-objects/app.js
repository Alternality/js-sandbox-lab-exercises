'use strict';
const c = console.log.bind(this);

// Exercise #1
// Create an address object with the following properties:
// street, city, zipCode
const address = {
    street:'Azucena',
    city:'Boac',
    zipCode:'4900'
};
c(address);
// Exercise #2
// Write a Factory and Constructor function for an address object with the following properties:
// street, city, zipCode
function addressFactory(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
const newAddress = addressFactory('Poctoy', 'Torrijos', '4903');
c(newAddress);
function AddressConstructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const addressCreate = new AddressConstructor('Tabi','Boac','Mardinque');
c(addressCreate);
// Exercise #3
// Write a function that will check the equality of an address object.
// the function areEqual(address1, address2) should return true if the address objects are equal.
// the function areSame(address1, address2) should return true if the address objects are the same object.
function areEqual(address1,address2){
    return(
        address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
    );
}
function areSame(address1,address2){
    return address1 === address2;
}
const addressFirst = addressFactory('Poctoy', 'Torrijos', '4903');
const addressSecond = new AddressConstructor('Poctoy', 'Torrijos', '4903');
c(areEqual(addressFirst,addressSecond));
c(areSame(addressFirst,addressSecond));
// Exercise #4
// Create a object called post with the following properties:
// title, body, author, views, comments (author, body), isLive
const post = {
    title: 'Mining Adventures',
    body: 'Digging deep into the world of blocks and ores.',
    author: 'Steve',
    views: 10000,
    comments: [
      { author: 'Creeper', body: 'Sssss... Boom!' },
      { author: 'Enderman', body: 'Teleporting away!' }
    ],
    isLive: true
  };
  c(post);
// Exercise #5
// Create a constructor function that will create a post object with the following properties:
// title, body, author, views, comments (author, body), isLive
// the function should have a method called publish that will set the isLive property to true
// the function should have a method called unpublish that will set the isLive property to false
// the function should have a method called addComment that will add a comment to the comments array
// the function should have a method called removeComment that will remove a comment from the comments array
function PostConstructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  
    this.publish = function () {
      this.isLive = true;
    };
  
    this.unpublish = function () {
      this.isLive = false;
    };
  
    this.addComment = function (commentAuthor, commentBody) {
      this.comments.push({ author: commentAuthor, body: commentBody });
    };
  
    this.removeComment = function (index) {
      this.comments.splice(index, 1);
    };
}
const newPost = new PostConstructor('New Post','Some Block Game','Steve');
newPost.publish();
newPost.addComment('Mark','Some Content!');
newPost.addComment('Notch','Sure..');
c(newPost);
newPost.unpublish();
newPost.removeComment(0);
c(newPost);
// Exercise #6
// Create an array of objects called priceRange
// each object should have a label and a tooltip
// label is a string
// tooltip is a string
// the array should have 4 objects
// the first object should have the label '$' and the tooltip 'Inexpensive'
// the second object should have the label '$$' and the tooltip 'Moderate'
// the third object should have the label '$$$' and the tooltip 'Pricey'
// the fourth object should have the label '$$$$' and the tooltip 'Very Expensive'
// Inexpensive = 0 - 10
// Moderate = 11 - 20
// Pricey = 21 - 50
// Very Expensive = 51+
const priceRange = [
    {label: '$', tooltip: 'Inexpensive'},
    {label: '$$', tooltip: 'Moderate'},
    {label: '$$$', tooltip: 'Pricey'},
    {label: '$$$$', tooltip: 'Very Expensive'},
];
function getPriceRangeLabel(value) {
    let label = '';
  
    if (value >= 0 && value <= 10) {
      label = '$';
    } else if (value >= 11 && value <= 20) {
      label = '$$';
    } else if (value >= 21 && value <= 50) {
      label = '$$$';
    } else if (value >= 51) {
      label = '$$$$';
    } else {
      label = 'Invalid value';
    }
  
    let tooltip = '';
  
    if (label === '$') {
      for (const range of priceRange) {
        if (range.label === label) {
          tooltip = range.tooltip;
          break;
        }
      }
    }
  
    return tooltip || label;
  }
  c(getPriceRangeLabel(10));