document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('.header-menu-icon');
    let menu = document.querySelector('.header-list');
    let menuLinks = document.querySelectorAll('.header-list ul li a'); //  メニュー内のリンクを取得

    if (!menuIcon) {
        console.error("エラー: '.header-menu-icon' が見つかりません。HTMLを確認してください！");
        return;
    }

    if (!menu) {
        console.error("エラー: '.header-list' が見つかりません。HTMLを確認してください！");
        return;
    }

    menuIcon.addEventListener("click", function() {
        let isOpen = menu.classList.contains('show');

        // メニューの開閉を切り替え
        menu.classList.toggle('show');

        //  開閉状態を属性で管理（アクセシビリティ対応）
        menuIcon.setAttribute("aria-expanded", !isOpen);
    });

    // メニューをクリックしたらメニューを閉じる
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            console.log("画面の他の部分がクリックされたのでメニューを閉じます");
            menu.classList.remove('show');
            menuIcon.setAttribute("aria-expanded", "false");
        }
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            console.log("メニュー内のリンクがクリックされたのでメニューを閉じます");
            menu.classList.remove('show');
            menuIcon.setAttribute("aria-expanded", "false");
        });
    });
});
