
let container = document.getElementById('container')

function getPeople(userList) {
  userList.forEach(function(index) {
    let person = `<div>
                    <h3 class="name">Name: ${index.name}</h3>
                    <p>User Name: ${index.username}</p>
                    <p>Email: ${index.email}</p>
                    <p class="address">Address:</p>
                    <div class="addDetails">
                      <p>Street: ${index.address.street} </p>
                      <p>Suite: ${index.address.suite}</p>
                      <p>City: ${index.address.city}</p>
                      <p>ZipCode: ${index.address.zipcode}</p>
                      <p>Geo:</p>
                      <div class="geo">
                        <p>Latitude: ${index.address.geo.lat}</p>
                        <p>Longitude: ${index.address.geo.lng}</p>
                      </div>
                    </div>
                    <p>Phone: ${index.phone}</p>
                    <p>Website: ${index.website}</p>
                    <p>Company:</p>
                    <div>
                      <p>Name: ${index.company.name}</p>
                    </div>
                      <img src="http://maps.googleapis.com/maps/api/staticmap?center=${index.address.geo.lat},${index.address.geo.lng}&zoom=5&size=200x200&sensor=false">
                  </div>`

    container.innerHTML += person
  })
}

getPeople(users)

// let container = document.querySelector('.container')
//
// function getNews(newsToDisplay) {
//   newsToDisplay.articles.forEach(function(index){
//
//   let article = `
//                   <div class="individualNews">
//                   <h3 class="title">${index.title}</h3>
//                   <p class="author">by ${index.author}</p>
//                   <div class ="content">
//                     <img class="imageURL" src=${index.urlToImage}>
//                   <div class="articleInfo">
//                     <p class="description">${index.description}</p>
//                     <a class="url" href=${index.url}>Click for more</a>
//                     <p class="publishedAt">${new Date(index.publishedAt)}</p>
//                   </div>
//                   </div>
//                   </div>
//                   <div>
//                   <hr/>
//                   </div>`
//
//
//   container.innerHTML += article
//
//   })
//
// }
//
// getNews(news)
