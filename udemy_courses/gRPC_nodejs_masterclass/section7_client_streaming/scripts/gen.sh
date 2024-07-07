#!/bin/bash
# gen.sh

# Read the number of arguments passed to the script
argc=$#
# Store all arguments in an array named argv
argv=("$@")

# Loop through each argument (which should be project names)
for (( j = 0; j < argc; ++j )); do
  # Extract the project name from argv
  PROJECT="${argv[j]}"
  # Form the name of the .proto file (e.g., greet.proto)
  PROTO_FILE="${PROJECT}.proto"
  # Specify the directory containing .proto files for the project (e.g., greet/proto/)
  PROTO_DIR="${PROJECT}/proto/"

  # Print a message indicating which project's code is being generated
  echo "Generating for ${PROJECT}..."
  # List files in the proto directory for verification purposes
  ls -l "${PROTO_DIR}"

  # Use grpc_tools_node_protoc to generate code:
  # -I specifies the directory where .proto files are located
  # --js_out specifies the output directory and import style for generated JavaScript code
  # --grpc_out specifies the output directory for generated gRPC code
  # "${PROTO_DIR}${PROTO_FILE}" specifies the specific .proto file to process
  ./node_modules/.bin/grpc_tools_node_protoc \
    -I "${PROTO_DIR}" \
    --js_out=import_style=commonjs:"${PROTO_DIR}" \
    --grpc_out=grpc_js:"${PROTO_DIR}" \
    "${PROTO_DIR}${PROTO_FILE}"
done
