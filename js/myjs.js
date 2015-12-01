console.log("ciao")

$( ".lavoro1" ).click(function() {
  $( ".item1" ).addClass( "active" );
  $( ".item2" ).removeClass( "active" );
  $( ".item3" ).removeClass( "active" );
  $( ".item4" ).removeClass( "active" );
});

$( ".lavoro2" ).click(function() {
  $( ".item2" ).addClass( "active" );
  $( ".item1" ).removeClass( "active" );
  $( ".item3" ).removeClass( "active" );
  $( ".item4" ).removeClass( "active" );
});

$( ".lavoro3" ).click(function() {
  $( ".item3" ).addClass( "active" );
  $( ".item1" ).removeClass( "active" );
  $( ".item2" ).removeClass( "active" );
  $( ".item4" ).removeClass( "active" );
});

$( ".lavoro4" ).click(function() {
  $( ".item4" ).addClass( "active" );
  $( ".item1" ).removeClass( "active" );
  $( ".item2" ).removeClass( "active" );
  $( ".item3" ).removeClass( "active" );
});