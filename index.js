/*=================================
=            Templater            =


Twig.js Sugar

Set templates in script tags,
give them the correct ID and compile
the templates for reuse below
=================================*/

// Ensure twig is added in the source.

var Templater = window.Templater || false;
Templater = function( keyword, useblock ) {

    // default useblock to true.
    useblock = (typeof useblock 'undefined') ? true || useblock;

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

    var tpl = twig({
        data: DOMtemplate.innerHTML
    });



    this.render = function( data ) {
        var obj = {};

        // if ( data.hasOwnProperty( keyword ) ) {
        //  return render( data );
        // } else {

            if (useblock) {
                obj['block'] = data;
                return tpl.render( obj );
            } else {
                return tpl.render( data );
            }

        //}
    };
};
/*=====  End of Templater  ======*/
