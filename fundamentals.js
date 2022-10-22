document.write("<center>");
document.write("<br/>");
 document.write("  17. Programming the BOM and DOM <br/>");
 document.write("  17.1. The Window object <br/>");
 course = 'JavaScript';
 document.write("This variable is access by Window it is global object: ",window.course,"<br/>");
 document.write("The dimmenssion of the screen by innerwidth property: ",innerWidth,"<br/>");
 document.write("<br/>");
 document.write("  17.2. Timers <br/>");
 document.write("Timer with setTimeout run on the console <br/>");
 let timeOutId = setTimeout(function(){
    console.log("1 second passed");} , 1000);
    //if need to cancle the set time 
    clearTimeout(timeOutId);
    document.write("Timer with setInterval run on the console <br/>");
    let intervalId = setInterval(function(){
        console.log("1 second passed");} , 1000);
        //if need to cancle the set time 
        clearTimeout(intervalId);
        document.write("<br/>");
 document.write("  17.3. The location object <br/>");
 document.write("The location of URL by location.href property: ",location.href,"<br/>");
 document.write("The location of URL by DOM document.location.href property: ",document.location.href,"<br/>");
 document.write("<br/>");
 document.write("  17.4. The document object <br/>");
 document.write("  17.4.1 Selecting DOM Elements <br/>");
 let el = document.getElementById('first');
 document.write("Selecting elements by ID show on the console: ",el,"<br/>");
 console.log(el);
 let els = document.getElementsByClassName('p1');
 document.write("Selecting elements by Class name show on the console: ",els,"<br/>");
 console.log(els);
 let els2 = document.getElementsByTagName('p');
 document.write("Selecting elements by Tag name show on the console: ",els2,"<br/>");
 console.log(els2);
 document.write("<br/>");
 document.write("  17.4.2 Modifying DOM Elements <br/>");
 document.write("TO get all the modification of DOM elements Check the console <br/> ");
 let element = document.getElementById('first');
 element.textContent = "The first paragraph was edit in the DOM";
 let element2 = document.getElementById('second');
 element2.setAttribute('foo', 'foovalue');
 console.log(element2);
 let element3 = document.getElementById('first');
 element3.classList.add('p2');
 let element4 = document.getElementById('first');
  element4.style.color = 'blue';
  document.write("<br/>");
 document.write("  18. Promises and Error Handling <br/>");
 document.write("18.1 Error Handling using try and catch <br/>");
  try{
    let student = newStudent;
  }catch(error){
    document.write('Error: ', error,"<br/>");
 }
 document.write('continuing ... <br/>');
 document.write("<br/>");
 document.write("  18.2 Finally <br/>");
 try{
    let student = newStudent;
 }catch(error){
    document.write("Error: ", error,"<br/>");
 }
 finally{
    document.write("This always executes <br/>");
    document.write("finally always execute with and without error <br/>");
 }
 document.write("<br/>");
 document.write("  18.3 Developer Defined Errors <br/>");
 try{
    throw new Error("my custom error <br/>");
 }catch(error){
    document.write("Error: ", error);
 }
 finally{
    document.write("this always executes <br/>");
 }
 document.write("<br/>");
 document.write("  18.4 Creating a promise <br/>");
 document.write("The promise is running on the console check the console <br/>");
 let promise = new Promise(
    function(resolve, reject){
        setTimeout(resolve,100,"somevalue");
    }
 );
 console.log(promise);
 
 let promise2 = new Promise(
    function(resolve, reject){
        setTimeout(reject, 100, "some value");
    }
 );
 console.log(promise2);
 document.write("<br/>");
 document.write("  18.5 Setling a promise <br/>");
 document.write("To check go to the console <br/>");
 let promise3 = new Promise(
    function(resolve, reject){
        setTimeout(resolve, 100, "somevalue");
    }
 );
 promise3.then(
    value => console.log("This is a resolved value fulfilled: " + value ),
    error => console.log("rejected: " + error)
 );

 let promise4 = new Promise(
    function(resolve, reject){
        setTimeout(reject, 100, "somevalue");
    }
 );
 promise4.then(
    value => console.log("fulfilled: " + value),
    error => console.log("This is a rejected error: " + error)
 );
 document.write("<br/>");
 document.write("  19. Forms <br/>");
 document.write("  19.1 preventting form submission <br/>");
 let form = document.getElementById('user-form');
 form.addEventListener('submit', event =>{
    event.preventDefault();
 });
 document.write("<br/>");
 document.write("  19.2 Accessing Forms fields <br/>");
 let form2 = document.getElementById('my-form');
 form2.addEventListener('submit' , event2=>{
    let Name = form2.elements['fname'];
    let Password = form2.elements['lname'];
    document.write(Name.value, "<br/>", Password.value);
    event2.preventDefault();
 });
 document.write("<br/>");
 document.write("  19.3 showing validation errors <br/>");
 
 let form3 = document.getElementById('user-form');
 form3.addEventListener('submit', event3 => {
   
    let name = form3.elements['Name'];
    let userError = document.getElementById('user-error');
    if (name.value.length<4){
        userError.textContent = "The name must be greater than 4 character";
        userError.style.color ="red";
       name.style.borderColor = "red";
        name.focus();
        event3.preventDefault();
         
        
    }
 });
 document.write("</center>");
