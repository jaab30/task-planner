
$(".submitBtn").on("click", function (event) {
    event.preventDefault();

    newItem = {
        itemText: $("#itemInput").val(),
        completeBy: $("#dateTimeInput").val(),
        moreDetails: $("#moreDetailsText").val()
    }
    console.log(newItem)
    $.post("/additem", newItem)
        .then(function () {
            console.log("Item Inserted")
            location.reload()
        })

})

$(".checkBtn").on("click", function () {
    itemId = $(this).attr("value")
    var editItem = {
        completed: true
    }
    $.ajax({
        method: "PUT",
        url: "/checkItem/" + itemId,
        data: editItem
    })
        .then(function () {
            location.reload();
        })

})
$(".delBtn").on("click", function () {
    itemId = $(this).attr("value")
    $.ajax({
        method: "DELETE",
        url: "/deleteItem/" + itemId
    })
        .then(function () {
            location.reload();
        })

})
