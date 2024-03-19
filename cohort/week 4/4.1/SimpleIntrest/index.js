async function calculateIntrest(){
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById('rate').value;
    let time = document.getElementById('time').value;
    let result = document.getElementById('result');

    try {
    let response = await fetch(
      `http://localhost:5000/simpleIntrest?principal=${encodeURIComponent(
        principal
      )}&rate=${encodeURIComponent(rate)}
      &time=${encodeURIComponent(time)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    let data = await response.json();
    result.innerHTML = `The simpleIntrest is ${data}`;
  } catch (error) {
    console.error("Error:", error);
    result.innerHTML = "An error occurred while fetching the sum";
  }
}