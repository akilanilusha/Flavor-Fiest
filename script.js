
class items {
  constructor(id, name, description, imageSrc) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageSrc = imageSrc;
    
  }
}

// Menu Item list
// const menuCard = [
//   new items(
//     1,
//     "Cheesy Chicken Garlic Bread1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     2,
//     "Cheesy Chicken Garlic Bread2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    
//     "img/menu/section_one/img1.jpg",
//   ),
//   new items(
//     3,
//     "Cheesy Chicken Garlic Bread3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    
//     "img/menu/section_one/img2.jpg",
//   ),
//   new items(
//     4,
//     "Cheesy Chicken Garlic Bread4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     5,
//     "Cheesy Chicken Garlic Bread5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     6,
//     "Cheesy Chicken Garlic Bread6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     7,
//     "Cheesy Chicken Rice1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg",
   
//   ),
//   new items(
//     8,
//     "Cheesy Chicken Rice2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     9,
//     "Cheesy Chicken Rice3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     10,
//     "Cheesy Chicken Rice4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     11,
//     "Cheesy Chicken Rice5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     12,
//     "Cheesy Chicken Rice6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     13,
//     "Cheesy Chicken Pasta1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     14,
//     "Cheesy Chicken Pasta2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     15,
//     "Cheesy Chicken Pasta3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     16,
//     "Cheesy Chicken Pasta4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     17,
//     "Cheesy Chicken Pasta5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     18,
//     "Cheesy Chicken Pasta6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     19,
//     "Chocalet Cake1",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     20,
//     "Chocalet Cake2",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     21,
//     "Chocalet Cake3",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     22,
//     "Chocalet Cake4",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     23,
//     "Chocalet Cake5",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   ),
//   new items(
//     24,
//     "Chocalet Cake6",
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
//     "img/menu/section_one/img5.jpg", 
//   )
   
// ];

function getItemData(id) {
  openModel(id);

}

function openModel(id) {
 
  const bundle = menuCard[id];
  
  const modalImageDiv = document.getElementById('modalImageDiv');
  const itemDescription = document.getElementById('itemDescription');
  const itemName = document.getElementById('itemName');

  modalImageDiv.innerHTML = `<img src="${bundle.imageSrc}" width="100%">`;
  itemDescription.innerHTML = `${bundle.description}`;
  itemName.innerHTML = `${bundle.name}`;

}
