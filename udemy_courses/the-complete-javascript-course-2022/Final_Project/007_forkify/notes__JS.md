
### Document.createRange()

    let range = document.createRange();

    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);


### Range.createContextualFragment()


    var tagString = "<div>I am a div node</div>";

    var range = document.createRange();

    var documentFragment = range.createContextualFragment(tagString);

    console.log(documentFragment);

        <div>I am a div node</div>


### Node.isEqualNode()


    node.isEqualNode(otherNode);


### Node.firstChild

The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.


### JS .nodeType, .nodeName and .nodeValue


### Element.attributes

The Element.attributes property returns a live collection of all attribute nodes registered to the specified node.


### Element.getAttribute() & Element.setAttribute()

    let attribute = element.getAttribute(attributeName);

    Element.setAttribute(name, value);


### location.hash

    window.location.hash


    //-------------------

    <a id="myAnchor" href="/en-US/docs/Location.href#Examples">Examples</a>
    <script>
        var anchor = document.getElementById("myAnchor");
        console.log(anchor.hash); // Returns '#Examples'
    </script>


### Array.prototype.some()

The some() method tests whether at least one element in the array passes the test implemented by the provided function.


### Array.prototype.findIndex()

The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.



### Object.entries()

The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.



    const object1 = { a: 'somestring',  b: 42 };

    for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
    }


### Object.fromEntries()

The Object.fromEntries() method transforms a list of key-value pairs into an object.

    const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
    ]);

    const obj = Object.fromEntries(entries);

    console.log(obj);
    // expected output: Object { foo: "bar", baz: 42 }



### History.pushState()

    history.pushState(state, unused);
    history.pushState(state, unused, url);


    window.history.pushState(null, '', '#123456');



________________________________________________________________________

{
    key: value,
    ... (recipe.key && { key: recipe.key })
}