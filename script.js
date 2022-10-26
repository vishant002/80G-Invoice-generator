// async returnpdf(toprint){
//     return html2pdf().from(toprint).toPdf().output('blob');
// }

// async printPDF() {
//     // let { options, content } = await this.createCanvass()
//     let worker = html2pdf().from(content).toPdf().output('blob').then( {
//         return : worker
//       })
//     }
// const uploadconfirm =
 document.getElementById('uploadconfirm').addEventListener('click', ()=>{
    Papa.parse(document.getElementById('uploadfile').files[0], {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            // var html = ``;
            // let worker = new Array(2);
            console.log(results);
            let printable = new Array(2);
            // let pdf2;
            let pdf = new Array(2);
            for(var i = 0; i < 2; i++){

                // var doc = document.createElement('html');


                pdf[i] = `
                    <nav class="navbar bg-light">
                        <div class="container-fluid">
                          <a class="navbar-brand" href="#">
                            <img src="evolve.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top">
                            Evolve
                          </a>
                
                        <p class="float-end">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quaerat sunt quam id ullam natus ut. Commodi saepe voluptate hic veniam dolorum, minus tenetur fugiat. Nam molestiae vero alias facere? </p>          
                        </div>
                      </nav>
                
                      <p class="">Receipt No.: GI-IN-LC62A196133A3C0</p>
                      <p>Dear ${results.data[i].Work},</p>
                      <p>We have received your donation of ₹486.00. Thank you for your generosity<br>The details of the donation are mentioned below
                        </p>
                
                     <div class="container">
                        <h2>Donation/Tax Benefit Details</h2>
                        <p>(Reference No.: LC62a196133a3c0)</p>
                        <h1>[Amount: ${results.data[i].number}]</h1>
                        <p>Donations through Give Foundation, registered under section 80G of India's Income Tax Act, 1961 are tax-deductible</p>
                     </div>   
                    `;
            }

            // printable[0] = html2pdf().from(pdf[0]).toPdf().output('blob');
            // printable[1] = html2pdf().from(pdf[1]).toPdf().output('blob');
            

            for(var i = 0; i < 2; i++){
              html2pdf().from(pdf[i]).save("pdf" + {i});
            }
            // pdf.forEach(element => {
            //   element.save("pdf" + );
            // });
        }
    })
})



window.onload = function(){
    document.getElementById('download').addEventListener('click', ()=>{
        const toprint = this.document.getElementById('print');
        console.log(toprint);
        console.log(window);
        // toprint.style.display = "block";
        html2pdf().from(toprint).save();
        // document.getElementById('print').style.display = "none";
    })
}

/*

// import JSZip from 'jszip.js';
// var JSZip = require("jszip");
// import JSZip from 'jszip';
var zip = new JSZip();
var count = 0;
var zipFilename = "zipFilename.zip";
// var urls = [
//   'http://image-url-1',
//   'http://image-url-2',
//   'http://image-url-3'
// ];

pdf.forEach(function(url){
  var filename = "filename" + count;
  // loading a file and add it in a zip file
  JSZipUtils.getBinaryContent(url, function (err, data) {
     if(err) {
        throw err; // or handle the error
     }
     zip.file(filename, data, {binary:true});
     count++;
     if (count == pdf.length) {
       var zipFile = zip.generate({type: "blob"});
       saveAs(zipFile, zipFilename);
     }
  });
});

*/