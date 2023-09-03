// itemsController.js

class ItemsController {

  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }
    // Create the addItem method
  addItem( name, description, img, createdAt) {
    this.currentId++;
    const newItem = {
      id: this.currentId,
      name: name,
      description: description,           
      img:img,
      createdAt:createdAt
    };   
        // Push the item to the items property
    this.items.push(newItem);
  }
}//class close

// Create an instance of ItemsController and add a new item
const itemsController = new ItemsController();

itemsController.addItem('laptop', 'High-performance laptop with great display', 'https://example.com/laptop.png', '2023-05-08');
itemsController.addItem('mobilephone', 'great display with 5 cameras', 'https://example.com/laptop.png', '2023-07-12');
itemsController.addItem('tab', 'userfreindly', 'https://example.com/laptop.png', '2023-07-12');
console.log(itemsController.items);

