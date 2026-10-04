const projects = [
    {
        title: "A BEAUTIFUL TITLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo est, fringilla interdum lacus aliquam, cursus commodo odio. Aenean orci tellus, rhoncus eu ipsum eget, rhoncus ornare dolor. Nunc in nibh ut nibh luctus finibus ut at odio. Nullam nunc orci, condimentum non mollis non, iaculis eu nisi. Integer venenatis diam quis magna bibendum, sed mollis ligula suscipit. Morbi tempor nunc nec elementum venenatis. Nunc et pulvinar mauris. Vivamus faucibus velit id mi congue, sit amet sagittis ipsum lacinia. Morbi mollis erat magna,eu vulputate eros egestas vestibulum. Ut tellus sapien, volutpat et lobortis vel, hendrerit sit amet odio.",
        image: "images/NickLogo.png",
        category: "Web"
    },
    {
        title: "A BEAUTIFUL SECOND TITLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo est, fringilla interdum lacus aliquam, cursus commodo odio. Aenean orci tellus, rhoncus eu ipsum eget, rhoncus ornare dolor. Nunc in nibh ut nibh luctus finibus ut at odio. Nullam nunc orci, condimentum non mollis non, iaculis eu nisi. Integer venenatis diam quis magna bibendum, sed mollis ligula suscipit. Morbi tempor nunc nec elementum venenatis. Nunc et pulvinar mauris. Vivamus faucibus velit id mi congue, sit amet sagittis ipsum lacinia. Morbi mollis erat magna,eu vulputate eros egestas vestibulum. Ut tellus sapien, volutpat et lobortis vel, hendrerit sit amet odio.",
        image: "images/NickLogo.png",
        category: "Game"
    },
    {
        title: "A BEAUTIFUL THIRD TITLE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam justo est, fringilla interdum lacus aliquam, cursus commodo odio. Aenean orci tellus, rhoncus eu ipsum eget, rhoncus ornare dolor. Nunc in nibh ut nibh luctus finibus ut at odio. Nullam nunc orci, condimentum non mollis non, iaculis eu nisi. Integer venenatis diam quis magna bibendum, sed mollis ligula suscipit. Morbi tempor nunc nec elementum venenatis. Nunc et pulvinar mauris. Vivamus faucibus velit id mi congue, sit amet sagittis ipsum lacinia. Morbi mollis erat magna,eu vulputate eros egestas vestibulum. Ut tellus sapien, volutpat et lobortis vel, hendrerit sit amet odio.",
        image: "images/NickLogo.png",
        category: "Web"
    }
];

const container = document.getElementById("projects-container");
const searchInput = document.getElementById("projectSearch");
const sortSelect = document.getElementById("projectSort");


function displayProjects(projectList) {
    container.innerHTML = "";

    projectList.forEach(project => {
        const section = document.createElement("section");
        section.classList.add("project");

        const leftSection = document.createElement("div");
        leftSection.classList.add("leftSection");

        const title = document.createElement("h1");
        title.classList.add("small");
        title.textContent = project.title;

        const rightSection = document.createElement("div");
        rightSection.classList.add("rightSection");

        const description = document.createElement("p");
        description.textContent = project.description;

        const image = document.createElement("img");
        image.classList.add("projectImage");
        image.src = project.image;
        image.alt = project.title;

        leftSection.appendChild(title);
        rightSection.appendChild(description);

        section.appendChild(leftSection);
        section.appendChild(rightSection);
        section.appendChild(image);

        container.appendChild(section);
    });
}



function updateProjects() {
    const searchText = searchInput.value.toLowerCase();

    let filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.category.toLowerCase().includes(searchText)
    );

    if (sortSelect.value === "az") {
        filteredProjects.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    if (sortSelect.value === "za") {
        filteredProjects.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    displayProjects(filteredProjects);
}

searchInput.addEventListener("input", updateProjects);
sortSelect.addEventListener("change", updateProjects);

displayProjects(projects);