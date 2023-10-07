export async function Search(model = "", location = "", year = "", text = "") {
  console.log(`model at search: ${(model, location, year, text)})}`);

  try {
    const response = await fetch(
      `https://carautong.pythonanywhere.com/api/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"search": "${model} ${location} ${year} ${text}"}`,
      }
    );

    if (!response.ok) {
      // Handle non-successful response here
      console.error("Error:", response.status, response.statusText);
      return;
    }

    // Successful response
    const responseData = await response.json();
    console.log("Response:", responseData);
    return responseData;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
