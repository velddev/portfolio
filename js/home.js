/// -- Set up

var skills = [
    {
        title: "Backend Programmer",
        tags: ["Docker", "Microservices", "NodeJS", "Asp.Net", "RabbitMQ", "web", "webapp", "app"],
        icon: "gamepad",
    },
    {
        title: "Database Engineer",
        tags: ["SQL", "Redis", "PostgreSql", "MySQL", "Engineer"],
        icon: "database",
    },
    {
        title: "Frontend Programmer",
        tags: ["web", "programmer", "website", "design"],
        icon: "desktop",
    },
    {
        title: "Game Programmer",
        tags: ["Engine", "Graphics"],
        icon: "gamepad",
    },
    {
        title: "Lead Programmer",
        tags: ["Leadership", "Project", "Manager"],
        icon: "chart-bar",
    },
    {
        title: "Logo Designer",
        tags: ["Logo", "Design", "Sketch", "Mockup", "Branding"],
        icon: "pencil",
    },
    {
        title: "Translator",
        tags: ["Dutch", "English", "Translator"],
        icon: "language"
    },
    {
        title: "UI Designer",
        tags: ["UI", "Web", "App", "Adobe XD", "Mocking", "website"],
        icon: "pencil",
    },
]


document.addEventListener("DOMContentLoaded", function () {
    let contentDiv = document.getElementById("landing-content");

    for(var i = 0; i < skills.length; i++)
    {
        var d = document.createElement("div");
        d.id = skills[i].title;

        d.classList.add("button");
        d.classList.add("pushed");
        d.classList.add("is-rounded");
        d.classList.add("is-outlined");
        d.classList.add("is-white");
        d.classList.add("is-smooth");

        if(skills[i].icon)
        {
            var icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-" + skills[i].icon);
            d.appendChild(icon);
        }

        d.append(skills[i].title);

        contentDiv.appendChild(d);
    }
}, false);

/// -- Update/Search matches.

var options = {
    id: "title",
    threshold: 0.4,
    keys: [{
        name: 'tags',
        weight: 0.3
    }, {
        name: 'title',
        weight: 0.7
    }]
};

var fuse = new Fuse(skills, options)
  
var searchBar = document.getElementById("landing-search-bar");
searchBar.oninput = function (c) {
    let value = c.srcElement.value;
    if(value == null || value.trim() === '')
    {
        let content = document.getElementById("landing-content");
        for(var i = 0; i < content.childElementCount; i++)
        {
            content.children[i].classList.remove("is-unfocused");
        }
        return;
    }

    var result = fuse.search(c.srcElement.value);
    
    for(var i = 0; i < skills.length; i++)
    {
        if(result.includes(skills[i].title))
        {
            document.getElementById(skills[i].title).classList.remove("is-unfocused");
        }
        else
        {
            document.getElementById(skills[i].title).classList.add("is-unfocused");
        }
    }
}