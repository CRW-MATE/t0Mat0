const user = { name: "guest", role: "none" };

class Subs {
  constructor(name, subject, bio, price) {
    this.name = name;
    this.subject = subject;
    this.price = price;
  }
}

const feed = [
  new Subs("mathew", "Maths", 8.99),
  new Subs("martin", "Maths", 0.0),
  new Subs("robert", "Maths", 15.99),
  /////
  new Subs("john", "Engl", 8.99),
  new Subs("roger", "Engl", 0.0),
  new Subs("mark", "Engl", 15.99),
  /////
  new Subs("don", "histo", 8.99),
  new Subs("spencer", "histo", 0.0),
  new Subs("jack", "histo", 15.99),
  /////
  new Subs("zack", "scien", 8.99),
  new Subs("evan", "scien", 0.0),
  new Subs("peter", "scien", 15.99),
];
