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
    import Modal from './Modal.svelte';
    let showModal = false;



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
        console.log(data.user)
    })


    //const token = sessionStorage.getItem("token")
    // const base64Url = token.split('.')[1];
    // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    // }).join(''));
    // const payload = JSON.parse(jsonPayload);
    // let roles = payload.role;


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
        window.location.reload();
    };

    let currentPage = 1;
    let itemsPerPage = 5;

    function previousPage() {
        currentPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
    }

    function nextPage(){
        currentPage = currentPage + 1 >= locations.length / itemsPerPage ? currentPage : currentPage +1;
    }

</script>

<!--{#if roles === "admin"}-->
<button class="add" on:click={() => goto('/add_locations')}>Add</button>
<!--{/if}-->

<button class="logout" on:click={() => goto('/login')}>Log Out</button>

<table class="location-table">
    <thead>
    <tr>
        <th class="title1" > Nom du film </th>
        <th class="title2"> Producteur </th>
        <th>  </th>
    </tr>
    </thead>

    <tbody>
    {#each locations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as location}
        <tr>
            <td on:click={() => showModal = {data:location}}>{location.filmName}</td>
            <td>{location.filmDirectorName}</td>
            <td>
                <!--{#if roles === "admin"}-->
                <button class="retrieve" on:click={() => goto('/locations')}>Retrieve</button>
                <button class="delete"on:click={() => deleteLocation(location._id)}>Delete</button>
                <!--{/if}-->
            </td>
        </tr>
    {/each}
    </tbody>

</table>

<div class="buttons">
    <button class="previous" on:click={previousPage}>Previous</button>
    <button class="next" on:click={nextPage}>Next</button>
</div>


{#if showModal}
    <Modal close={() => showModal = false} data={showModal.data} />
{/if}


<style>

    .logout {
        padding: 10px 20px;
        background-color: lightgrey;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 100px;
        margin: 0 auto;
    }

    .add {
        padding: 10px 20px;
        background-color: lightgrey;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 100px;
        margin: 0 auto;
    }

    .logout:hover {
        background: lavender;
    }

    .add:hover {
        background-color: lavender;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    .previous, .next {
        padding: 10px 20px;
        background-color: lightgray;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .previous:hover, .next:hover {
        background-color: gray;
    }


    .title1 {
        font-family: Impact;
        font-weight: normal;
    }
    .title2 {
        font-family: Impact;
        font-weight: normal;
    }
    .location-table {
        width: 100%;
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
        background-color: blanchedalmond;
    }

    .location-table tr:hover {
        background-color: slategrey;
    }

    .retrieve{
        font-family: "Bookman Old Style", serif;
        text-transform: uppercase;
        outline: 0;
        border: 0;
        border-radius: 4px;
        padding: 5px;
        color:black;
        font-size: 14px;
        cursor: pointer;
    }
    .delete{
        font-family: "Bookman Old Style", serif;
        text-transform: uppercase;
        outline: 0;
        border: 0;
        border-radius: 4px;
        padding: 5px;
        color:black;
        font-size: 14px;
        cursor: pointer;
    }


</style>

