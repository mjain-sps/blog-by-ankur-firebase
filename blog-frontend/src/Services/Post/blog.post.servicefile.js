export const handleBlogPost = async (postObject) => {
  try {
    const resp = await fetch("http://localhost:4000/api/add-post", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(postObject),
    });

    const message = await resp.json();
    return message;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;
    return errorMessage;
  }
};
