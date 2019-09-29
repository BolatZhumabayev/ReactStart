export const DISHES = 
[
    {
      id: 0,
      name:'Uthappizza',
      image: 'assets/images/uthappizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      comments :
      [
         { id: 10, body : "comment 0" , author : "author 0" , d : new Date(2018, 11, 24) },
         { id: 11, body : "comment 1" , author : "author 1" , d : new Date(2018, 10, 2) }
      ],  
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
   {
      id: 1,
      name:'Zucchipakoda',
      image: 'assets/images/zucchipakoda.png',
      category: 'appetizer',
      label:'',
      price:'1.99',
      comments :
      [
         { id: 1, body : "comment 2" , author : "author 2" , d : new Date(2018, 1, 2) },
         { id: 2, body : "comment 3" , author : "author 3" , d : new Date(2018, 1, 3) },
         { id: 3, body : "comment 4" , author : "author 3" , d : new Date(2018, 1, 3) }
      ],
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
   {
      id: 2,
      name:'Vadonut',
      image: 'assets/images/vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      comments :
      [
         { id: 4, body : "comment 5" , author : "author 4" , d : new Date(2018, 2, 12) }
      ],
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
   {
      id: 3,
      name:'ElaiCheese Cake',
      image: 'assets/images/elaicheesecake.png',
      category: 'dessert',
      label:'',
      price:'2.99',
      comments :
      [
         { id: 5, body : "comment 6" , author : "author 6" , d : new Date(2018, 5, 12) },
         { id: 6, body : "comment 7" , author : "author 6" , d : new Date(2018, 6, 23) },
         { id: 7, body : "comment 8" , author : "author 6" , d : new Date(2018, 6, 23) }
      ],
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
   ];