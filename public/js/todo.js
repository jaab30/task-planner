
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

$(".infoBtn").on("click", function () {
    itemId = $(this).attr("value")
    $.get("/view/" + itemId, function (data) {

        console.log(data[0])
        $(".itemDetailTitle").text(data[0].item)
        $(".itemDetailDetails").text(data[0].details)
        $(".itemDetailDate").text(moment(data[0].to_be_completed_by).format("MMMM Do YYYY"))
        $(".editBtn").attr("value", data[0].id)
    })
})

$(".editBtn").on("click", function () {
    itemId = $(this).attr("value")
    console.log(itemId)
    $.get("/view/" + itemId, function (data) {

        console.log(data[0])
        $(".itemDetailTitle").html("<input type='text' class='form-control' size='50' value='" + data[0].item + "'>")
        $(".itemDetailDetails").html("<textarea class='form-control' rows='3'>" + data[0].details + "</textarea>")
        $(".itemDetailDate").html("<input class='form-control' type='date' value='" + moment(data[0].to_be_completed_by).format("YYYY-MM-DD") + "' id='dateTimeInput'>")


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
