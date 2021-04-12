let a = {
    value: 'apoweirshj',
    next: null
}
let b ={
    value: 'value of b',
    next: null
}
let c ={
    value: 'value of c',
    next: null
}
let head = a;
a.next = b;
b.next = c;
head = {
    value: "new value",
    next: head
};
function printList(linkedList){
    let current = linkedList
    while(current){
        console.log(current.value);
        current = current.next;
    }
}
printList(head);
function addToEnd(linkedList, value){
    let current = linkedList;
    while(current){
        if(!current.next){
            current.next = {
                value,
                next: null
            }
            break;
        }
        current = current.next;
    }
}

addToEnd(head, 'last value');
printList(head);