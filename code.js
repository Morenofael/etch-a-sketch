function removeChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
function generateGrid(width,height){
    let main = document.querySelector('main');
    removeChildNodes(main);
    if(width>100) width = 100;
    if(height>100) height = 100;
    for(i=0;i<height;i++){
        let rowDiv = document.createElement('div');
        rowDiv.classList = 'rowDiv';
        for(j=0;j<width;j++){
            let squareDiv = document.createElement('div');
            squareDiv.classList = 'squareDiv';
            squareDiv.addEventListener("mouseover",function(){squareDiv.style.backgroundColor='black'});
            rowDiv.appendChild(squareDiv);
        }
        main.appendChild(rowDiv);
    }
}
generateGrid(16,16);