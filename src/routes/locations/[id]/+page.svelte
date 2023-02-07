<script>
    import {onMount} from "svelte";
    //export let data;
    export let id;
    export const loadLocation = async (id) => {
        let baseUrl = "http://localhost:3000"
        const token = sessionStorage.getItem("token")
        console.log(token)
        console.log(id)
        const response = await fetch(`${baseUrl}/locations/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        return await response.json();
        // oneLocation = await response.json();
        // console.log(oneLocation)
    };

    let oneLocation = {};
    //
    onMount(async () => {
        oneLocation = await loadLocation(id);
    });
    console.log(oneLocation)
</script>

<table class="location-detail">
    <thead>
    <tr>
        <th> Film Name</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td> {oneLocation}</td>
    </tr>
    </tbody>
</table>