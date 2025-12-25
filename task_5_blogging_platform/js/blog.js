const blogForm = document.getElementById("blogForm");
const blogContainer = document.getElementById("blogContainer");

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

if (blogForm) {
  blogForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const blog = {
      id: Date.now(),
      title: blogTitle.value,
      author: blogAuthor.value,
      category: blogCategory.value,
      content: blogContent.value
    };

    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.href = "index.html";
  });
}

if (blogContainer) {
  blogContainer.innerHTML = blogs.map(blog => `
    <div class="blogCard">
      <h3>${blog.title}</h3><br>
      <p><strong>${blog.author}</strong> | ${blog.category}</p><br>
      <p>${blog.content.substring(0, 120)}...</p><br>
      <div class="blogActions">
        <button onclick="deleteBlog(${blog.id})">Delete</button>
      </div>
    </div>
  `).join("");
}

function deleteBlog(id) {
  blogs = blogs.filter(blog => blog.id !== id);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  location.reload();
}
