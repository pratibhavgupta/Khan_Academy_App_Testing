// const childProcess = require("child_process");
// const { exec } = require('child_process');

// class Start_Emu_Adb{

//     RunExe(file_path){

        // var shell = new ActiveXObject("WScript.Shell");
        // wshShell.Run(`${file_path}`);
        // var path = `${file_path}`;
    
        // shell.run(path,1,false);

        // var oShell = WScript.CreateObject("WScript.Shell");
        // oShell.Exec(`start ${file_path}`);

    //     var runnableScript = exec(`${file_path}`,
    // (error, stdout, stderr) => {
    //     console.log(stdout);
    //     console.log(stderr);
    //     if (error !== null) {
    //         console.log(`exec error: ${error}`);
    //     }
    // });


    // const bash_run = childProcess.spawn('/bin/bash', [file_path]);
//     exec(`"${file_path}"`, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`Error executing the batch file: ${error}`);
//           return;
//         }
      
//         console.log('Batch file executed successfully.');
//         console.log('Output:', stdout);
//       });
    
//     }
// }

const { exec } = require('child_process');

// Replace "path/to/your/batch/file.bat" with the actual path to your batch file
const batchFilePath = 'path/to/your/batch/file.bat';

exec(`"${batchFilePath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing the batch file: ${error}`);
    return;
  }

  console.log('Batch file executed successfully.');
  console.log('Output:', stdout);
});

// module.exports=new Start_Emu_Adb();