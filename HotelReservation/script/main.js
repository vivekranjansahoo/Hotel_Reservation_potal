
document.onload = loadInitial_data()

async function fetchData(){
    let response= await fetch('http://localhost:3000/Hotel_Details')
    let data= await response.json()
    return data;
}

 function showJobs(data){
        let jobContainer= document.getElementById('hotel')
        let jobHTML= ""
        data.forEach(function (job){
            jobHTML += `
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="box" >
            <img src="${job.photo}" width="250px" height="200px"/>
            <h3>Name: ${job.Name}</h3>
            <p>Status: ${job.BookingStatus}</p>
            <p>Location: ${job.location}</p>
            <button class="btn btn-warning mx-4">Details</button>
            <a href="bookhotel.html?id=${job.id}"><button class="btn btn-primary">Book Now </button></a>
          </div>
        </div>
    
            `
        });
        jobContainer.innerHTML = jobHTML
    }


async function loadInitial_data(){
    const data= await fetchData();
    showJobs(data);
}