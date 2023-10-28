let menu = document.getElementById('menu');
let dropdown = document.querySelector('.dropdown');
let menu_closer = document.querySelector('#menu_closer');
let logo = document.querySelector('#logo');
let navigation_bar_ul = document.querySelector('#navigation_bar_ul');

menu.addEventListener('click', () => {
  dropdown.style.height = '100vh';
  menu_closer.style.display = 'block';
  menu_closer.style.visibility = "visible"
  menu_closer.style.opacity = '1'
  logo.style.visibility = "hidden"
  logo.style.opacity = "0"
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

function dropStore() {
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
}


function dropMac() {
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
}


function dropiPad() {
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
};


function dropiPhone() {
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
}


function dropWatch() {
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
}


function dropAirpod() {
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
}


function dropTvHome() {
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
}


function dropEntertainment() {
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
}


function dropAccessories() {
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
}


function dropAppleSupport() {
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
}






function closeDropdown() {
  header.addEventListener('mouseenter', function () {

  });

  document.addEventListener('mouseenter', function () {

  });

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
