let input = document.querySelector(".search-box input");
let getButton = document.querySelector(".search-box button");
let reposBox = document.getElementById("repo-list");
getButton.onclick = () => {
  getRepos();
};
input.addEventListener("keydown", e => {
  if (e.key === "Enter") getRepos();
});


function getRepos() {
  if (input.value.trim() === "") {
    reposBox.innerHTML =
      "<span>Input Field Is Empty, Please Enter A GitHub Username First.</span>";
    return;
  } else {
    reposBox.innerHTML = "<div id='loader'><span></span></div>";
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        reposBox.innerHTML = "";

        if (!Array.isArray(data) || data.length === 0) {
          reposBox.innerHTML = "<span>No Results Found</span>";
          return;
        }

        data.forEach((repo) => {
          let mainCard = document.createElement("div");

          mainCard.classList.add("repo-card");

          mainCard.innerHTML = `
                    <div class="repo-info">
                        <div class="avatar"><img src="${repo.owner.avatar_url}"></div>
                        <div>
                            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                            <p>${repo.description ? repo.description : "No Description"}</p>
                        </div>
                    </div>
                    <div class="repo-stats">
                        <span>★ ${repo.stargazers_count}</span>
                        <span class="language-tag">${repo.language || "N/A"}</span>
                    </div>
                `;

          reposBox.append(mainCard);
        });
      })
      .catch((err) => {
        console.error(err);
        reposBox.innerHTML = "<span>No Results Found</span>";
      });
  }
}
