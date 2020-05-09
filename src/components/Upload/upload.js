import React, { Component } from 'react';
import CenteredGrid from './../UI/Grid/Grid'
// import entire SDK
import AWS from 'aws-sdk';
// import individual service
import S3 from 'aws-sdk/clients/s3';

class UploadFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...', 
            fileName:null,
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        let fileName = this.state.fileName;
        console.log('===', fileName);
        // console.log('myfile', myFile);
        const wasabiEndpoint = new AWS.Endpoint('s3.wasabisys.com');
//         access-key= 2O13Z6ORFQ82UA930F7U
// secret-key= OPSjd1RfgJysj61Mzun9PznDOtg7WFuF07jR41Dz


        const s3 = new AWS.S3({
            region: 'us-west-1',
            endpoint: wasabiEndpoint,
            accessKeyId: '2O13Z6ORFQ82UA930F7U',
            secretAccessKey: 'OPSjd1RfgJysj61Mzun9PznDOtg7WFuF07jR41Dz',
        });

        const params = {
            Bucket: 'trial123', // pass your bucket name
            Key: fileName, // file will be saved as testBucket/contacts.csv
            Body: 'Testing'
          };
          console.log(params);
          s3.putObject(params, (err, data) => {
              if(err){
                  console.log(err);
              }
              console.log(data);
          })
        //   s3.upload(params, function (s3Err, data) {
        //     if (s3Err) {
        //       console.log(s3Err);
        //     }
        //     console.log(data);
        //   });

        // this.setState({data: 'Data updated...'})
    }
    handleFileChange(event){
      console.log(event.target.files);
      let filename;
      let data = event.target.files;
      for(let i = 0; i < data.length;i++){
          console.log(data[i].name);
          filename = data[i].name;
      }
      this.setState({fileName:filename})


    }
    
    render() {
        return (

            <div>
                <CenteredGrid>
                    <input type="file" id="file" onChange={(e) => this.handleFileChange(e)} />
                    <button onClick={this.updateState}>Upload File</button>

                </CenteredGrid>

            </div>
        );
    }
}

export default UploadFile;