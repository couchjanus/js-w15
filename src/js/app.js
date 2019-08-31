// (function() {
    // document
    //     .querySelector('#dismiss, .overlay')
    //     .addEventListener('click', function() {
    //         document.getElementById('sidebar').classList.remove('active');
    //         document.querySelector('.overlay').classList.remove('active');
    //     });
    // document
    //     .getElementById('sidebarCollapse')
    //     .addEventListener('click', function() {
    //         document.getElementById('sidebar').classList.add('active');
    //         document.querySelector('.overlay').classList.add('active');
    //         document.querySelector('.collapse').classList.toggle('in');
    //         document
    //             .querySelector('a[aria-expanded]')
    //             .setAttribute('aria-expanded', 'false');
    //     });
// })();



function el(selector) {
    return document.querySelector(selector);
}


// (function () {
//     el("#sidebarCollapse").addEventListener('click', function () {
//         el(".sidebar").classList.add("active");
//         el(".overlay").classList.add("active")
//     });
// })();

function openCart() {
    el(".sidebar").classList.add("active");
    el(".overlay").classList.add("active")
}


// (function () {
//     el("#sidebarCollapse").addEventListener('click', function () {
//         openCart();
//     });
// })();

function closeCart() {
    el(".sidebar").classList.remove("active");
    el(".overlay").classList.remove("active");
}

// document
//         .querySelector('#dismiss, .overlay')
//         .addEventListener('click', function() {
//             document.getElementById('sidebar').classList.remove('active');
//             document.querySelector('.overlay').classList.remove('active');
//         });

(function () {
    el("#sidebarCollapse").addEventListener('click', function () {
        openCart();
    });
    el(".dismiss").addEventListener('click', function () {
        closeCart();
    });
    el(".overlay").addEventListener('click', function () {
        closeCart();
    });
})();
