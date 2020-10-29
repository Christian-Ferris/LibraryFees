$(document).ready(
    function ()
    {
        $("button").click(calculateTotal);

        function calculateTotal() {
            //Gather input for id="daysLate"
            var daysLate = $("#daysLate").val();
            daysLate = parseInt(daysLate);

            //Gather input for id="books"
            var books = $("#books").val();
            books = parseInt(books);

            //Gather input for id="dvds"
            var dvds = $("#dvds").val();
            dvds = parseInt(dvds);

            /*
            PERFORM CALCULATIONS AND DISPLAY OUTPUT
            */

            //late fee for the books
            var bookFee = daysLate*0.25*books;

            //late fee for dvds
            var dvdFee = daysLate*0.50*dvds;

            //total fee
            var total = bookFee+dvdFee;

            //make sure it has two decimal places
            var totalDisplay = total.toFixed(2);

            //update span text to total
            $("#total").text(totalDisplay);

            //unhide results
            $(".output").show();
        }
    }
)