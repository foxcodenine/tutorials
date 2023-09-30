#!/bin/bash

# Define an associative array where keys are file IDs and values are desired filenames
declare -A file_mappings=(
    ["1n8IWe390k0T4B-qQdXJT_d2LAr6Dx3II"]="lesson_1.zip"
    ["1lQyMrpO1ukBjbh2mROX5FjLmAtCENhru"]="lesson_2.zip"
    ["1_rqzZeLyNoCXfPHUrqE_FVPcjGXyMntn"]="lesson_3.zip"
    ["1iUHKBoB15DptO8Bkq-dZO0r4Lr2KgR-g"]="lesson_4.zip"
    ["1Cl-YDuLv4p320IqFLf-i4O1dDO2c0Vxh"]="lesson_5.zip"
    ["1MbJbZu-41_N_EvHrQ1UaP5FDNf9LL1NC"]="lesson_6.zip"
    ["1gY3zo1Lyh6BoLrQwLSxIPpZkZZCU6LqP"]="lesson_7.zip"
    ["14bpH_3gItfnxTbvTx9t-00BYrGHzeqen"]="lesson_8.zip"
)

# Loop through each file ID and construct the download URL and desired filename
for file_id in "${!file_mappings[@]}"
do
    # Get the desired filename from the associative array
    desired_filename="${file_mappings[$file_id]}"
    
    # Construct the Google Drive download URL
    download_url="https://drive.google.com/uc?export=download&id=$file_id"
    
    # Use wget to download the file with the desired filename
    wget "$download_url" -O "$desired_filename"
    
    # Check if wget encountered an error (optional)
    if [ $? -ne 0 ]; then
        echo "Error downloading file with ID $file_id"
    else
        echo "Downloaded file with ID $file_id as $desired_filename"
    fi
done


