import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { ProvidersService } from '../../../services/providers.service';
import { CartshoppingService } from '../../../services/cartshopping.service';

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
  infoProvider: any = {};

  type: any;
  id: any;

  constructor(
    private acroute: ActivatedRoute,
    private food: FoodService,
    private router: Router,
    private provider: ProvidersService,
    private shopping: CartshoppingService
  ) {}

  ngOnInit() {
    this.acroute.params.subscribe((params) => {
      // console.log(params);
      this.id = params.id;
    });
    this.food.getFood(this.id).subscribe((resp: any) => {
      // console.log(resp);

      if (resp.arabian != null) {
        // Para asignar el array de cimida arabe a la variable foodArabian y leerla en las cartas
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
        console.log('comida china', this.foodChinese);
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

    this.provider.getProviderCardInfo(this.id).subscribe(resp => {
      console.log(resp);
      this.infoProvider = resp;
    });
  }

  search(event) {
    this.textSearch = event.detail.value;
    console.log(this.textSearch);
  }

  arabianOrder() {
    this.router.navigate(['/create-order']);
  }

  bakeryOrder() {
    this.router.navigate(['/create-order']);
  }

  burguerOrder() {
    this.router.navigate(['/create-order']);
  }

  chickenOrder() {
    this.router.navigate(['/create-order']);
  }

  chineseOrder() {
    this.router.navigate(['/create-order']);this.router.navigate(['/create-order']);
  }

  indianOrder() {
    this.router.navigate(['/create-order']);
  }

  italianOrder() {
    this.router.navigate(['/create-order']);
  }

  japaneseOrder() {
this.router.navigate(['/create-order']);
  }

  koreanOrder() {
    this.router.navigate(['/create-order']);
  }

  lunchOrder() {
    this.router.navigate(['/create-order']);
  }

  mexicanOrder() {
    this.router.navigate(['/create-order']);
  }

  pizzaOrder() {
    this.router.navigate(['/create-order']);
  }

  saladOrder() {

  }

  traditionalOrder() {
    this.router.navigate(['/create-order']);
  }

  veganOrder() {
    this.router.navigate(['/create-order']);
  }

  vegetarianOrder() {
    this.router.navigate(['/create-order']);
  }

  delicatesseOrder() {
    this.router.navigate(['/create-order']);
  }

  drinkOrder() {
    this.router.navigate(['/create-order']);
  }

  extrasOrder() {
    this.router.navigate(['/create-order']);
  }
  fridgeOrder() {
    this.router.navigate(['/create-order']);
  }

  fruitOrder() {
    this.router.navigate(['/create-order']);
  }

  greengrocerOrder() {
    this.router.navigate(['/create-order']);
  }

  liquorOrder() {
    this.router.navigate(['/create-order']);
  }

  victualOrder() {
    this.router.navigate(['/create-order']);
  }
}
