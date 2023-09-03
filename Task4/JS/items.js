const listItems = document.getElementById('list-items');

const item1 = document.createElement('div');
item1.classList.add('item-card');
item1.innerHTML = `
  <div class="item-image">
    <img src="Images/Iphone1.jpg" alt="Item 1 image">
  </div>
  <div class="item-details">
    <h2 class="item-name">GALAXY F12 SMART PHONE</h2>
    <p class="item-description">5 CAMERAS,5G SUPPORT,GREAT GRAPHICS</p>
    
    <div class="item-meta">
      <span class="item-id">#123</span>
      <span class="item-date">Created on Jan 1, 2023</span>
    </div>
  </div>
`;

const item2 = document.createElement('div');
item2.classList.add('item-card');
item2.innerHTML = `
  <div class="item-image">
    <img src="Images/Iphone2.jpg" alt="Item 2 image">
  </div>
  <div class="item-details">
    <h2 class="item-name">Item 2 Name</h2>
    <p class="item-description">Item 2 description goes here.</p>
    <div class="item-meta">
      <span class="item-id">#456</span>
      <span class="item-date">Created on Jan 2, 2023</span>
    </div>
  </div>
`;

const item3 = document.createElement('div');
item3.classList.add('item-card');
item3.innerHTML = `
  <div class="item-image">
    <img src="Images/Iphone3.jpg"
  <div class="item-details">
    <h2 class="item-name">Item 3 Name</h2>
    <p class="item-description">Item 3 description goes here.</p>
    <div class="item-meta">
      <span class="item-id">#789</span>
      <span class="item-date">Created on Jan 3, 2023</span>
    </div>
  </div>
`;

listItems.appendChild(item1);
listItems.appendChild(item2);
listItems.appendChild(item3);
