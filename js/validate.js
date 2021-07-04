
      
      function validate(){
        let isValid = true;
        // variables - edit_profile
        const firstName = document.getElementById('inputfirstname').value;
        const lastName = document.getElementById('inputlastname').value;
        const phone = document.getElementById('inputPhone').value;
        const description = document.getElementById('textareaDescription').value;

        // variables - add_content
        const title = document.getElementById('inputTitle').value;
        const brief = document.getElementById('inputBrief').value;
        const contents = document.getElementById('elements-content').value;

        // validate - edit_profile
        if(firstName.length < 3 || firstName.length > 30){
          document.getElementById('error-inputfirstname').innerText = 'First Name must be has length 3 - 30';
          isValid = false;
        }

        if(lastName.length < 3 || lastName.length > 30){
          document.getElementById('error-inputlastname').innerText = 'Last Name must be has length 3 - 30';
          isValid = false;
        }

        if(phone.length < 9 || phone.length > 13){
          document.getElementById('error-inputPhone').innerText = 'Phone must be has length 9 - 13';
          isValid = false;
        }

        if(description.length > 200){
          document.getElementById('error-textareaDescription').innerText = 'Description must be has length < 200 ';
          isValid = false;
        }
        
        // validate - add_content
        if(title.length < 10 || title < 200){
            document.getElementById('error-inputTitle').innerText = 'Title must be has length 10 - 200';
            isValid = false;
        }

        if(brief.length < 30 || brief.length > 150){
            document.getElementById('error-inputBrief').innerText = 'Brief must be has length 30 - 150';
            isValid = false;
        }

        if(contents.length < 50 || contents.length > 1000){
            document.getElementById('error-elements-content').innerText = 'Contents must be has length 50 - 1000';
          }
          
        return isValid;
      }
