'use strict'

const {db, OrderDetail} = require('../server/db')
const User = require('../server/db/models/user')
const Product = require('../server/db/models/product')
const Category = require('../server/db/models/category')
const Order = require('../server/db/models/order')
const Faker = require('faker')
//const adminPasswords = require('../secrets.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //CATEGORY MODEL
  await Category.bulkCreate([
    {
      name: 'Food',
      imageUrl: 'https://container-ph-vd.s3.amazonaws.com/donut.jpg'
    },
    {
      name: 'Fauna',
      imageUrl:
        'https://wallup.net/wp-content/uploads/2016/01/166113-colorful-black_background-animals-artwork-digital_art-lion-748x561.jpg'
    },
    {
      name: 'Flora',
      imageUrl: 'https://i.redd.it/679mcpkita521.png'
    },
    {
      name: 'Movie-TV',
      imageUrl:
        'https://i.pinimg.com/originals/6a/03/11/6a03112f830ef03ac6d79e404a41d91e.jpg'
    },
    {
      name: 'Games',
      imageUrl:
        'https://c4.wallpaperflare.com/wallpaper/879/47/679/minimalism-abstract-colorful-digital-art-wallpaper-preview.jpg'
    },
    {
      name: 'Holidays',
      imageUrl:
        'https://i.pinimg.com/564x/db/fd/e5/dbfde5bae2eb9098da59fda88456dcb7.jpg'
    }
  ])

  //PRODUCT MODEL
  await Product.bulkCreate([
    {
      name: 'BUBBLE TEA',
      description:
        'A SWEET & MILKY ADDITION TO YOUR KEYBOARD. If you’re a frequent bubble tea drinker, chances are you may have spilled some on your keyboard. With these artisan keycaps you can give bubble tea a permanent home on your favorite board—without the sticky cleanup. Available in a wide range of colors to match your favorite flavor, the Cherry MX-compatible keycaps feature small black balls around the bottom half, just like the tapioca pearls in the delicious milky beverage. They’re made from hand-polished resin with colored glass beads. Try not to take a bite out of them!',
      price: 12.99,
      numOfSales: 5,
      quantity: 1,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/idea23-bubble-tea-artisan-keycap/361A8218_20170522104920.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/idea23-bubble-tea-artisan-keycap/361A8213_20170522104920.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/idea23-bubble-tea-artisan-keycap/361A8264_20170522104920.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 1
    },
    {
      name: 'SWEET',
      description:
        'THESE KEYCAPS TAKE THE CAKE. Transform your keyboard into a bona fide bake sale with these novelty keycaps, featuring different varieties of sweets atop a pink ABS plastic base. There are donuts, tarts, cupcakes, and slices of cake, all decked out in frosting, sprinkles, and whipped cream. As if that wasn’t sweet enough, on each base, you’ll also find a tiny fruit—like a citrus wedge, watermelon, or kiwi. Compatible with Cherry switches, these cute-as-can-be keycaps come in OEM profile.',
      price: 15.99,
      numOfSales: 5,
      quantity: 9,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/sweet-tooth-novelty-keycaps/page_20170927101913.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/sweet-tooth-novelty-keycaps/361A6178_20170927094149.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/sweet-tooth-novelty-keycaps/361A6238_20170927094152.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 1
    },
    {
      name: 'FRESH DRINK',
      description:
        'IF YOU LIKE COCKTAILS... And who doesn’t? Then you’ll love the Summer Drink artisan keycap from Cool Kit Studio. On tap in this run are six different cocktails, each poured over ice with a colorful straw and garnish. Made of durable and detailed resin, these artisans are a stiff pour. Every little glass of paradise is compatible with Cherry MX switches and clones.',
      price: 24.99,
      numOfSales: 5,
      quantity: 10,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/cool-kit-studio-summer-drink-artisan-keycap/FP/z6EbJ94eQfam3xiwkUWG_CB5A4649-copy.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/cool-kit-studio-summer-drink-artisan-keycap/FP/3uEH8Ps8SDC4MuBla2zS_CB5A4673-copy.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/cool-kit-studio-summer-drink-artisan-keycap/FP/prFYf1D0QpeBVdBa6h6L_CB5A4675-copy.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 1
    },
    {
      name: 'WAFFLE',
      description:
        'NO SHAME IN GETTING SECONDS. You never thought your keyboard could make you hungry, did you? Think again. New from Dwarf Factory, these scrumptious handmade keycaps capture the satisfaction that only a great meal can deliver. Available in five unique styles—from waffles topped with butter and maple syrup to sandwiches stacked high with all the fixings—these artisans are like something off the menu at your favorite diner. Choose your favorite meal, or get all five to create a feast on your favorite keyboard. All options are made from resin and available in an open design or with an OEM cover to jive with your existing keycap profile.',
      price: 30.55,
      numOfSales: 5,
      quantity: '6',
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/dwarf-factory-waffle-artisan-keycap/FP/dMFifXTrTByR9UaNPrtW_2019-12-04%20Drop-%20Foods%20Not%20cover-%20view3-4%20(4).jpg?auto=format&fm=jpg&fit=crop&w=512&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/dwarf-factory-waffle-artisan-keycap/FP/7HmYlfhERzqnZPxfhbTS_2019-12-04%20Drop-%20Foods%20Not%20cover-%20Keyboard%20(4).jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/dwarf-factory-foodie-artisan-keycap/FP/QBSX2IuEQiKtZfJsKyxT_concept2.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 1
    },
    {
      name: 'SUSHI',
      description:
        'Compatible with Cherry MX switches and related clones, this keycap is here to remind you of taking your lunch break and maybe ordering from your favorite Japanese restaurant.',
      price: 27.99,
      quantity: 2,
      imageUrl: [
        'https://container-ph-vd.s3.amazonaws.com/salmon.jpg',
        'https://container-ph-vd.s3.amazonaws.com/sushi.jpg',
        'https://www.picclickimg.com/d/w1600/pict/352897547977_/Salmon-Sushi-Keycap-Series-Handmade-Resin-Custom-Artisan.jpg'
      ],
      categoryId: 1
    },
    {
      name: 'DOGGIES',
      description:
        'Sled dogs have been used in the Arctic for at least 9,000 years and were important for transportation in Arctic areas until the introduction of semi-trailer trucks, snowmobiles and airplanes in the 20th century, hauling supplies in areas that were inaccessible by other methods. They were used with varying success in the explorations of both poles, as well as during the Alaskan gold rush.',
      price: 11.65,
      numOfSales: 5,
      quantity: 9,
      imageUrl: [
        'https://c1.neweggimages.com/ProductImage/A6DHD200710U0GNM.jpg',
        'https://i.etsystatic.com/21832684/r/il/7a526c/2176083442/il_794xN.2176083442_97dg.jpg',
        'https://i.etsystatic.com/21832684/r/il/943db0/2176083472/il_794xN.2176083472_myca.jpg'
      ],
      categoryId: 2
    },
    {
      name: 'TOAD',
      description:
        'A POISON DART FROG YOU CAN TOUCH. Poison dart frogs may be beautiful—but in the wild, the number one rule for these colorful amphibians is: look, don’t touch. On your keyboard, it’s a different story. New from Moon Key, the Luxury Poison Dart Frog artisan keycap is an opulent take on nature’s most dazzling hopper. If you thought dart frogs couldn’t get any more stunning, think again. This one is covered in studded gems and stands atop a metallic tree branch. Handmade and available in five different colorways, this artisan keycap is compatible with Cherry MX switches and clones.',
      price: 10.5,
      numOfSales: 5,
      quantity: 15,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/moon-key-luxury-poison-dart-frog-metal-artisan-keycap/FP/pAhbesneTbqLeIPFdrmN_2TiO24Y.jpeg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/moon-key-luxury-poison-dart-frog-metal-artisan-keycap/FP/MioTedy3TyChs84aotLY_7MC8o3n.jpeg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/moon-key-luxury-poison-dart-frog-metal-artisan-keycap/FP/V84FX38ESSayQ3pam59i_boMudmF.jpeg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 2
    },
    {
      name: 'OWL',
      description:
        'This keycap features a mama owl seemingly attempting to peck her way out from her resin prison! There are two white eggs and a single brown egg hidden in her nest. When will they hatch we wonder? Handcrafted by clay and resin; Compatible with Cherry MX switches; The price is just for 1 resin keycap (the keyboard is NOT included)Note: Every keycap is handmade and they do not have traditional profiles. Please refer closely to the pictures!',
      price: 9.99,
      numOfSales: 5,
      quantity: 4,
      imageUrl: [
        'https://i.etsystatic.com/23097501/r/il/41b7eb/2521216228/il_1588xN.2521216228_eh06.jpg',
        'https://i.etsystatic.com/23097501/r/il/104f6b/2568877431/il_794xN.2568877431_pm9k.jpg',
        'https://i.etsystatic.com/23097501/r/il/bc6bbe/2568883627/il_794xN.2568883627_am5u.jpg'
      ],
      categoryId: 2
    },
    {
      name: 'PIGGY',
      description:
        'CLICKITY CLANK ON YOUR CLICKITY CLACK. You may never find a better opportunity to break out your leftover change. These chunky little ham hocks look just like a piggy bank—only now you can keep them on your favorite keyboard instead of your nightstand. They come in six colors, whether you want to go with a classic pink or blue, or you want to switch it up and try yellow, green, orange, or purple. Handmade from resin, the piggies have a surprised expression and big black eyes. Pop them onto your Cherry MX–compatible keyboard.',
      price: 21.99,
      numOfSales: 5,
      quantity: 15,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/landcaps-piggy-bank-artisan-keycap/FP/DXFWn7AhTt8esZhFJUv0_1500x1000_MEC_Landcaps_Piggy_Bank_Artisan_Keycap_MD-81534-TH0411-checkout5%201.jpg?auto=format&fm=jpg&fit=crop&w=512&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/landcaps-piggy-bank-artisan-keycap/FP/XieIbqPdSt2anOFLq59m_1500x1000_MEC_Landcaps_Piggy_Bank_Artisan_Keycap_MD-81534-TH0356%201.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/landcaps-piggy-bank-artisan-keycap/FP/guTxMXJ9Rt27fmadP4LJ_1500x1000_MEC_Landcaps_Piggy_Bank_Artisan_Keycap_MD-81534-TH0334%201.jpg?auto=format&fm=jpg&fit=crop&w=318.3333333333333&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 2
    },
    {
      name: 'LUCKY',
      description:
        'LUCK BE A KITTY. Everybody could use a little luck. Known in Japan as Maneki Neko, the lucky cat is a symbol of good fortune and good blessings. Recreated in detailed fashion here, these keycaps are a great omen for anyone down on their luck. Handmade from resin, the caps are compatible with Cherry MX switches and clones. Put one on your escape key and let it cast good fortune over your entire board. Because the keycap is entirely made by hand, make sure to delicately remove the Lucky Cat with a keycap puller to prevent any unwanted damage.',
      price: 8.74,
      numOfSales: 5,
      quantity: 4,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/uniquekeycaps-lucky-cat-artisan-keycap/FP/Rbqdzqo0RBm0FzcPigmG_2668.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/uniquekeycaps-lucky-cat-artisan-keycap/FP/DAdopN4JSnusiX4xsWTS_5.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/uniquekeycaps-lucky-cat-artisan-keycap/FP/8quf65iQSR6DqD7wErRL_3.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 2
    },
    {
      name: 'ROSETTE',
      description:
        'Handmade roses to make your keyboard look like a tiny garden.',
      price: 17.25,
      numOfSales: 5,
      quantity: 1,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/eye-key-rose-artisan-keycap/FP/LfTTpnOSnWiYCWTLntzd_1500x1000_MEC_The_Eye_Key_Rose_Artisan_Keycap_MD-81129-TH-95.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/waffle-key-rosette-artisan-keycap/AI7B8772_copy_20170613121518.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/waffle-key-rosette-artisan-keycap/AI7B8833_copy_20170613121450.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 3
    },
    {
      name: 'ROSE',
      description:
        'ROSES: A KEYBOARD’S BEST FRIEND. Add a classy touch to your favorite keyboard with these dignified Eye Key Rose artisan keycaps. This run, the keycaps are even better than before. They feature brand-new colorways with smoother edges. Like last run, they come in your choice of SA or OEM profile. Each keycap is made from clay and resin and depicts a beautiful rose suspended in a storm of color. The exterior has a glassy, transparent look that complements the white base. Compatible with Cherry MX switches, the caps come in a wooden box if you want to gift one to a friend.',
      price: 13.22,
      numOfSales: 5,
      quantity: 13,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/the-eye-key-rose-v2-artisan-keycap/FP/xCvsy8ySSRSsOnOQxvIm_1304.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/the-eye-key-rose-v2-artisan-keycap/FP/K29wHZRrRDHUH7MAhsyg_1321.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/the-eye-key-rose-v2-artisan-keycap/FP/a9oQhsKgSMaomlf8AXQE_1317.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 3
    },
    {
      name: 'TERRARIUM',
      description:
        'TYPE ATOP A TINY GARDEN. Bringing the beauty of a carefully cultivated plantscape to your keyboard, Dwarf Factory has created the lush Terrarium artisan keycap. Handmade with attention to detail Mother Nature herself would be proud of, each keycap features a collection of colorful plants inside a decorative basket encased in transparent resin. Skip the watering and enjoy six different styles, each sporting succulents, cacti, and flora of different shapes, sizes, and colors. Look closely and you’ll even see small rocks and soil within each keycap. Available in both DOM and SA R1 profiles, these artisan keycaps are compatible with Cherry MX switches and clones.',
      price: 15.35,
      numOfSales: 5,
      quantity: 10,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/dwarf-factory-terrarium-resin-artisan-keycap/FP/tn1LkIVShOVuHYgjHbcf_1.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/dwarf-factory-terrarium-resin-artisan-keycap/FP/DUgcpkamRRaMEVmI1DcU_Dwarf-%20keyboard12.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/dwarf-factory-terrarium-resin-artisan-keycap/FP/Apvkv9gwRyrXDjFh09hw_1.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 3
    },
    {
      name: 'SAKURA',
      description:
        "Take your mechanical keyboard to Hanamura with this handcrafted cherry blossom keycap! This is a single key (1x) profiled for the Esc, Function, or number row. Each key is individually tested to function well on an original Cherry MX switch with an RGB LED. They should also function on exact clones like Gaterons, Kailh Speeds, Outemus, Zealios, Halos, Holy Pandas, etc. These keycaps will not fit on other switch types like ALPS, Matias, Topre, Razer Opto-mechanical (Huntsman), or Logitech Romer-G switches. SteelSeries Apex keyboards are incompatible due to unusually-shaped LEDs. Stems are calibrated to fit snug on a particularly narrow Cherry MX clone stem, or tightly on an original Cherry MX. These will likely take a little more force to mount than your stock keycaps--that's normal for artisan caps.",
      price: 5.55,
      numOfSales: 5,
      quantity: 3,
      imageUrl: [
        'https://i.etsystatic.com/20356291/r/il/d1e50b/2273980567/il_1588xN.2273980567_6mq1.jpg',
        'https://i.etsystatic.com/20356291/r/il/27c672/2226393122/il_794xN.2226393122_tsu1.jpg',
        'https://i.etsystatic.com/20356291/r/il/7b5b8d/2273980767/il_794xN.2273980767_e8cc.jpg'
      ],
      categoryId: 3
    },
    {
      name: 'RIVER',
      description:
        'Handmade by peerless keycap artists at The Eye Key, the Immortal River Artisan Keycap is more than a styled keycap. It’s an entire landscape. Adorn your key with the Immortal River and its shores meticulously crafted with colored clay and set inside a transparent resin casing. Durable and brilliant, this landscape will stay undisturbed through years of keystrokes. Compatible with Cherry MX switches and clones, the Immortal River Artisan Keycap  can be added to any setup with ease. It’s available in both SA and OEM profiles, each with seven color options to choose from. Find the ideal river landscape and bring a flourish of unique detail to your keys.',
      price: 9.5,
      numOfSales: 5,
      quantity: 12,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/immortal-river/FP/Yj5adoHyTgugNjkevSUP_The%20Eye%20Key%20Immortal%20River%20Artisan%20Keycap7948.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/immortal-river/FP/6Nr1PpSwKfnvFStewADQ_The%20Eye%20Key%20Immortal%20River%20Artisan%20Keycap7946.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/immortal-river/FP/wtIsvhtfR8yZkC8xSKjx_Tai-Hao%2022-Key%20Rubber%20Backlit%20Gami2196ng%20KeycapSet_MD-88781-7508_.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35'
      ],
      categoryId: 3
    },
    {
      name: 'MEGATRON',
      description:
        'Transform your keyboard with these MEGATRQN keycaps. 3D-printed by XX7, and voted on by 600 members of the Mech Keys Community, they’re made of nylon plastic and finished by hand. Each key-size bust is highly textured, not only with the curves and contours of the robot’s face but also with the sandpapery grain of the plastic itself',
      price: 8.77,
      numOfSales: 5,
      quantity: 11,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/xx7-megaqon-artisan-keycaps/MD-13107_20151119104940_d1d0ec5dfe8ea44d.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/xx7-megaqon-artisan-keycaps/MD-13107_20151119104936_ef9caadac59f1a2d.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/xx7-megaqon-artisan-keycaps/MD-13107_20151119104936_59927fc37d9d5819.jpg?auto=format&fm=jpg&fit=fill&w=120&h=80&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 4
    },
    {
      name: 'GRAVITY',
      description:
        'New from Keycraft, the minds behind the Magic Book artisan, the Spaceship artisan transports us to a faraway universe where aliens roam and aircraft fly. Like some kind of airborne manta ray, the Spaceship has long, triangular wings highlighted with vivid accent colors. It hovers above a launchpad, as if ready to take off and start a new mission. Sculpted in SA profile and made of resin, this out-of-this-world keycap is compatible with Cherry MX switches and clones. It’s also offered in five different colorways—or you can grab all five for a discount at checkout.',
      price: 4.99,
      numOfSales: 5,
      quantity: 2,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/keycraft-spaceship-artisan-keycap/FP/nZDBjYwgQPuYrg7qEOyK_Arden.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/keycraft-spaceship-artisan-keycap/FP/ovM7ZQbsTjyPuE9tIvxd_02-2.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/keycraft-spaceship-artisan-keycap/FP/SnNUMi3PTVsG9U4VoMmm_10-2.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35'
      ],
      categoryId: 4
    },
    {
      name: 'JOKER',
      description:
        "Atop your keyboard, one of the most iconic villains of all times lies in wait. One of the most iconic characters in popular culture, the Joker has been listed among the greatest comic book villains and fictional characters ever created. His popularity has seen him appear on a variety of merchandise, such as clothing and collectible items, inspire real-world structures (such as theme park attractions), and be referenced in a number of media. The Joker has been adapted to serve as Batman's adversary in live-action, animated, and video game incarnations.",
      price: 18.99,
      numOfSales: 5,
      quantity: 2,
      imageUrl: [
        'https://i.etsystatic.com/22749112/r/il/1ee9ac/2568057990/il_1588xN.2568057990_ocx3.jpg',
        'https://i.etsystatic.com/22749112/r/il/c72050/2568057110/il_794xN.2568057110_gvyx.jpg',
        'https://i.etsystatic.com/22749112/r/il/ecb50f/2606900658/il_794xN.2606900658_70v0.jpg'
      ],
      categoryId: 4
    },
    {
      name: 'BB8',
      description:
        "This keycap is only for mechanical keyboards with switches such as Cherry MX, Gateron, Kailh, etc. BB-8 is a spherical robot with a free-moving domed head. It is white, with orange and silver accents and a black optical lens on its headpiece. BB-8 also possesses multiple panels containing various tools or ports. Scanlan said of the robot's personality - We always imagined BB-8 as being quite manipulative. I think he knows he’s cute. He knows that he can win people over. And he uses that, like children do, to get his own way. In this film, he has a very important mission that he has to accomplish and so he uses his personality, his coyness, and all of those things.",
      price: 14.99,
      numOfSales: 5,
      quantity: 6,
      imageUrl: [
        'https://i.etsystatic.com/23361137/r/il/835900/2322982434/il_1588xN.2322982434_pcqt.jpg',
        'https://i.etsystatic.com/23361137/r/il/f3e336/2322982690/il_794xN.2322982690_ne7x.jpg',
        'https://i.etsystatic.com/23361137/r/il/db3274/2370569009/il_794xN.2370569009_nvf6.jpg'
      ],
      categoryId: 4
    },
    {
      name: 'STARWARS',
      description:
        "Celebrate the fallen lord with this three-dimensional keycap. It depicts his helmet as it burns in the pyre, which will be cause for celebration for those who embrace good over evil. And for those who don’t, well, consider this keycap a piece to commemorate fear. This version, brought to you by WoB, depicts the leader in five new bright-neon colors. Made from resin, they're compatible with Cherry MX switches and clones and super bright when paired with backlit boards.",
      price: 32.3,
      numOfSales: 5,
      quantity: 18,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/dark-lord-helmet-artisan-keycap/th60tdGTRuWniYGrZHZH_2.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/dark-lord-helmet-artisan-keycap/S3gbLLIXRymByYgRs1cj_banner%20p.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/dark-lord-helmet-artisan-keycap/2J2Ufy0cSr2tJQqxGjS9_pc.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35'
      ],
      categoryId: 4
    },
    {
      name: 'HANDHELD',
      description:
        'STEP YOUR GAME UP. Take a trip back to simpler times, when your biggest source of stress was saving Princess Peach, or defeating the final trainer of the Elite Four. From M.7, the Handheld Gaming Aluminum Artisan Keycap looks just like the portable machine that took over many of our lives for years. Complete with two buttons, a directional pad, and a shine-through screen with a digital heart, this cap brings back all the nostalgia of the late ‘90s. Just like the device it’s based on, the keycap comes in a wide range of colors. Get one to match your favorite Cherry MX–compatible keyboard.',
      price: 30.25,
      numOfSales: 5,
      quantity: 3,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/m-7-handheld-gaming-aluminum-artisan-keycap/FP/JGO1M8DmQvmRKTBFhJK7_1500x1000_MD-93074_20.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/m-7-handheld-gaming-aluminum-artisan-keycap/FP/r8TfkoGQ8GUdyyL9BEu6_1500x1000_MD-93074_13.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/img_thread/1601490281849.329948484984776800440104-IMG0677.jpg?auto=format&fm=jpg&fit=crop&w=420&h=420&dpr=1&q=70'
      ],
      categoryId: 5
    },
    {
      name: 'RETRO',
      description:
        'DRAW YOUR OWN LINES. From M.7, creator of the Spinning Core and Infinity Gems artisans, comes the Tetris artisan keycap. Whether you want to relive the classic game on a retro keyboard, or pair it with something more modern, the keycap comes in a wide variety of colors and styles for you to do so. The first option is the retro TV, which has a big play button on the screen and multicolored dials for tuning the channel. Next is the Tetris keycap, with all five classic Tetris shapes cascading down at once. Each resin keycap is compatible with Cherry MX switches and clones.',
      price: 10.99,
      numOfSales: 5,
      quantity: 20,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/m-7-retro-artisan-keycap/FP/osyDU1C0SW4eJ26bANWA_AI7B0471.jpg?auto=format&fm=jpg&fit=crop&w=512&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/m-7-retro-artisan-keycap/FP/Zc63REk1T82BT881DNM0_AI7B0562-copy.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/img_thread/1604029105317.381345064428921872655882-20201030123730.jpg?auto=format&fm=jpg&fit=crop&w=420&h=420&dpr=1&q=70'
      ],
      categoryId: 5
    },
    {
      name: 'PROCESSOR',
      description:
        'PUT YOUR KEYBOARD INTO OVERDRIVE. From the same folks behind the Prism and Monitor Screen artisan keycaps, the Gen.S Processor artisan also takes inspiration from the world of computers. Styled like a microchip full of precious connections, it looks like something you’d find on a motherboard. The resin used to make it is fully translucent, which means backlit keyboards will take this keycap to whole new heights. Get the Processor in your choice of five styles, all compatible with Cherry MX switches.',
      price: 21.78,
      numOfSales: 5,
      quantity: 7,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/gen-s-processor-resin-artisan-keycap/FP/mrotNMnITxqb69trUbJI_1691-copy.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/gen-s-processor-resin-artisan-keycap/FP/clHNwM4Q0a0wIWsyNwis_1685-copy.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/gen-s-processor-resin-artisan-keycap/FP/70iWlOoMRaGp0uLGvD1l_1718-copy.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 5
    },
    {
      name: 'GAMEPAD',
      description:
        'GIVE YOUR BOARD SOME VINTAGE VIDEO-GAME CRED. You may have graduated from the console to the computer, but there’s no denying the feel-good nostalgia of a handheld controller. Bringing back beloved memories without compromising your current keyboard, the Gamepad artisan keycap from Holyoops is one throwback button you’ll love to press. CNC’d from aluminum and hand-painted with stunning detail, this keycap looks just like the console controllers of yesteryear. Each colored button is shine-through and made from silica gel for an authentic glow and feel. Available in four styles, the Gamepad artisan keycap measures 1.75 units to fit the CapsLock key or other same-sized spaces on your board.',
      price: 21.65,
      numOfSales: 5,
      quantity: 5,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/holyoops-aluminum-gamepad-artisan-keycap/FP/JygCNc6kQby1bYTGWBdb_CB5A0361-pc.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/holyoops-aluminum-gamepad-artisan-keycap/FP/Bu5AK0gvQXq34kmqj0QG_CB5A0376.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/holyoops-aluminum-gamepad-artisan-keycap/FP/QOUlT2lsRHWXJpb7EFJM_CB5A0416.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 5
    },
    {
      name: 'MARIO',
      description:
        'Give your keyboard a super boost with this fun Cherry MX-compatible artisan. Made from  aluminum, the keycap features a pile of bricks with a cap on top in your choice of four colors—which may remind you of a certain cart-driving, party-loving, brawl-seeking brother with a mustache. The hat on top actually spins when you flick it, like your giving the keycap extra life. Hit the bricks and who knows, you might just find some treasure inside.',
      price: 16.99,
      numOfSales: 5,
      quantity: 20,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/zomo-aluminum-brick-spinning-hat-artisan-keycap/FP/XaJFnFuNSxy7lC4qwFSZ_AI7B6253-copy-pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/zomo-aluminum-brick-spinning-hat-artisan-keycap/FP/C48VkZ0ZRZGWmU7lfRr0_AI7B6280-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35',
        'https://massdrop-s3.imgix.net/product-images/zomo-aluminum-brick-spinning-hat-artisan-keycap/FP/WRfBALPQaXeZMgyFNmQw_AI7B6247-copy-checkoutgreen.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&q=35'
      ],
      categoryId: 5
    },
    {
      name: 'CELEBRATE',
      description:
        'YOUR KEYBOARD NEEDS A PRESENT, TOO. Nothing says Merry Christmas quite like a festive holiday keycap. New from the makers at MEMEDA, these Merry Christmas artisan keycaps are sure to put you in the right spirit. There are three fun options to choose from, each inside a frosty snowglobe: a reindeer with a sleigh full of presents, Santa Claus seated next to a decorated tree, and a snowman posted outside a log cabin. Made from resin, these jolly caps are compatible with Cherry MX switches and clones.',
      price: 16.55,
      numOfSales: 5,
      quantity: 20,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/memeda-merry-christmas-artisan-keycaps/FP/teVKXxdNQ56410sp41yy_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/memeda-merry-christmas-artisan-keycaps/FP/kccGlohdQUWIF06GyucU_fixed1.jpg?auto=format&fm=jpg&fit=crop&w=512&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/memeda-merry-christmas-artisan-keycaps/FP/JYlnQaTpT2WleO1YNEMR_1500x1000_MD-92398_07.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 6
    },
    {
      name: 'JOLIE EASTER',
      description:
        'HAND-CASTED BUNNIES. You can decorate eggs, go to church, and make baskets, but to get the full Easter experience, your keyboard has to play the part too. That’s where Judy and Jolie, Frogkey’s resident Easter ambassadors, come in. Hand-casted from resin, these cute little bunnies come in two styles and three colors each. Judy is the big sister who carries one large crystal egg; Jolie is the younger sibling who takes care of a set of multicolored eggs. Scoop up your favorite and celebrate this sacred Sunday in style.',
      price: 11.25,
      numOfSales: 5,
      quantity: 3,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/frogkey-judy-and-lily-easter-hand-casted-artisan-keycap/FP/9u2FPMVS9mn20GIoZ43o_Taro%20Jolie.JPG?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/frogkey-judy-and-lily-easter-hand-casted-artisan-keycap/FP/9co1l66QYqgMk28yfCRy_Taro%20Judy.JPG?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/frogkey-judy-and-lily-easter-hand-casted-artisan-keycap/FP/KnaHKXGDQnCZhrza7fnJ_Jolie%20-%20Taro%20-%202.JPG?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 6
    },
    {
      name: 'SCARY',
      description:
        "YOUR KEYBOARD DESERVES A COSTUME TOO. If candy and costumes aren’t your jam, how about a spooky treat for your keyboard? Don’t leave your desktop companion out of the Halloween festivities. Deck it out in style with these detailed artisans from MEMEDA. Handmade from resin and compatible with Cherry MX switches and clones, these caps come in two styles. First is the pumpkin, a spooky take on a jack-o'-lantern with a vivid orange body and a deep green stem. Next is the skeleton, a menacing skull with a sinister smile and long tufts of hair poking out from the top of its cranium. Put one on your favorite board and we can’t promise your friends and coworkers won’t be intimidated.",
      price: 30.12,
      numOfSales: 5,
      quantity: 17,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/memeda-scary-night-artisan-keycap/FP/R8XcfELT9i35ZFDyAkN9_1290.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/memeda-scary-night-artisan-keycap/FP/UBLW38v2SDeAjjDnvFBs_1306.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/memeda-scary-night-artisan-keycap/FP/3IxDV6fQTy6HjestdlNH_EmptyName%2013.jpg?auto=format&fm=jpg&fit=crop&w=477.5&bg=f0f0f0&dpr=1&q=70'
      ],
      categoryId: 6
    },
    {
      name: 'PUMPKIN',
      description:
        'To celebrate the spookiest season of the year, ditch that standard escape keycap and plant a pumpkin right on your keyboard. Carved with a crooked grin that easily emits your board’s LED glow, the Backlit Pumpkin Keycap gives you all the joy of a jack-o-lantern with none of the messy clean-up.',
      price: 10.1,
      numOfSales: 5,
      quantity: 8,
      imageUrl: [
        'https://massdrop-s3.imgix.net/product-images/MD-4219_20141030095333_60e2143a49776598.jpg?auto=format&fm=jpg&fit=crop&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/product-images/MD-4219_20141030095346_2e8a1baf2b3b0f76.jpg?auto=format&fm=jpg&fit=crop&w=1080&bg=f0f0f0&dpr=1&q=70',
        'https://massdrop-s3.imgix.net/img_thread/1590456958902.878592774551026477915765-Bgg19mj.jpg?auto=format&fm=jpg&fit=crop&w=420&h=420&dpr=1&q=70'
      ],
      categoryId: 6
    },
    {
      name: 'MERRY XMAS',
      description:
        'To celebrate the great holiday, Goldenstar Keycap and zFrontier will bring back the festive Christmas-themed Grinch and Klaus Resin Artisan keycaps. Every keycap is handmade with care and utmost craftsmanship.',
      price: 14.55,
      numOfSales: 5,
      quantity: 5,
      imageUrl: [
        'https://cdn.shopify.com/s/files/1/1674/0405/files/Noel_Grinch_and_Klaus_1_2048x2048.jpg?v=1576922512',
        'https://cdn.shopify.com/s/files/1/1674/0405/files/Frozen_Grinch_and_Klaus_1_2048x2048.jpg?v=1576922538',
        'https://cdn.shopify.com/s/files/1/1674/0405/files/Carbonized_Grinch_and_Klaus_1_2048x2048.jpg?v=1576922681'
      ],
      categoryId: 6
    }
  ])

  //USER MODEL
  for (let i = 0; i < 5; i++) {
    await User.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email(),
      password: '1234567',
      imageUrl: Faker.image.avatar()
    })
  }

  const admins = [
    {
      firstName: 'Kade',
      lastName: 'Cahe',
      password: "1234567!",
      email: 'kadecahe@gmail.com',
      imageUrl: Faker.image.avatar(),
      isAdmin: true
    },
    {
      firstName: 'Virginie',
      lastName: 'Bonnet',
      password: "123456",
      email: 'vb@gmail.com',
      imageUrl: Faker.image.avatar(),
      isAdmin: true
    }
  ]

  await User.bulkCreate(admins)

  await Order.create({
    totalAmount: 25.99,
    isComplete: false,
    userId: 6
  })

  await OrderDetail.bulkCreate([
    {
      productQuantity: 1,
      productId: 1,
      orderId: 1
    },
    {
      productQuantity: 2,
      productId: 2,
      orderId: 1
    }
  ])

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
