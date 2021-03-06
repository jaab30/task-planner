
// When submit button is clicked
$(".submitBtn").on("click", event => {
    event.preventDefault();
    // validation for empty form
    if ($("#itemInput").val() === "") {
        $(".inputItemValidation").text("Please enter a To Do Item")

    } else if ($("#dateTimeInput").val() === "") {
        $(".inputDateValidation").text("Please enter a Date")
    } else {
        // create Objec with form input
        const newItem = {
            itemText: $("#itemInput").val(),
            completeBy: $("#dateTimeInput").val(),
            moreDetails: $("#moreDetailsText").val()

        }
        // send post request with data information to backend
        $.post("/api/additem", newItem)
            .then(() => location.reload())
    }
})
//view details from each todo list item
$(".infoBtn").on("click", function () {
    let itemId = $(this).attr("value")
    $.get("/api/view/" + itemId, data => {
        $(".itemDetailTitle").text(data[0].item)
        $(".itemDetailDetails").text(data[0].details)
        $(".itemDetailDate").text(moment(data[0].to_be_completed_by).add(1, 'days').format("MMMM Do YYYY"))
        $(".editBtn").attr("value", data[0].id)
        $(".saveBtn").attr("value", data[0].id)
    })
})
//edit an item for the todo list
$(".editBtn").on("click", function () {
    let itemId = $(this).attr("value")
    $.get("/api/view/" + itemId, data => {
        $(".itemDetailTitle").html("<input type='text' class='form-control itemDetailTitleInput' size='50' value='" + data[0].item + "'>")
        $(".itemDetailDetails").html("<textarea class='form-control itemDetailDetailsInput' rows='3'>" + data[0].details + "</textarea>")
        $(".itemDetailDate").html("<input class='form-control itemDetailDateInput' type='date' value='" + moment(data[0].to_be_completed_by).add(1, 'days').format("YYYY-MM-DD") + "' id='dateTimeInput'>")
    })
})

// save changes to todo list item
$(".saveBtn").on("click", function () {
    itemId = $(this).attr("value")
    let itemTitleInput = $(".itemDetailTitleInput").val()
    let itemDetailsInput = $(".itemDetailDetailsInput").val()
    let itemDateInput = $(".itemDetailDateInput").val()

    const updateItem = {
        itemTitle: itemTitleInput,
        itemDetails: itemDetailsInput,
        itemDate: itemDateInput
    }
    $.ajax({
        method: "PUT",
        url: "/api/updateItem/" + itemId,
        data: updateItem
    })
        .then(() => location.reload())
})
// update todo list item to "done" when checked
$(".checkBtn").on("click", function () {
    let itemId = $(this).attr("value")
    const editItem = {
        completed: true
    }
    $.ajax({
        method: "PUT",
        url: "/api/checkItem/" + itemId,
        data: editItem
    })
        .then(() => location.reload())
})
// delete item from todo list
$(".delBtn").on("click", function () {
    let itemId = $(this).attr("value")
    $.ajax({
        method: "DELETE",
        url: "/api/deleteItem/" + itemId
    })
        .then(() => location.reload())
})
