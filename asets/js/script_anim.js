document.addEventListener('DOMContentLoaded', function() {
        var sidebar = document.getElementById('sidebar');
        var sidebarItems = document.querySelectorAll('#sidebar ul li');
    

        // Добавляем анимацию при наведении на пункты меню
        sidebarItems.forEach(function(item) {
            item.style.transition = 'background-color 0.3s ease';
        });
    
        // Добавляем анимацию при наведении на ссылки в меню
        sidebarItems.forEach(function(item) {
            var link = item.querySelector('a'); 
            link.style.transition = 'background-color 0.3s ease';
    
            // Обработчик события для наведения на ссылку
            link.addEventListener('mouseover', function() {
                link.style.backgroundColor = '#ff0000';
                link.style.color = '#fff';
            });
    
            // Обработчик события для ухода курсора с ссылки
            link.addEventListener('mouseout', function() {
                link.style.backgroundColor = '#ccc'; 
                link.style.color = '#000';
            });
        });
    });
    