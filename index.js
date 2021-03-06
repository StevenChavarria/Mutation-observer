const input = document.getElementById('fruit');
const button = document.getElementById('submit');
const targetNode = document.getElementById('myList');

const config = {
    attributes: true,
    childList: true,
    subtree: true
};


button.addEventListener('click', add);

function add() {
    const li = document.createElement('li');
    const text = input.value;
    li.appendChild(document.createElementNode(text));
    targetNode.appendChild(li);
}


// Mutation observer
const callback = (mutationList, observer) => {
   for(const mutation of mutationList){ 
        if(mutation.type === 'childList'){
            console.log('Child added or removed');
        } else if (mutation.type === 'attribute'){
          console.log(`The ${mutation.attributeName} attribute was modified`);
        }
   }
};
const observer = new MutationObserver(callback);


observer.observe(targetNode, config);

//observer.disconnect();