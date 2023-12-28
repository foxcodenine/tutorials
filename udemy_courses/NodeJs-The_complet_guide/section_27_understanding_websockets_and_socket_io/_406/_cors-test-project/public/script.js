document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("createPosts").addEventListener("click", async () => {
        try {
            const inputTitle = document.getElementById("inputTitle");
            const inputContent = document.getElementById("inputContent");

            const response = await fetch("http://localhost:3000/feed/posts", {
                method: "POST",
                body: JSON.stringify({
                    title: inputTitle.value,
                    content: inputContent.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data);
            displayPosts(data.posts);
        } catch (error) {
            console.error("Error creating posts:", error);
        }
    });

    document.getElementById("fetchPosts").addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:3000/feed/posts");
            const data = await response.json();
            console.log(data);
            displayPosts(data.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    });

    function displayPosts(posts) {
        const postsContainer = document.getElementById("postsContainer");
        postsContainer.innerHTML = "";

        if (Array.isArray(posts)) {
            posts.forEach((post, index) => {
                const postElement = document.createElement("div");
                postElement.textContent = `Post ${index + 1}: ${post.title}`;
                postsContainer.appendChild(postElement);
            });
        } else {
            const errorMessage = document.createElement("div");
            errorMessage.textContent = "No posts found.";
            postsContainer.appendChild(errorMessage);
        }
    }
});
