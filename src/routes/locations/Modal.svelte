<div class="modal">
    <div class="modal-body">
        <table>
            <tr>
                <td>Film Name: {data.filmName}</td>
                <td>Film Type : {data.filmType}</td>
            </tr>
            <tr>
                <td>Film Producer Name : {data.filmProducerName}</td>
                <td>District : {data.district}</td>


            </tr>
            <tr>
                <td>Film Director Name : {data.filmDirectorName}</td>
                <td>Address : {data.address}</td>
            </tr>
            <tr>
                <td>Start date : {data.startDate}</td>
                <td>End Date : {data.endDate}</td>

            </tr>
            <tr>
                <td>Year: {data.year}</td>
                <td>Source location id: {data.sourceLocationId}</td>
            </tr>

        </table>
        <div class="modal-footer">
        <button class="modal-button" on:click={close}>Close</button>
        </div>
    </div>
</div>


<style>
    .modal {
        background-color: white;
        width: 50%;
        height: 50%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .modal-body {
        padding: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
        margin-bottom: 20px;
    }

    td {
        padding: 10px;
        border: 1px solid lightgray;
    }

    .modal-footer {
        text-align: right;
    }

    .modal-button {
        background-color: lightgray;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .modal-button:hover {
        background-color: gray;
    }
</style>

<script>
    export let close;
    export let data;
</script>