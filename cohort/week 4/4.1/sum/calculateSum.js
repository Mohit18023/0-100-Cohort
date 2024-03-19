// Add rebounce and throtlling 
// Debouncing:

// Debouncing is a technique used to ensure that a function is not executed repeatedly in a short period.
// It delays the execution of the function until after a certain amount of time has passed since the last time the function was invoked.
// When an event occurs, the function is scheduled to execute after a specified delay. If the event occurs again before the delay expires, the previous scheduled execution is canceled, and the function is rescheduled.
// Debouncing is commonly used in scenarios where you want to perform an action after a user has stopped interacting with a UI element (e.g., typing in a search box, resizing the window).

// Throttling:

// Throttling is a technique used to ensure that a function is not executed more than once in a specified interval.
// It limits the rate at which the function can be invoked, ensuring that it is not called too frequently.
// When an event occurs, the function is executed immediately if it hasn't been executed within the specified interval. If the function has been executed recently, subsequent invocations are ignored until the interval has passed.
// Throttling is useful in scenarios where you want to limit the frequency of certain actions to prevent performance issues or to comply with rate limits (e.g., scrolling, mousemove events).
let timeout=null; 

function debouncepopulateDiv(){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    //console.log("Input changed")
    // delay the execution of the function until after a certain amount of time has passed since the last time the function was invoked.
    clearTimeout(timeout);

    timeout = setTimeout(()=>{
        if((num1 !== null && num2 !== null) && (num1 !== "" && num2 !== "") && (num1 !== "undefined" && num2 !== "undefined")  && (num1 !== "NaN" && num2 !== "NaN") ){
            calculateSum();
        }
    },100);
}


async function calculateSum() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
  let result = document.getElementById("result");

  try {
    let response = await fetch(
      `http://localhost:5000/sum?num1=${encodeURIComponent(
        num1
      )}&num2=${encodeURIComponent(num2)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    let data = await response.json();
    result.innerHTML = `The sum is ${data}`;
  } catch (error) {
    console.error("Error:", error);
    result.innerHTML = "An error occurred while fetching the sum";
  }
}
