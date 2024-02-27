document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var sidebarItems = document.querySelectorAll('sidebar ul li');

    // Добавляем анимацию при наведении на пункты меню в боковой панели
    sidebarItems.forEach(function(item) {
        item.style.transition = 'background-color 0.3s ease';
    });

    // Добавляем обработчики событий для каждой ссылки в боковой панели
    sidebarItems.forEach(function(item) {
        var link = item.querySelector('a');
        link.style.transition = 'background-color 0.3s ease';

        // Обработчик события для наведения на ссылку
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#000'; // Исправлено на черный цвет
            link.style.color = '#fff'; // Исправлено на белый цвет
        });

        // Обработчик события для ухода курсора с ссылки
        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = 'transparent'; // Исправлено на прозрачный цвет
            link.style.color = '#000'; // Исправлено на черный цвет
        });
    });
});
