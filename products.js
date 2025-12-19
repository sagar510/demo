$.ajax({
    url: './products.json',
    type: 'GET',
    success: function (data) {
        loadData(data.products);
    },
    error: function (error) {
        console.log(`Error : ${error}`);
    }
});

function loadData (products) {
    $(products).each(function (idx, product) {
        var id = product.id;
        var name = product.name;
        var category = product.category;
        var price = product.price;
        var discount = product.discount;

        $('#rows').append(
            '<tr><td>' + id + '</td>' +
            '<td>' + name + '</td>' +
            '<td>' + category + '</td>' +
            '<td>' + price + '</td>' +
            '<td>' + discount + '</td></tr>' 
        );
    });

    
    $('#productsTable').DataTable({
        paging: true,       // Enable pagination
        searching: true,    // Enable search box
        ordering: true,     // Enable column sorting
        info: true,         // Show table info
        lengthMenu: [5, 10, 25, 50], // Rows per page options
        pageLength: 10,      // Default rows per page
        serverside: true,
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'category' },
            { data: 'price' },
            { data: 'discount' }
        ]
    });
}


 