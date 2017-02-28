/*=================================
=            Templater            =

Swig.js Sugar

Set templates in script tags,
give them the correct ID and compile
the templates for reuse below
=================================*/
var Templater = window.Templater || false;
Templater = function( keyword ) {

    var DOMtemplate = document.getElementById('tpl-' + keyword);
    this.key = keyword;

    if (!DOMtemplate) {
        // Still function as a template returning a blank string,
        // but warn and this way we don't break the whole app.
        console.warn("Template " + keyword + " was not in the document source");
        this.render = function() {
            return '';
        };

        return false;
    }

    var render = swig.compile( DOMtemplate.innerHTML );


    this.render = function( data ) {
        var obj = {};

        // if ( data.hasOwnProperty( keyword ) ) {
        //  return render( data );
        // } else {
            obj['block'] = data;
            return render( obj );
        //}
    };
};
/*=====  End of Templater  ======*/
