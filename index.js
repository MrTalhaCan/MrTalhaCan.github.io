const works =   document.querySelectorAll('.work');
const ary   =   Array.from(works);
ary.map(item => {
    item.addEventListener('mouseover', () => {
        item.lastElementChild.classList.add('trans-up')
    })
    item.addEventListener('mouseleave', () => {
        item.lastElementChild.classList.remove('trans-up')
    })
})
