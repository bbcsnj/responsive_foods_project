    /* Create a 'const' variable called icons  - this can't be reassigned */
    /*  
    The Document method querySelectorAll() returns a static (not live) NodeList 
    representing a list of the document's elements that match the specified group of selectors. 
    */

const icons = document.querySelectorAll('.section-1-icons-i')

    /*  
    The setInterval() method, offered on the Window and Worker interfaces, 
    repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
    This method returns an interval ID which uniquely identifies the interval, 
    so you can remove it later by calling clearInterval(). 
    Time is in milliseconds. 1 second = 1000 milliseconds.
    setInterval(code)
    setInterval(code, delay)

    setInterval(func)
    setInterval(func, delay)
    setInterval(func, delay, arg0)
    setInterval(func, delay, arg0, arg1)
    setInterval(func, delay, arg0, arg1, /* … ,*/ argN)
    */
    /*
    i will be used as a counter - the let variable assignment means it will be changed
    */
let i = 1

setInterval(() => {

   i ++
    
    /*  
    The Document method querySelector() returns the first Element within the document that 
    matches the specified selector, or group of selectors. 
    If no matches are found, null is returned. 
    */
  
  const icon = document.querySelector('.section-1-icons.change')
  
    /*  
    The Element.classList is a read-only property that returns a live DOMTokenList collection 
    of the class attributes of the element. This can then be used to manipulate the class list.
    Using classList is a convenient alternative to accessing an element's list of classes 
    as a space-delimited string via element.className.
    A DOMTokenList representing the contents of the element's class attribute. 
    If the class attribute is not set or empty, it returns an empty DOMTokenList, 
    i.e. a DOMTokenList with the length property equal to 0.
    Although the classList property itself is read-only, 
    you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.
    */
  
  icon.classList.remove('change')
  
    /*  
    The Element.nextElementSibling read-only property returns the element immediately 
    following the specified one in its parent's children list, or null if 
    the specified element is the last one in the list. 
    */  
  if (i > icons.length) {
    icons[0].classList.add('change')
    i = 1
  }
  else {
    icon.nextElementSibling.classList.add('change')      
  }
    
    /*  
    If you run it at first with .remove and .add you will get an error at the end of the list 
    To fix this within the constant runtime of setInterval you need to restart it when
    it reaches the end of the list - counting and an if-else statement will fix this 
    */
  
}, 4000)  
