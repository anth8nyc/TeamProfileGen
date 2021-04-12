// A function that returns a license badge based on which license is passed in
function renderEmpBlocks(info) {

    let blocks = ' '
    let employeesArray = info
    console.log(employeesArray)
    employeesArray.forEach(employee => {
        blocks.concat(`
        <div class="rounded col-md-4">
              <div class="rounded bg-info text-light">
                  ${employee.empName}
              </div>
              <div class="col-md-11 container">
                  <div>ID: ${employee.id}</div>    
                  <div>Email: <a class="text-danger align-self-center" href = "mailto:${employee.email}">${employee.email}</a></div>    
                  <div>Office number: ${employee.office}</div>    
              </div>
        </div>`)
       
    });
    return blocks
  
}

//A function to generate markdown for README
function generatehtml(data) {

  let blocks = renderEmpBlocks(data);
    
  //Indented oddly to preserve string literal indenting in README production 
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>
  <body>
      <nav class="navbar rounded bg-danger text-light justify-content-md-between justify-content-center d-flex align-items-center pt-3">
          <div>
              <h1 class="mb-0 ml-3"> My Team</h1>
          </div>
      </nav>
      <main class="container-fluid d-flex mt-5">
        '${blocks}'
      </main> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
  </html>
`;

}

module.exports = generatehtml;
