<script>
    var text = "Domo arigato!";
    report("Before defining functions");
    
    function useless(callbackfun) {
        callbackfun()
    }
    function gettext() {
        report("In getText function")
    };
   
    report("Before making all the calls");
    assert(useless(getText) === text,
    "The useless function works! " + text);
    report("After the calls have been made");
</script>