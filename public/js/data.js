/**
 * Created by dushuyang on 09/01/2018.
 */

var drinks = [
    {
        name:0,
        ingredient:0,
        priceS:0,
        priceM:0,
        priceL:0,
        image: '0'
    },
    {
        "name":'Pineapple juice',
        ingredient:[2,19,9,10],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/juice_1.png'
    },
    {
        name:'Tomato juice',
        ingredient:[53,5,12,8],
        priceS:25,
        priceM:35,
        priceL:45,
        image: './img/juice_2.png'
    },
    {
        name:'Green juice',
        ingredient:[1,48,51,43],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/juice_3.png'
    },
    {
        name:'Grand juice',
        ingredient:[2,19,9,10],
        priceS:25,
        priceM:35,
        priceL:40,
        image: './img/juice_7.png'
    },
    {
        name:'Papaya juice',
        ingredient:[18,19,24,8],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/juice_8.png'
    },
    {
        name:'Healthy juice',
        ingredient:[25,28,55,48],
        priceS:20,
        priceM:30,
        priceL:40,
        image: './img/juice_9.png'
    },
    {
        name:'Orange juice',
        ingredient:[3,19,4,10],
        priceS:25,
        priceM:35,
        priceL:40,
        image: './img/juice_4.png'
    },
    {
        name:'Apple juice',
        ingredient:[17,19,9,8],
        priceS:32,
        priceM:42,
        priceL:52,
        image: './img/juice_5.png'
    },
    {
        name:'Carrot juice',
        ingredient:[12,17,8,13],
        priceS:24,
        priceM:34,
        priceL:44,
        image: './img/juice_6.png'
    },
    {
        name:'Berry juice',
        ingredient:[21,22,23,8],
        priceS:34,
        priceM:44,
        priceL:50,
        image: './img/juice_10.png'
    },
    {
        name:'Citrus juice',
        ingredient:[2,1,4,17],
        priceS:20,
        priceM:30,
        priceL:40,
        image: './img/juice_11.png'
    },
    {
        name:'Red juice',
        ingredient:[22,23,28,20],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/juice_12.png'
    },
    {
        name:'Berry Smoothie',
        ingredient:[21,22,23,8],
        priceS:34,
        priceM:44,
        priceL:50,
        image: './img/s_1.png'
    },
    {
        name:'Mango Smoothie',
        ingredient:[26,34,23,36],
        priceS:25,
        priceM:35,
        priceL:45,
        image: './img/s_2.png'
    },
    {
        name:'Green Smoothie',
        ingredient:[31,28,17,19],
        priceS:35,
        priceM:45,
        priceL:50,
        image: './img/s_3.png'
    },
    {
        name:'Nektar Smoothie',
        ingredient:[1,48,51,43],
        priceS:25,
        priceM:35,
        priceL:40,
        image: './img/s_7.png'
    },
    {
        name:'Purple Smoothie',
        ingredient:[30,23,22,33],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/s_8.png'
    },
    {
        name:'Health Smoothie',
        ingredient:[33,29,38,55],
        priceS:20,
        priceM:30,
        priceL:40,
        image: './img/s_9.png'
    },
    {
        name:'Classic Smoothie',
        ingredient:[59,23,21,1],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/s_4.png'
    },
    {
        name:'Fresh Smoothie',
        ingredient:[17,19,33,8],
        priceS:32,
        priceM:42,
        priceL:52,
        image: './img/s_5.png'
    },
    {
        name:'Passion Smoothie',
        ingredient:[20,10,51,13],
        priceS:24,
        priceM:34,
        priceL:44,
        image: './img/s_6.png'
    },
    {
        name:'Citrus Smoothie',
        ingredient:[1,2,4,34],
        priceS:34,
        priceM:44,
        priceL:50,
        image: './img/s_10.png'
    },
    {
        name:'Thirsty Smoothie',
        ingredient:[48,1,50,17],
        priceS:20,
        priceM:30,
        priceL:40,
        image: './img/s_11.png'
    },
    {
        name:'Melon Smoothie',
        ingredient:[22,23,28,20],
        priceS:30,
        priceM:40,
        priceL:50,
        image: './img/s_12.png'
    }
];

var ingredients = [
    'none',
    'banana',
    'lemon',
    'lime',
    'orange',
    'coffee',
    'vanilla ice cream',
    'soda water',
    'water',
    'ice',
    'guava',
    'kale',
    'carrot',
    'ginger',
    'chili',
    'cinnamon',
    'cocoa',
    'apple',
    'pear',
    'pineapple',
    'prune',
    'blueberry',
    'raspberry',
    'strawberry',
    'pumpkin',
    'celery',
    'mango',
    'grapefruit',
    'grape',
    'spinach',
    'beet',
    'milk',
    'soy milk',
    'oat milk',
    'coconut milk',
    'almond milk',
    'coconut',
    'mint leaves',
    'chia seeds',
    'cashew nuts',
    'walnut',
    'almond',
    'hazelnut',
    'broccoli',
    'cauliflower',
    'honey',
    'sugar',
    'peanut butter',
    'kiwi',
    'raisins',
    'dates',
    'avocado',
    'flax seeds',
    'tomato',
    'cottage cheese',
    'spirulina',
    'tabasco',
    'whey protein powder',
    'vegan protein powder',
    'yoghurt',
    'egg',
];

if(!temp)
    var temp;