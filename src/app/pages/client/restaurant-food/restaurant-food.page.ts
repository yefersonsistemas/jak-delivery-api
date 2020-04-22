import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';

// const path = 'http://192.168.0.87/proyecto-a-api/public/api/';

@Component({
  selector: 'app-restaurant-food',
  templateUrl: './restaurant-food.page.html',
  styleUrls: ['./restaurant-food.page.scss'],
})
export class RestaurantFoodPage implements OnInit {

  textSearch = '';
  path = 'http://192.168.0.87/proyecto-a-api/storage/app/public/';
  foodArabian: any[] = [];
  foodBakery: any[] = [];
  foodBurguer: any[] = [];
  foodChicken: any[] = [];
  foodChinese: any[] = [];
  foodIndian: any[] = [];
  foodItalian: any[] = [];
  foodJapanese: any[] = [];
  foodKorean: any[] = [];
  foodLunch: any[] = [];
  foodMexican: any[] = [];
  foodPizza: any[] = [];
  foodSalad: any[] = [];
  foodTradicional: any[] = [];
  foodVegan: any[] = [];
  foodVegetarian: any[] = [];

  delicatesse: any[] = [];
  drinks: any[] = [];
  extras: any[] = [];
  fridge: any[] = [];
  fruit: any[] = [];
  greengrocer: any[] = [];
  liquor: any[] = [];
  victual: any[] = [];

  type: any;
  id: any;
  
  constructor(private acroute: ActivatedRoute, private food: FoodService, private router: Router) {
  }

  ngOnInit() {
    this.acroute.params.subscribe(params => {
      // console.log(params);
      this.id = params.id;
    });
    this.food.getFood(this.id).subscribe((resp: any) => {
      // console.log(resp);

      if (resp.arabian != null) { // Para asignar el array de cimida arabe a la variable foodArabian y leerla en las cartas
        this.foodArabian = resp.arabian;
        // console.log('comida arabe', this.foodArabian);
      }

      if (resp.bakery != null) {
        this.foodBakery = resp.bakery;
        // console.log('panaderia', this.foodBakery);
      }

      if (resp.burguer != null) {
        this.foodBurguer = resp.burguer;
        console.log('hamburguesas', this.foodBurguer);
      }

      if (resp.chicken != null) {
        this.foodChicken = resp.chicken;
        // console.log('pollo', this.foodChicken);
      }

      if (resp.chinese != null) {
        this.foodChinese = resp.chinese;
        // console.log('comida china', this.foodChinese);
      }

      if (resp.indian != null) {
        this.foodIndian = resp.indian;
        // console.log('comida india', this.foodIndian);
      }

      if (resp.italian != null) {
        this.foodItalian = resp.italian;
        // console.log('comida italiana', this.foodItalian);
      }

      if (resp.japanese != null) {
        this.foodJapanese = resp.japanese;
        // console.log('comida japonesa', this.foodJapanese);
      }

      if (resp.korean != null) {
        this.foodKorean = resp.korean;
        // console.log('comida koreana', this.foodKorean);
      }

      if (resp.lunch != null) {
        this.foodLunch = resp.lunch;
        // console.log('Lunch', this.foodLunch);
      }

      if (resp.mexican != null) {
        this.foodMexican = resp.mexican;
        // console.log('comida mexicana', this.foodMexican);
      }

      if (resp.pizza != null) {
        this.foodPizza = resp.pizza;
        // console.log('pizzas', this.foodPizza);
      }

      if (resp.salad != null) {
        this.foodSalad = resp.salad;
        // console.log('ensaladas', this.foodSalad);
      }

      if (resp.traditional != null) {
        this.food = resp.traditional;
        // console.log('comida tradicional', this.food);
      }

      if (resp.vegetariana != null) {
        this.foodVegetarian = resp.vegetariana;
        // console.log('comida vegetariana', this.foodVegetarian);
      }

      if (resp.vegan != null) {
        this.foodVegan = resp.vegan;
        // console.log('comida vegana', this.foodVegan);
      }

      if (resp.delicatesse != null) {
        this.delicatesse = resp.delicatesse;
        // console.log('delicatesse', this.delicatesse);
      }

      if (resp.drink != null) {
        this.drinks = resp.drink;
        // console.log('bebidas no alcoholicas', this.drinks);
      }

      if (resp.extra != null) {
        this.extras = resp.extra;
        // console.log('extras', this.extras);
      }

      if (resp.fridge != null) {
        this.fridge = resp.fridge;
        // console.log('charcuteria', this.fridge);
      }

      if (resp.fruit != null) {
        this.fruit = resp.fruit;
        // console.log('fruteria', this.fruit);
      }

      if (resp.greengrocer != null) {
        this.greengrocer = resp.greengrocer;
        // console.log('vegetales', this.greengrocer);
      }

      if (resp.liquor != null) {
        this.liquor = resp.liquor;
        // console.log('Licor', this.liquor);
      }

      if (resp.victual != null) {
        this.victual = resp.victual;
        // console.log('viveres', this.victual);
      }
    });
  }

  search( event ) {
    this.textSearch = event.detail.value;
    console.log(this.textSearch);
  }

  arabianOrder(id: string, type: any, providerid: string) {
    type = 'arabian';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  bakeryOrder(id: string, type: any, providerid: string) {
    type = 'bakery';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  burguerOrder(id: string, type: any, providerid: string) {
    type = 'burguer';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  chickenOrder(id: string, type: any, providerid: string) {
    type = 'chicken';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  chineseOrder(id: string, type: any, providerid: string) {
    type = 'chinese';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  indianOrder(id: string, type: any, providerid: string) {
    type = 'indian';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  italianOrder(id: string, type: any, providerid: string) {
    type = 'italian';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  japaneseOrder(id: string, type: any, providerid: string) {
    type = 'japanese';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  koreanOrder(id: string, type: any, providerid: string) {
    type = 'korean';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  lunchOrder(id: string, type: any, providerid: string) {
    type = 'lunch';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  mexicanOrder(id: string, type: any, providerid: string) {
    type = 'mexican';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  pizzaOrder(id: string, type: any, providerid: string) {
    type = 'pizza';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  saladOrder(id: string, type: any, providerid: string) {
    type = 'salad';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  traditionalOrder(id: string, type: any, providerid: string) {
    type = 'traditional';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  veganOrder(id: string, type: any, providerid: string) {
    type = 'vegan';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  vegetarianOrder(id: string, type: any, providerid: string) {
    type = 'vegetarian';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  delicatesseOrder(id: string, type: any, providerid: string) {
    type = 'delicatesse';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  drinkOrder(id: string, type: any, providerid: string) {
    type = 'drink';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  extrasOrder(id: string, type: any, providerid: string) {
    type = 'extra';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }
  fridgeOrder(id: string, type: any, providerid: string) {
    type = 'fridge';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  fruitOrder(id: string, type: any, providerid: string) {
    type = 'fruit';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  greengrocerOrder(id: string, type: any, providerid: string) {
    type = 'greengrocer';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  liquorOrder(id: string, type: any, providerid: string) {
    type = 'liquor';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }

  victualOrder(id: string, type: any, providerid: string) {
    type = 'victual';
    providerid = this.id;
    this.router.navigate(['/create-order', id, type, providerid]);
  }
}
