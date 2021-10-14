// [ ] As a reader I can see a list of the 20 latest top news stories, loaded dynamically via api.
// [x] As a reader I can see a headline, image, writer, source, date, and body of each article.
// [ ] As a reader I can see the total number of stories currently shown.
// [x] As a reader I can see all the categories available.
// [ ] As a reader I can see click on a category and see stories in that category.
// [ ] As a reader I can see all the languages available.
// [ ] As a reader I can see click on a language and see stories in that language.
// [ ] As a reader I can click a link at the bottom of the page to load the next 20 stories. The page should not refresh; the stories should add to the bottom of the page.
// [ ] As a reader I can search for articles using a searchbar at the top of the page.
// [ ] As a reader I can see how long ago the story was published in a human-friendly format; e.g. "15 minutes ago". To accomplish this, we recommend you use momentjs. Load it into your page using cdnjs or jsdelivr (these are called CDNs)
// [ ] As a reader, I can easily read articles on the page when viewing from my mobile device.

const API_KEY = "9b01178f06014e4b1fc1e15de34f51c9";
const baseURL = "https://gnews.io/api/v4";
const path = "/top-headlines";

const query = `?token=${API_KEY}`;


// const fetchData = () =>{
//     const url = baseURL + path + query;
//     // console.log("this is url i use", url)
//     const fromFetch = fetch(url);
//     fromFetch.then((success)=> {
//         return success.json();
//     })
//     .then ((success)=> {
//         console.log(success.articles[5])
//     })
// };

const fetchAsync = async () =>{
    // console.log("this func runs")
    const url = baseURL + path + query;
    // console.log("use this url", url)
    let response = await fetch(url);
    // console.log("after success get from url", response)
    let data = await response.json();
    console.log("data object", data)
    const articles = data.articles;
    const htmlTitleArea = document.getElementById("titleArea")
    const htmlOutput = articles.map((singleArticle) => {
        console.log(singleArticle.keys)
        return renderArticle(singleArticle);
    })
    htmlTitleArea.innerHTML = htmlOutput.join("");
    return;
}

function renderArticle({title, description, image, publishedAt, source, url}) {
    return `
    <li>
    <div class="news-container">
    <h1>${title}</h1>
    <image src="${image}">
    <div  class="source-time">
    <h4>${source.name}</h4>
    <p>${publishedAt}</p>
    </div>
    <p>${description}</p>
    <a class="read-more-btn" href="${url}" target="_blank">Read more
    </a>
    </div>
    </li>
    `;
}

fetchAsync();