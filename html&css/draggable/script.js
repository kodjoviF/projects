const items = document.querySelectorAll('.item')

let draggeditem = null

items.forEach(item=>{
    item.addEventListener('dragstart',dragStar)
    item.addEventListener('dragend',dragEnd)
    item.addEventListener('dragover',dragOver)
    item.addEventListener('dragenter',dragEnter)
    item.addEventListener('dragleave',dragLeave)
    item.addEventListener('drop',drop)
})
function dragStar(){
    this.classList.add('dragging');
    draggeditem = this;
}
function dragEnd(){
    this.classList.remove('dragging')
    draggeditem = null

}
function dragEnter(e){
    e.preventDefault()
    this.classList.add('hovered')
}
 function dragLeave(){
    this.classList.remove('hovered')

 }
 function drop() {
    this.classList.remove('hovered')
    this.parentNode.insertBefore(draggeditem, this.nextSibling)
 }

function dragOver(e){
    e.preventDefault();
}