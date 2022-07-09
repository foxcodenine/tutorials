## ------ Set Project Privalages ---------------------------------------

    // setting g-id
    $ find . -type d -print0 | xargs -0 chmod 2775
    $ find . -type f -print0 | xargs -0 chmod 664

    // setting g-id
    $ find . -type d -print0 -exec chgrp foxdata {} \;
    $ find . -type f -print0 -exec chgrp foxdata {} \;