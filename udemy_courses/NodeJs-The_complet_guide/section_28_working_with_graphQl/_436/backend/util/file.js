const path = require('path');
const fs = require('fs');



function clearImage (filePath) {
    try {    
        filePath = path.join(__dirname, '..', filePath);
        fs.unlink(filePath, err => {
            if (err) {
                    console.error('Error occurred while deleting the file:', err);
                } else {            
                console.log('File deleted successfully');
            }
        });
    }
    catch (err) {
        console.info('! app.clearImage !');
        err.statusCode = err.statusCode ?? 500;
        throw err;  
    }
}

exports.clearImage = clearImage;