<script>
    import {onMount} from "svelte";

    export let locations;
    export let filmType;
    export let filmProducerName;
    export let endDate;
    export let sourceLocationId
    export let filmName;
    export let district;
    export let filmDirectorName;
    export let address;
    export let startDate;
    export let year;
    import {goto} from '$app/navigation'

    const addLocation = async () => {
        const token = sessionStorage.getItem("token")
        console.log(token)
        const response = await fetch(`http://localhost:3000/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                filmType: filmType,
                filmProducerName: filmProducerName,
                endDate: endDate,
                filmName: filmName,
                district: district,
                filmDirectorName: filmDirectorName,
                address: address,
                startDate: startDate,
                year: year,
            }),
        });
        const data = await response.json();
        // let jsonResponse = response.json();
        console.log(data);
    }
</script>
<button class="goback" on:click={() => goto('/locations')}>Go back</button>
<form>

    <input
            bind:value={filmName}
            type="text"
            placeholder="Film name">
    <input
            bind:value={filmDirectorName}
            type="text"
            placeholder="Director Name">
    <input
            bind:value={district}
            type="text"
            placeholder="District">
    <input
            bind:value={endDate}
            type="text"
            placeholder="End Date">
    <input
            bind:value={filmProducerName}
            type="text"
            placeholder="Producer Name">
    <input
            bind:value={filmType}
            type="text"
            placeholder="Film Type">
    <input
            bind:value={sourceLocationId}
            type="text"
            placeholder="Source Location ID">
    <input
            bind:value={startDate}
            type="text"
            placeholder="Start Date">
    <input
            bind:value={year}
            type="text"
            placeholder="Year">


</form>
<button class="add" on:click={() => {
  addLocation();
  goto(`/locations`);}}>
    ADD
</button>

<style>

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        background-color: #f2f2f2;
        border-radius: 10px;
        width:80%;
        margin: 50px auto;
    }


    input[type="text"] {
        width: 100%;
        padding: 15px;
        margin-bottom: 20px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 3px #ddd;
    }

    input[type="text"]:focus {
        border-color: #555;
        box-shadow: 0 0 10px #555;
        outline: none;
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
</style>