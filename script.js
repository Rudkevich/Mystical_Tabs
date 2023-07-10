window.addEventListener('DOMContentLoaded',()=>{
    const tabs = document.querySelectorAll('.tab__subtitle');
    const tabsContent = document.querySelectorAll('.tab__content');
    const tabsParent = document.querySelector('.tabs__subtitle-items');




    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item =>{
            item.classList.remove('tab__subtitle_active')
        })
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tab__subtitle_active');

        
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        if(target && target.classList.contains('tab__subtitle')){
            tabs.forEach((item, i)=>{
                if(target === item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })


});