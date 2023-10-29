let menu = document.getElementById('menu');
let dropdown = document.querySelector('.dropdown');
let menu_closer = document.querySelector('#menu_closer');
let logo = document.querySelector('#logo');
let navigation_bar_ul = document.querySelector('#navigation_bar_ul');
let cart = document.querySelector('#cart');

menu.addEventListener('click', () => {
  dropdown.style.height = '100vh';
  menu_closer.style.display = 'block';
  menu_closer.style.visibility = "visible";
  menu_closer.style.opacity = '1';
  logo.style.visibility = "hidden";
  logo.style.opacity = "0";
  cart.style.opacity = "0";
  menu.style.display = 'none';
  navigation_bar_ul.style.visibility = 'visible';
  navigation_bar_ul.style.opacity = '1';
})

menu_closer.addEventListener('click', () => {
  dropdown.style.height = 0 + 'px';
  menu_closer.style.display = 'none';
  menu_closer.style.opacity = '0'
  menu.style.display = 'block';
  logo.style.visibility = "visible"
  logo.style.opacity = "1"
  navigation_bar_ul.style.visibility = 'hidden';
  navigation_bar_ul.style.opacity = '0';
})


let eheight1 = 1.5;
let eheight2 = 1.5;
let eheight3 = 1.5;
let eheight4 = 1.5;
let eheight5 = 1.5;
let eheight6 = 1.5;
let eheight7 = 1.5;
let eheight8 = 1.5;
let eheight9 = 1.5;
let eheight10 = 1.5;
let eheight11 = 1.5;

document.querySelector('.cross1').addEventListener('click', () => {

  if (eheight1 == 1.5) {
    document.querySelector('.shop_and_learn').style.height = '18rem';
    eheight1 = 18;
  } else if (eheight1 == 18) {
    document.querySelector('.shop_and_learn').style.height = '1.5rem';
    eheight1 = 1.5;
  }

})


document.querySelector('.cross2').addEventListener('click', () => {

  if (eheight2 == 1.5) {
    document.querySelector('.wallet').style.height = '7.5rem';
    eheight2 = 7.5;
  } else if (eheight2 == 7.5) {
    document.querySelector('.wallet').style.height = '1.5rem';
    eheight2 = 1.5;
  }

})


document.querySelector('.cross3').addEventListener('click', () => {

  if (eheight3 == 1.5) {
    document.querySelector('.account').style.height = '6rem';
    eheight3 = 6;
  } else if (eheight3 == 6) {
    document.querySelector('.account').style.height = '1.5rem';
    eheight3 = 1.5;
  }

})


document.querySelector('.cross4').addEventListener('click', () => {

  if (eheight4 == 1.5) {
    document.querySelector('.entertainment').style.height = '15rem';
    eheight4 = 15;
  } else if (eheight4 == 15) {
    document.querySelector('.entertainment').style.height = '1.5rem';
    eheight4 = 1.5;
  }

})


document.querySelector('.cross5').addEventListener('click', () => {

  if (eheight5 == 1.5) {
    document.querySelector('.apple_store').style.height = '18rem';
    eheight5 = 18;
  } else if (eheight5 == 18) {
    document.querySelector('.apple_store').style.height = '1.5rem';
    eheight5 = 1.5;
  }

})


document.querySelector('.cross6').addEventListener('click', () => {

  if (eheight6 == 1.5) {
    document.querySelector('.for_business').style.height = '4.5rem';
    eheight6 = 4.5;
  } else if (eheight6 == 4.5) {
    document.querySelector('.for_business').style.height = '1.5rem';
    eheight6 = 1.5;
  }

})


document.querySelector('.cross7').addEventListener('click', () => {

  if (eheight7 == 1.5) {
    document.querySelector('.for_education').style.height = '6rem';
    eheight7 = 6;
  } else if (eheight7 == 6) {
    document.querySelector('.for_education').style.height = '1.5rem';
    eheight7 = 1.5;
  }

})


document.querySelector('.cross8').addEventListener('click', () => {

  if (eheight8 == 1.5) {
    document.querySelector('.for_healthcare').style.height = '6rem';
    eheight8 = 6;
  } else if (eheight8 == 6) {
    document.querySelector('.for_healthcare').style.height = '1.5rem';
    eheight8 = 1.5;
  }

})


document.querySelector('.cross9').addEventListener('click', () => {

  if (eheight9 == 1.5) {
    document.querySelector('.for_goverment').style.height = '4.5rem';
    eheight9 = 4.5;
  } else if (eheight9 == 4.5) {
    document.querySelector('.for_goverment').style.height = '1.5rem';
    eheight9 = 1.5;
  }

})


document.querySelector('.cross10').addEventListener('click', () => {

  if (eheight10 == 1.5) {
    document.querySelector('.apple_values').style.height = '12rem';
    eheight10 = 12;
  } else if (eheight10 == 12) {
    document.querySelector('.apple_values').style.height = '1.5rem';
    eheight10 = 1.5;
  }

})


document.querySelector('.cross11').addEventListener('click', () => {

  if (eheight11 == 1.5) {
    document.querySelector('.about_apple').style.height = '9rem';
    eheight11 = 9;
  } else if (eheight11 == 9) {
    document.querySelector('.about_apple').style.height = '1.5rem';
    eheight11 = 1.5;
  }

})





























// For Desktop

let header = document.querySelector('header');
let shop = document.querySelector('#shop');
let quickLinks = document.querySelector('#quick_links');
let shopSpecialStore = document.querySelector('#shop_special_stores');
let exploreMac = document.querySelector('#explore_mac');
let shopMac = document.querySelector('#shop_mac');
let moreFromMaC = document.querySelector('#more_from_mac');
let exploreiPad = document.querySelector('#explore_ipad');
let shopiPad = document.querySelector('#shop_ipad');
let moreFromiPad = document.querySelector('#more_from_ipad');
let exploreiPhone = document.querySelector('#explore_iphone');
let shopiPhone = document.querySelector('#shop_iphone');
let moreFromiPhone = document.querySelector('#more_from_iphone');
let exploreWatch = document.querySelector('#explore_watch');
let shopWatch = document.querySelector('#shop_watch');
let moreFromWatch = document.querySelector('#more_from_watch');
let explorAirPods = document.querySelector('#explore_airpods');
let shopAirPods = document.querySelector('#shop_airpods');
let moreFromAirPods = document.querySelector('#more_from_airpods');
let exploreTvHome = document.querySelector('#explore_tvhome');
let shopTvHome = document.querySelector('#shop_tvhome');
let moreFromTvHome = document.querySelector('#more_from_tvhome');
let exploreEntertainment = document.querySelector('#explore_entertainment');
let support = document.querySelector('#support');
let shopAccessories = document.querySelector('#shop_accessories');
let exploreAccessories = document.querySelector('#explore_accessories');
let exploreSupport = document.querySelector('#explore_support');
let getHelp = document.querySelector('#get_help');
let helpfulTopics = document.querySelector('#helpful_topics');


document.querySelector('#store').addEventListener('mouseover', () => {
  header.style.height = '60vh';
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  shop.style.display = 'block';
  quickLinks.style.display = 'block';
  shopSpecialStore.style.display = 'block';

  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})


document.querySelector('#mac').addEventListener('mouseover', () => {
  header.style.height = '75vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  exploreMac.style.display = 'block';
  shopMac.style.display = 'block';
  moreFromMaC.style.display = 'block';

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#ipad').addEventListener('mouseover', () => {
  header.style.height = '75vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  exploreiPad.style.display = 'block';
  shopiPad.style.display = 'block';
  moreFromiPad.style.display = 'block';

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#iphone').addEventListener('mouseover', () => {
  header.style.height = '60vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  exploreiPhone.style.display = 'block';
  shopiPhone.style.display = 'block';
  moreFromiPhone.style.display = 'block';

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#watch').addEventListener('mouseover', () => {
  header.style.height = '60vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  exploreWatch.style.display = 'block';
  shopWatch.style.display = 'block';
  moreFromWatch.style.display = 'block';

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#airpods').addEventListener('mouseover', () => {
  header.style.height = '60vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  explorAirPods.style.display = "block"
  shopAirPods.style.display = "block"
  moreFromAirPods.style.display = "block"

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#tvhome').addEventListener('mouseover', () => {
  header.style.height = '60vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  exploreTvHome.style.display = "block"
  shopTvHome.style.display = "block"
  moreFromTvHome.style.display = "block"

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#entertainment').addEventListener('mouseover', () => {
  header.style.height = '85vh'
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  exploreEntertainment.style.display = "block"
  support.style.display = "block"

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})


document.querySelector('#accessories').addEventListener('mouseover', () => {
  header.style.height = '70vh';
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  shopAccessories.style.display = "block";
  exploreAccessories.style.display = "block";

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  getHelp.style.display = "none"
  helpfulTopics.style.display = "none"
})

document.querySelector('#appleSupport').addEventListener('mouseover', () => {
  header.style.height = '50vh';
  document.querySelector('.container').style.filter = "blur(5px)";
  document.querySelector('footer').style.filter = "blur(5px)";

  getHelp.style.display = "block";
  helpfulTopics.style.display = "block";

  shop.style.display = 'none';
  quickLinks.style.display = 'none';
  shopSpecialStore.style.display = 'none';
  exploreMac.style.display = 'none';
  shopMac.style.display = 'none';
  moreFromMaC.style.display = 'none';
  exploreiPad.style.display = 'none';
  shopiPad.style.display = 'none';
  moreFromiPad.style.display = 'none';
  exploreiPhone.style.display = 'none';
  shopiPhone.style.display = 'none';
  moreFromiPhone.style.display = 'none';
  exploreWatch.style.display = 'none';
  shopWatch.style.display = 'none';
  moreFromWatch.style.display = 'none';
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  explorAirPods.style.display = "none"
  shopAirPods.style.display = "none"
  moreFromAirPods.style.display = "none"
  exploreTvHome.style.display = "none"
  shopTvHome.style.display = "none"
  moreFromTvHome.style.display = "none"
  exploreEntertainment.style.display = "none"
  support.style.display = "none"
  shopAccessories.style.display = "none"
  exploreAccessories.style.display = "none"
})


closeDropdown();



function closeDropdown() {
  header.addEventListener('mouseenter', function () { });

  document.addEventListener('mouseenter', function () { });

  header.addEventListener('mouseleave', function () {
    header.style.height = '6vh'
    document.querySelector('.container').style.filter = "blur(0px)";
    document.querySelector('footer').style.filter = "blur(0px)";
  });

  document.addEventListener('mouseleave', function () {
    header.style.height = '6vh'
    document.querySelector('.container').style.filter = "blur(0px)";
    document.querySelector('footer').style.filter = "blur(0px)";
  });
};



function closeDropdownByVision() {
  header.style.height = '6vh'
  document.querySelector('.container').style.filter = "blur(0px)";
  document.querySelector('footer').style.filter = "blur(0px)";
}

closeDropdown();
