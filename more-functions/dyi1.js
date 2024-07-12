const person = {
  username: '',
  password: '',
  hobbies: [],
  addHobby: function(hobby, description) {
    const objHobby = {
      hobby,
      description
    }
    this.hobbies.push(objHobby);
    console.log(`Hobby ${hobby}: ${description} added to hobbies list`);
  }
};

const mike = {
  username: 'mike',
  password: '123',
  hobbies: [],
}

const mikeAddHobby = person.addHobby;
mikeAddHobby.call(mike, 'basketball', 'I love to play description');
