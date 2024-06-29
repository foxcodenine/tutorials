    $ npm init -y

    $ npm i google-protobuf

    $ npm i @grpc/grpc-js

    $ npm i grpc-tools --save-dev

<!-- --------------------------------------------------------------- -->

    $ ./node_modules/.bin/grpc_tools_node_protoc --js_out=. --grpc_out=. dummy.proto