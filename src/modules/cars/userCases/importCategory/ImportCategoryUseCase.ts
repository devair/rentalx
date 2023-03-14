import fs from 'fs';
import csv  from 'csv-parser';

class ImportCategoryUseCase {

    execute(file: Express.Multer.File){
       
        const stream = fs.createReadStream(file.path);

        const parseFile = csv();
        
        stream.pipe(parseFile);

        parseFile.on('data',  async (line)=>{
            console.log(line);
        });
        
    }
}

export { ImportCategoryUseCase }