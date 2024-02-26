/*let header = document.createElement('h1');
        let username='Guest';
        header.textContent=`hello, ${username}`;
        //append the header to the body
        document.body.appendChild(header);

        console.log(header);*/
    
    let heading = document.createElement('h1');
    heading.textContent="DOM DEMO";
    let paragraph=document.createElement('p');
    paragraph.textContent="hi prabha how are you";

    //identify the div container / get the reference to the header div

    let header = document.getElementById('header');

    //header.appendChild(heading);
   // header.appendChild(paragraph);
               // or
    header.append(heading, paragraph);




    console.log(heading);