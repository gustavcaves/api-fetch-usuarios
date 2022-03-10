// var nombre = document.getElementById("nombre");
// var foto = document.getElementById("foto");
// var email = document.getElementById("email");
// var coordenadasLatitud = document.getElementById("coordenadas-latitud");
// var coordenadasLongitud = document.getElementById("coordenadas-longitud");

var display = document.getElementById("display");

function buscarPersonas(params) {
    display.innerHTML = "";
    fetch(`https://randomuser.me/api?format=json&gender=${params}&&results=10`)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            // (data.results[0])
            // nombre.innerHTML = data.results['0'].name.first;
            // foto.src = data.results['0'].picture.large;
            // email.innerHTML = data.results['0'].email;
            // coordenadasLatitud.innerHTML = data.results['0'].location.coordinates.latitude;
            // coordenadasLongitud.innerHTML = data.results['0'].location.coordinates.longitude;

            var personas = data.results;

            for (var persona of personas) {
                var registro = `
                    <tr>
                    <td>${persona.name.first} ${persona.name.last}</td>
                    <td><img src="${persona.picture.medium}"></td>
                    <td>${persona.email}</td>
                    <td>${persona.location.coordinates.latitude}</td>
                    <td>${persona.location.coordinates.longitude}</td>
                    </tr>
                    `;

                // var registro = `
                // <div class="card" style="width: 18rem;">
                //     <img id="foto" src="${persona.picture.medium}" class="card-img-top" alt="...">
                //     <div class="card-body">
                //         <h5 class="card-title" id="nombre">${persona.name.first} ${persona.name.last}</h5>
                //         <p class="card-text">Some Description</p>
                //     </div>
                //     <ul class="list-group list-group-flush">
                //         <li class="list-group-item" id="email">${persona.email}</li>
                //         <li class="list-group-item" id="coordenadas-latitud">${persona.location.coordinates.latitude}</li>
                //         <li class="list-group-item" id="coordenadas-longitud">${persona.location.coordinates.longitude}</li>
                //     </ul>
                // </div>

                // `;

                display.innerHTML += registro;
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}