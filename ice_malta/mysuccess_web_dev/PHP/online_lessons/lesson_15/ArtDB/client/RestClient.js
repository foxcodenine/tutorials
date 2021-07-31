$(document).ready(function () {
    loadArt();

    $('#artworkForm').submit(function (event) {
        addArt(event);
    });

    $('#artworkList').on('click', '.deleteArt', function (event) {
        deleteArt(event);
    });
});

function deleteArt(event) {
    $.ajax({
        url:'http://localhost/ArtDB/artwork/' + event.currentTarget.id,
        type: 'DELETE',
        success: function() {
            loadArt();
        }
    });
}

function addArt(event) {
    $.post('http://localhost/ArtDB/artwork', $('#artworkForm').serialize(),
        function() {
            loadArt();
        }
    );
    event.preventDefault();
}

function loadArt() {
    $('#artworkList tbody').empty();
    $.get('http://localhost/ArtDB/artwork', function(result) {

        let artworks = $.parseJSON(result);

        $.each(artworks, function(id, artwork) {
            
            let row = "<tr>";
            row += "<td>" + artwork.id + "</td>";
            row += "<td>" + artwork.title + "</td>";
            row += "<td>" + artwork.artist + "</td>";
            row += "<td>" + artwork.medium + "</td>";
            row += "<td>" + artwork.year + "</td>";
            row += "<td class='deleteArt' id='" + artwork.id + "'><a class='btn btn-danger' role='button' href='#'>";
            row += "<svg id=\"i-trash\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6\" /></svg>";
            row += "</a></td>";
            row += "</tr>";
            $('#artworkList tbody').append(row); 

        });
    });
}