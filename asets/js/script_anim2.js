document.addEventListener('DOMContentLoaded', function() {
        var navebar = document.getElementById('nav');
        var navItems = document.querySelectorAll('nav ul li');
    

        // Добавляем анимацию при наведении на пункты меню
        navItems.forEach(function(item) {
            item.style.transition = 'background-color 0.3s ease';
        });
    
        // Добавляем анимацию при наведении на ссылки в меню
        navItems.forEach(function(item) {
            var link = item.querySelector('a'); 
            link.style.transition = 'background-color 0.3s ease';
    
            // Обработчик события для наведения на ссылку
            link.addEventListener('mouseover', function() {
                link.style.backgroundColor = 'black';
                link.style.color = '#fff';
            });
    
            // Обработчик события для ухода курсора с ссылки
            link.addEventListener('mouseout', function() {
                link.style.backgroundColor = 'rgba(0, 0, 0, 0'; 
                link.style.color = '#000';
            });
        });
    });
    