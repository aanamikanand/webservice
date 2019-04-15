'use strict';

module.exports = (data) => {
    //format the csv data
    return formatter(data);
};

const formatter = (data) => {
    
    let result = '';
    const space = ' ';
    const lineDelimiter = '\n';
    
    try{ 
        const rows = data.split(lineDelimiter);

        while(rows[0]) {
            let row = '';
            const line = rows.shift();
            line.split(',').map(a => { 
                row += a.replace('"','[').replace('"',']');
                row += space;
            });
            result += row;
           result += lineDelimiter;
        }
    }
    catch(error) {
        //log the error 
        //console.error(error);
    }
    return result;
};