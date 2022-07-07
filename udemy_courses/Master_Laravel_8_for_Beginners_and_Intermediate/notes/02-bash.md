## ------ Set Project Privalages ---------------------------------------

    // setting g-id
    $ find /path/to/base/dir -type d -print0 | xargs -0 chmod 2775
    $ find /path/to/base/dir -type f -print0 | xargs -0 chmod 664

    // setting g-id
    $ find /path/to/base/dir -type d -print0 -exec chgrp foxdata {} \;
    $ find /path/to/base/dir -type f -print0 -exec chgrp foxdata {} \;