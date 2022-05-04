import { navbar} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();
import {navbar_function} from "../components/navbar_function.js";
setTimeout(() => {
    navbar_function()
}, 1000);

let data=[
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/cardigans-zip-throughs/slim-fit-two-tone-ribbed-knit-zip-up-cardigan/30629810019663650",
   "Image18__image src": "https://www.theoutnet.com/variants/images/30629810019663650/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/30629810019663650/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit two-tone ribbed-knit zip-up cardigan",
   "PriceWithSchema9__wasPrice": "$1,543",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$462",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jeans/skinny-leg-jeans/slim-fit-studded-faded-denim-jeans/43769801095263657",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095263657/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095263657/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit studded faded denim jeans",
   "PriceWithSchema9__wasPrice": "$665",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$332",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino-garavani/sneakers/fashion-sneakers/suede-trimmed-painted-leather-sneakers/43769801095204399",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095204399/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095204399/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO GARAVANI",
   "ProductItem24__name": "Suede-trimmed painted leather sneakers",
   "PriceWithSchema9__wasPrice": "$749",
   "PriceWithSchema9__discount": "40% off",
   "PriceWithSchema9__value": "$449",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/wool-jacquard-jacket/43769801095418375",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095418375/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095418375/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Wool-jacquard jacket",
   "PriceWithSchema9__wasPrice": "$5,744",
   "PriceWithSchema9__discount": "45% off",
   "PriceWithSchema9__value": "$3,159",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/crew-neck-sweaters/intarsia-wool-and-cashmere-blend-sweater/1647597277408176",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277408176/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277408176/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Intarsia wool and cashmere-blend sweater",
   "PriceWithSchema9__wasPrice": "$749",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$224",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/studded-cotton-jersey-t-shirt/1647597278682574",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597278682574/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597278682574/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Studded cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$329",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$148",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/tapered-wool-and-mohair-blend-pants/1647597277678999",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277678999/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277678999/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered wool and mohair-blend pants",
   "PriceWithSchema9__wasPrice": "$461",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$160",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/scarves-ties/ties-pocket-squares/silk-twill-tie/43769801095393605",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095393605/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095393605/E/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Silk-twill tie",
   "PriceWithSchema9__wasPrice": "$144",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$72",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/blazers/reversible-studded-shell-blazer/1647597277936186",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277936186/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277936186/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Reversible studded shell blazer",
   "PriceWithSchema9__wasPrice": "$1,833",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$640",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/printed-french-cotton-blend-terry-sweatshirt/43769801095393606",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095393606/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095393606/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$539",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$242",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/casual-pants/tapered-cotton-blend-twill-pants/43769801095138991",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095138991/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095138991/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered cotton-blend twill pants",
   "PriceWithSchema9__wasPrice": "$569",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$284",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/crew-neck-sweaters/ribbed-striped-cashmere-sweater/1647597276596115",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276596115/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276596115/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Ribbed striped cashmere sweater",
   "PriceWithSchema9__wasPrice": "$1,042",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$418",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/pleated-stretch-cotton-poplin-pants/1647597277888940",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277888940/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277888940/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Pleated stretch-cotton poplin pants",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$497",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/blazers/embellished-checked-wool-blend-blazer/1647597276836368",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276836368/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276836368/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished checked wool-blend blazer",
   "PriceWithSchema9__wasPrice": "$3,079",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$924",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/crew-neck-sweaters/cashmere-sweater/1647597277384497",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277384497/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277384497/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Cashmere sweater",
   "PriceWithSchema9__wasPrice": "$1,126",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$338",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/silk-pants/1647597277384693",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277384693/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277384693/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Silk pants",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$958",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/crew-neck-sweaters/slim-fit-felt-paneled-cable-knit-wool-and-alpaca-blend-sweater/43769801095185660",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095185660/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095185660/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit felt-paneled cable-knit wool and alpaca-blend sweater",
   "PriceWithSchema9__wasPrice": "$1,162",
   "PriceWithSchema9__discount": "45% off",
   "PriceWithSchema9__value": "$639",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/printed-cotton-jersey-t-shirt/43769801095170907",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095170907/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095170907/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$539",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$269",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/shorts/casual-shorts/printed-ponte-shorts/1647597279148344",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597279148344/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597279148344/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed ponte shorts",
   "PriceWithSchema9__wasPrice": "$833",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$291",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/cardigans-zip-throughs/pointelle-knit-wool-and-cashmere-blend-zip-up-cardigan/1647597277922322",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277922322/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277922322/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Pointelle-knit wool and cashmere-blend zip-up cardigan",
   "PriceWithSchema9__wasPrice": "$1,707",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$597",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/printed-melange-french-cotton-blend-terry-sweatshirt/1647597277430452",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277430452/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277430452/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed mélange French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$539",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$215",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/studded-melange-cotton-jersey-t-shirt/1647597277372781",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277372781/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277372781/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Studded mélange cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": null,
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jeans/skinny-leg-jeans/slim-fit-appliqued-denim-jeans/1647597277480447",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277480447/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277480447/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit appliquéd denim jeans",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$581",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/scarves-ties/scarves/printed-cotton-scarf/43769801095379050",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095379050/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095379050/E/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed cotton scarf",
   "PriceWithSchema9__wasPrice": "$144",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$72",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/pinstriped-twill-bomber-jacket/43769801095407561",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095407561/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095407561/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Pinstriped twill bomber jacket",
   "PriceWithSchema9__wasPrice": "$1,246",
   "PriceWithSchema9__discount": "45% off",
   "PriceWithSchema9__value": "$685",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/printed-cotton-jersey-t-shirt/1647597277358394",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277358394/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277358394/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$261",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/appliqued-cotton-jersey-hooded-track-jacket/1647597277964359",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277964359/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277964359/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Appliquéd cotton-jersey hooded track jacket",
   "PriceWithSchema9__wasPrice": "$2,414",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$844",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/appliqued-cotton-jersey-t-shirt/1647597276830044",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276830044/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276830044/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Appliquéd cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$1,210",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$544",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/bead-embellished-cotton-twill-jacket/1647597277968386",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277968386/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277968386/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Bead-embellished cotton-twill jacket",
   "PriceWithSchema9__wasPrice": "$2,833",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$990",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/hoodies-zip-throughs/two-tone-mesh-zip-up-cardigan/1647597277938877",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277938877/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277938877/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Two-tone mesh zip-up cardigan",
   "PriceWithSchema9__wasPrice": "$958",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$287",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/studded-melange-cotton-jersey-t-shirt/1647597277234789",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277234789/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277234789/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Studded mélange cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$1,665",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$582",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jeans/skinny-leg-jeans/slim-fit-studded-faded-denim-jeans/1647597277788086",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277788086/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277788086/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit studded faded denim jeans",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$2,498",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/hoodies-zip-throughs/color-block-mesh-zip-up-hoodie/1647597277938876",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277938876/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277938876/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Color-block mesh zip-up hoodie",
   "PriceWithSchema9__wasPrice": "$1,210",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$484",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/casual-pants/tapered-striped-stretch-jersey-pants/1647597277462736",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277462736/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277462736/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered striped stretch-jersey pants",
   "PriceWithSchema9__wasPrice": "$791",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$237",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/printed-shell-jacket/1647597277410894",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277410894/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277410894/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed shell jacket",
   "PriceWithSchema9__wasPrice": "$1,126",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$394",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/embroidered-satin-track-jacket/1647597277234791",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277234791/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277234791/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embroidered satin track jacket",
   "PriceWithSchema9__wasPrice": "$2,162",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$648",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/blazers/checked-wool-blazer/1647597277668885",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277668885/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277668885/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Checked wool blazer",
   "PriceWithSchema9__wasPrice": "$2,210",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$774",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/casual-pants/tapered-bead-embellished-cotton-pants/1647597277898908",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277898908/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277898908/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered bead-embellished cotton pants",
   "PriceWithSchema9__wasPrice": "$749",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$224",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/casual-shirts/pintucked-gingham-cotton-poplin-shirt/1647597276984202",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276984202/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276984202/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Pintucked gingham cotton-poplin shirt",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$232",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/shorts/casual-shorts/embellished-stretch-cotton-twill-shorts/1647597277758294",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277758294/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277758294/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished stretch-cotton twill shorts",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$707",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/casual-shirts/patchwork-effect-denim-shirt/1647597277904137",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277904137/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277904137/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Patchwork-effect denim shirt",
   "PriceWithSchema9__wasPrice": "$1,126",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$337",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/blazers/wool-twill-blazer/1647597277278639",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277278639/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277278639/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Wool-twill blazer",
   "PriceWithSchema9__wasPrice": "$2,378",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$832",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/swimwear-beachwear/swim-shorts/short-length-studded-tie-dyed-swim-shorts/1647597277670137",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277670137/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277670137/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Short-length studded tie-dyed swim shorts",
   "PriceWithSchema9__wasPrice": "$521",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$182",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/polo-shirts/ribbed-jersey-polo-shirt/1647597277368946",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277368946/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277368946/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Ribbed jersey polo shirt",
   "PriceWithSchema9__wasPrice": "$749",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$299",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/tapered-belted-cotton-twill-pants/1647597277862335",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277862335/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277862335/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered belted cotton-twill pants",
   "PriceWithSchema9__wasPrice": "$497",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$198",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/swimwear-beachwear/swim-shorts/mid-length-studded-printed-swim-shorts/1647597277660482",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277660482/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277660482/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Mid-length studded printed swim shorts",
   "PriceWithSchema9__wasPrice": "$497",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$224",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/shorts/casual-shorts/printed-cotton-twill-shorts/1647597277348578",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277348578/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277348578/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed cotton-twill shorts",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$761",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/cotton-jersey-t-shirt/1647597277344074",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277344074/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277344074/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$329",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$148",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/coats/overcoats/color-block-cotton-hooded-coat/1647597277962391",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277962391/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277962391/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Color-block cotton hooded coat",
   "PriceWithSchema9__wasPrice": "$1,749",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$524",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/coats/raincoats-trench-coats/belted-twill-trench-coat/1647597277784270",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277784270/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277784270/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Belted twill trench coat",
   "PriceWithSchema9__wasPrice": "$1,911",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$573",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/casual-shirts/faded-denim-shirt/1647597277342099",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277342099/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277342099/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Faded denim shirt",
   "PriceWithSchema9__wasPrice": "$605",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$242",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/pleated-mohair-and-wool-blend-crepe-pants/1647597277894443",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277894443/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277894443/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Pleated mohair and wool-blend crepe pants",
   "PriceWithSchema9__wasPrice": null,
   "PriceWithSchema9__discount": null,
   "PriceWithSchema9__value": "$773",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/printed-cotton-jersey-t-shirt/1647597277354492",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277354492/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277354492/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$261",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/coats/raincoats-trench-coats/whipstitched-gabardine-trench-coat/1647597277306295",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277306295/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277306295/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Whipstitched gabardine trench coat",
   "PriceWithSchema9__wasPrice": "$3,845",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$1,538",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/scarves-ties/ties-pocket-squares/camouflage-print-silk-twill-pocket-square/43769801095380129",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095380129/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095380129/E/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Camouflage-print silk-twill pocket square",
   "PriceWithSchema9__wasPrice": "$102",
   "PriceWithSchema9__discount": "49% off",
   "PriceWithSchema9__value": "$52",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/wool-and-cashmere-blend-felt-jacket/1647597277938110",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277938110/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277938110/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Wool and cashmere-blend felt jacket",
   "PriceWithSchema9__wasPrice": "$2,498",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$874",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/gabardine-paneled-shell-hooded-jacket/1647597277934763",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277934763/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277934763/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Gabardine-paneled shell hooded jacket",
   "PriceWithSchema9__wasPrice": "$1,623",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$568",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/embellished-faded-denim-jacket/1647597277256544",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277256544/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277256544/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished faded denim jacket",
   "PriceWithSchema9__wasPrice": "$2,498",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$749",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/blazers/cotton-poplin-blazer/1647597276870184",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276870184/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276870184/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Cotton-poplin blazer",
   "PriceWithSchema9__wasPrice": "$2,378",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$832",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/studded-satin-bomber-jacket/1647597277692030",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277692030/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277692030/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Studded satin bomber jacket",
   "PriceWithSchema9__wasPrice": "$1,911",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$764",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jeans/straight-leg-jeans/slim-fit-distressed-denim-jeans/1647597277362457",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277362457/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277362457/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit distressed denim jeans",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$232",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/casual-shirts/appliqued-tie-dyed-denim-shirt/1647597277926343",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277926343/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277926343/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Appliquéd tie-dyed denim shirt",
   "PriceWithSchema9__wasPrice": "$1,665",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$668",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/coated-cotton-gabardine-overshirt/1647597277668036",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277668036/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277668036/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Coated cotton-gabardine overshirt",
   "PriceWithSchema9__wasPrice": "$2,162",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$758",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/printed-slub-cotton-jersey-t-shirt/1647597277354493",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277354493/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277354493/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed slub cotton-jersey  T-shirt",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$232",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/printed-french-cotton-blend-terry-sweatshirt/1647597277658102",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277658102/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277658102/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$958",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$384",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/cupro-satin-jacket/1647597277934511",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277934511/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277934511/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Cupro-satin jacket",
   "PriceWithSchema9__wasPrice": "$1,126",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$508",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/casual-pants/slim-fit-appliqued-printed-cotton-pants/43769801095136650",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095136650/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095136650/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit appliquéd printed cotton pants",
   "PriceWithSchema9__wasPrice": "$1,294",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$582",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/coats/overcoats/camouflage-print-cotton-jacket/1647597277758296",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277758296/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277758296/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Camouflage-print cotton jacket",
   "PriceWithSchema9__wasPrice": "$2,078",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$728",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/embellished-cotton-jersey-t-shirt/1647597276830041",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276830041/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276830041/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$1,210",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$424",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/embellished-cotton-jersey-t-shirt/1647597277358395",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277358395/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277358395/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$1,042",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$468",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/embellished-cotton-jersey-t-shirt/1647597276826860",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276826860/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276826860/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$958",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$430",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/printed-french-cotton-blend-terry-sweatshirt/1647597276872742",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276872742/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276872742/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$539",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$188",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/camouflage-print-french-cotton-blend-terry-sweatshirt/1647597276576291",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276576291/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276576291/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Camouflage-print French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$1,042",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$468",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/hoodies-zip-throughs/stretch-knit-zip-up-hoodie/1647597276600024",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597276600024/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597276600024/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Stretch-knit zip-up hoodie",
   "PriceWithSchema9__wasPrice": "$1,581",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$632",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/printed-french-cotton-blend-terry-sweatshirt/1647597277242566",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277242566/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277242566/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$1,126",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$394",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/printed-french-cotton-blend-terry-sweatshirt/1647597277656647",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277656647/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277656647/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$623",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$249",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino-garavani/backpacks/backpacks/logo-print-leather-backpack/43769801095511421",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095511421/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095511421/E/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO GARAVANI",
   "ProductItem24__name": "Logo-print leather backpack",
   "PriceWithSchema9__wasPrice": "$1,204",
   "PriceWithSchema9__discount": "45% off",
   "PriceWithSchema9__value": "$662",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/shorts/casual-shorts/two-tone-wool-blend-twill-shorts/1647597277664895",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277664895/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277664895/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Two-tone wool-blend twill shorts",
   "PriceWithSchema9__wasPrice": "$1,018",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$358",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/tapered-cotton-twill-pants/1647597277862696",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277862696/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277862696/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered cotton-twill pants",
   "PriceWithSchema9__wasPrice": "$707",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$318",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/printed-cotton-jersey-t-shirt/1647597277376027",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277376027/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277376027/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Printed cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$707",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$282",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/knitwear/crew-neck-sweaters/appliqued-ribbed-silk-sweater/1647597277448424",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277448424/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277448424/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Appliquéd ribbed silk sweater",
   "PriceWithSchema9__wasPrice": "$761",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$266",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/tapered-wool-and-mohair-blend-pants/1647597277480548",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277480548/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277480548/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tapered wool and mohair-blend pants",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$232",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino-garavani/backpacks/backpacks/logo-print-textured-leather-backpack/42247633207882550",
   "Image18__image src": "https://www.theoutnet.com/variants/images/42247633207882550/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/42247633207882550/E/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO GARAVANI",
   "ProductItem24__name": "Logo-print textured-leather backpack",
   "PriceWithSchema9__wasPrice": "$2,288",
   "PriceWithSchema9__discount": "40% off",
   "PriceWithSchema9__value": "$1,372",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/suits/suits/stretch-wool-suit/43769801095136542",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095136542/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095136542/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Stretch-wool suit",
   "PriceWithSchema9__wasPrice": "$2,623",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$1,310",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/patchwork-effect-french-cotton-blend-terry-sweatshirt/1647597277254306",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277254306/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277254306/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Patchwork-effect French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$910",
   "PriceWithSchema9__discount": "65% off",
   "PriceWithSchema9__value": "$318",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/melange-cotton-jersey-t-shirt/43769801095175703",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095175703/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095175703/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Mélange cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$521",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$260",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/polo-shirts/camouflage-print-cotton-jersey-polo-shirt/1647597277242568",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277242568/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277242568/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Camouflage-print cotton-jersey polo shirt",
   "PriceWithSchema9__wasPrice": "$665",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$299",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/blazers/wool-twill-blazer/1647597277286271",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277286271/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277286271/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Wool-twill blazer",
   "PriceWithSchema9__wasPrice": "$2,498",
   "PriceWithSchema9__discount": "70% off",
   "PriceWithSchema9__value": "$749",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/sweatshirts/striped-french-cotton-blend-terry-sweatshirt/1647597277418939",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277418939/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277418939/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Striped French cotton-blend terry sweatshirt",
   "PriceWithSchema9__wasPrice": "$623",
   "PriceWithSchema9__discount": "50% off",
   "PriceWithSchema9__value": "$311",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/casual-pants/slim-fit-embellished-stretch-ponte-pants/1647597277876656",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277876656/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277876656/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit embellished stretch-ponte pants",
   "PriceWithSchema9__wasPrice": "$1,581",
   "PriceWithSchema9__discount": "60% off",
   "PriceWithSchema9__value": "$632",
   "SingleBadge2__badge": "JUST IN"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jackets/casual-jackets/striped-stretch-jersey-track-jacket/43769801095523032",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095523032/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095523032/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Striped stretch-jersey track jacket",
   "PriceWithSchema9__wasPrice": "$958",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$430",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino-garavani/sneakers/fashion-sneakers/printed-faux-leather-and-stretch-knit-sneakers/1647597277728367",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277728367/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277728367/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO GARAVANI",
   "ProductItem24__name": "Printed faux leather and stretch-knit sneakers",
   "PriceWithSchema9__wasPrice": "$605",
   "PriceWithSchema9__discount": "40% off",
   "PriceWithSchema9__value": "$364",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/embellished-cotton-jersey-t-shirt/1647597277342098",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277342098/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277342098/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Embellished cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$2,462",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$1,108",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/jeans/skinny-leg-jeans/slim-fit-denim-jeans/1647597277350195",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277350195/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277350195/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Slim-fit denim jeans",
   "PriceWithSchema9__wasPrice": "$407",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$184",
   "SingleBadge2__badge": "Just 1 Left"
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino-garavani/keychains/keychains/logo-print-webbing-key-chain/43769801095940156",
   "Image18__image src": "https://www.theoutnet.com/variants/images/43769801095940156/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/43769801095940156/E/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO GARAVANI",
   "ProductItem24__name": "Logo-print webbing key chain",
   "PriceWithSchema9__wasPrice": "$240",
   "PriceWithSchema9__discount": "40% off",
   "PriceWithSchema9__value": "$144",
   "SingleBadge2__badge": null
  },
  {
   "tablescraper-selected-row href": "https://www.theoutnet.com/en-in/shop/product/valentino/tops/t-shirts/tie-dyed-cotton-jersey-t-shirt/1647597277344076",
   "Image18__image src": "https://www.theoutnet.com/variants/images/1647597277344076/F/w340_q80.jpg",
   "Image18__image src 2": "https://www.theoutnet.com/variants/images/1647597277344076/R/w340_q80.jpg",
   "ProductItem24__designer": "VALENTINO",
   "ProductItem24__name": "Tie-dyed cotton-jersey T-shirt",
   "PriceWithSchema9__wasPrice": "$581",
   "PriceWithSchema9__discount": "55% off",
   "PriceWithSchema9__value": "$261",
   "SingleBadge2__badge": "JUST IN"
  }
 ]



function showthediv(id){
  console.log(id)
  if(document.querySelector(`#${id} ul`).style.display==""||document.querySelector(`#${id} ul`).style.display=="none"){
    if(id=="z-size-shoe"||id=="z-size-shirt"||id=="z-size"){
      document.querySelector(`#${id} ul`).style.display="grid"
    }
    else{
      document.querySelector(`#${id} ul`).style.display="block"
    }
    for(let i=0; i<alldiv.length; i++){
      console.log(id,alldiv[i].id)
      if(id!==alldiv[i].id){
       document.querySelector(`#${alldiv[i].id} ul`).style.display="none"  
      }
    }
  }
  else{
 setTimeout(() => {
    document.querySelector(`#${id} ul`).style.display="none"
  }, 2000);
      
   
  }
 
  
}
  let alldiv=  document.querySelectorAll("#z-sort-items>div")
 for(let i=0; i<alldiv.length; i++){
   alldiv[i].addEventListener("click", function(){
     showthediv(this.id)
   })
 }


const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = 0
        maxPrice =3000
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) )*100 + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max)*100  + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
      let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            document.querySelector("#z-min").innerText =`$${minVal}`;
            document.querySelector("#z-max").innerText = `$${maxVal}`;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
function append(data){
  document.querySelector("#z-showdata").innerHTML=null
data.map((el)=>{
  let div= document.createElement("div")
  let img=document.createElement("img")
  let h4=document.createElement("h4")
  let span=document.createElement("span")
  let fp=document.createElement("h4")
  let sp=document.createElement("span")
  let off=document.createElement("span")
  let tag=document.createElement("span")
  let div1=document.createElement("div")
  div1.setAttribute("class", "z-flex")
  img.src=el["Image18__image src"]
  h4.innerText=el.ProductItem24__designer
  span.innerText=el.ProductItem24__name
  fp.innerText=el.PriceWithSchema9__value
  fp.style.color="#B90000"
  fp.style.fontWeight="500"
  sp.innerText=el.PriceWithSchema9__wasPrice
  sp.style.textDecoration="line-through"
  off.innerText=el.PriceWithSchema9__discount
  tag.innerText=el.SingleBadge2__badge
  div1.append(sp,off)
  div.append(img,h4,span,fp,div1,tag)
  document.querySelector("#z-showdata").append(div)
  
})
document.querySelector("#z-counter-div").innerText=`${data.length} results`
}

function sortvalue(value){
 if(value==null){
   return
 }
 value=value.trim()
 value= value.split("")
//  console.log(value)
  for(let i=0; i<value.length; i++){
    if(value[i]=="$"||value[i]==","||value[i]=="o"||value=="f"||value=="f"||value=="%"||value==' '){
      value.splice(i,1)
      i=0
    }
  }
if(value[5]=="f"){
  value=value.join("")
let x= value[0]+value[1]
  return Number(x)
} 
  return Number(value.join(""))
  
}
append(data)
document.querySelector("#z-sort").addEventListener("change", function(){
          sortfun()
})


function sortfun(){
  let low=document.querySelector("#z-sort").value
 
  if(low=="lth"){
data =data.sort((a,b)=>{
  return sortvalue(a.PriceWithSchema9__value)-sortvalue(b.PriceWithSchema9__value)
})
append(data)
}
if(low=="htl"){
  data =data.sort((a,b)=>{
    return sortvalue(b.PriceWithSchema9__value)-sortvalue(a.PriceWithSchema9__value)
  })
  append(data)
}
if(low=="hd"){
  data =data.sort((a,b)=>{
    return sortvalue(b.PriceWithSchema9__discount)-sortvalue(a.PriceWithSchema9__discount)
  })
  append(data)
}
}