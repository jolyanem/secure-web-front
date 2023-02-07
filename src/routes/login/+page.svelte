<svelte:head>
    <title> Locations </title>
</svelte:head>

<script>

    /** @type {import('./$types').PageData} */
    export let data;
    let detailLocation = data.response;

    import {onMount} from "svelte";
    import {goto} from '$app/navigation';

    export let locations = []
    export let id;

    const baseUrl = 'http://localhost:3000';
    onMount(async () => {
        const token = sessionStorage.getItem("token")
        console.log(token)
        const response = await fetch(`${baseUrl}/locations`, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`},
        });
        locations = await response.json()
        console.log(locations)
    })

    let currentPage = 0;
    let itemsPerPage = 5;

    function previousPage() {
        currentPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
    }

    function nextPage(){
        currentPage = currentPage + 1 >= locations.length / itemsPerPage ? currentPage : currentPage +1;
    }

    const deleteLocation = async (id) => {
        const token = sessionStorage.getItem("token")
        console.log(token)
        const response = await fetch(`${baseUrl}/locations/`+id, {
            method: 'DELETE',
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`},
        });
        locations = await response.json()
        console.log(locations)
    };

</script>

<button class="add" on:click={() => goto('/add_locations')}>Add</button>

<table class="location-table">
    <thead>
    <tr>
        <th class="title1" > Nom du film </th>
        <th class="title2"> Producteur </th>
        <th>  </th>
    </tr>
    </thead>

    <tbody>
    {#each locations as location}
        <tr>
            <td>{location.filmName}</td>
            <td>{location.filmDirectorName}</td>
            <td>
                <button class="details" on:click={() => goto(`/locations/${location._id}`)}>Details</button>
                <button class="retrieve" on:click={() => goto('/retrieve_locations')}>Retrieve</button>
                <button class="delete"on:click={() => deleteLocation(location._id)}>Delete</button>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<button on:click="{previousPage()}"> Précédent </button>
<button on:click="{nextPage()}"> Suivant </button>

<style>
    .title1 {
        font-family: Impact;
        font-weight: normal;
    }
    .title2 {
        font-family: Impact;
        font-weight: normal;
    }
    .location-table {
        width: 85%;
        border-collapse: collapse;
        text-align: center;
        margin: auto;
    }

    .location-table th, .location-table td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .location-table th {
        background-color: plum;
    }

    .location-table tr:hover {
        background-color: slategrey;
    }

    .details {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        /*background-color: #328f8a;*/
        /*background-image: linear-gradient(45deg, #800080, #7f00ff);*/
        /*width: 100%;*/
        border: 0;
        border-radius: 4px;
        padding: 5px;
        color:black;
        /*color: #FFFFFF;*/
        font-size: 14px;
        cursor: pointer;
    }
    .retrieve{
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        /*background-color: #328f8a;*/
        /*background-image: linear-gradient(45deg, #800080, #7f00ff);*/
        /*width: 100%;*/
        border: 0;
        border-radius: 4px;
        padding: 5px;
        color:black;
        /*color: #FFFFFF;*/
        font-size: 14px;
        cursor: pointer;
    }
    .delete{
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        /*background-color: #328f8a;*/
        /*background-image: linear-gradient(45deg, #800080, #7f00ff);*/
        /*width: 100%;*/
        border: 0;
        border-radius: 4px;
        padding: 5px;
        color:black;
        /*color: #FFFFFF;*/
        font-size: 14px;
        cursor: pointer;
    }
</style>