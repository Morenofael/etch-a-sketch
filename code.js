let main = document.querySelector('main')
for(i=0;i<16;i++){
    let rowDiv = document.createElement('div');
    rowDiv.classList = 'rowDiv';
    for(j=0;j<16;j++){
        let squareDiv = document.createElement('div');
        squareDiv.classList = 'squareDiv';
        rowDiv.appendChild(squareDiv);
    }
    main.appendChild(rowDiv);
}